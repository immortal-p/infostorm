import { useForm } from '@mantine/form';
import { yupResolver } from 'mantine-form-yup-resolver';
import { TextInput, Button, Group } from '@mantine/core';
import { useFeedSchema } from '../model/validation';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../../../shared/lib/hooks/useAppDispatch';
import { addFeed } from '../../../app/state/features/addFeed/model/addFeedThunk';
import { useAppSelector } from '../../../shared/lib/hooks/useAppSelector';
import { selectFeeds } from '../../../app/state/entities/feed/model/selectors';
import { Notification } from '@mantine/core';

type FormStatus = 'idle' | 'success' | 'error';

export function AddFeedForm() {
    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState<FormStatus>('idle');
    const [formErrorKey, setFormErrorKey] = useState<string | null>(null);

    const feeds = useAppSelector(selectFeeds);
    const existingUrls = feeds.map((f) => f.url);

    const form = useForm({
        mode: 'controlled',
        initialValues: { url: '' },
        validate: yupResolver(useFeedSchema(existingUrls)),
    });

    const handleSubmit = async (values: { url: string }) => {
        setFormErrorKey(null);
        setSuccess('idle');
        setLoading(true);

        try {
            await dispatch(addFeed(values.url)).unwrap();
            form.reset();
            setSuccess('success');
        } catch (err) {
            setFormErrorKey('errors.networkError');
            setSuccess('error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            onSubmit={form.onSubmit(handleSubmit, (errors) => {
                const errorKey = errors.url;
                if (typeof errorKey === 'string') {
                    setFormErrorKey(errorKey);
                }

                setSuccess('idle');
            })}
            className="mt-8 min-h-27.5"
        >
            <Group align="flex-start">
                <TextInput
                    size="lg"
                    radius="md"
                    label="RSS Agregator"
                    placeholder="RSS url"
                    {...form.getInputProps('url', { withError: false })}
                    disabled={loading}
                    className="flex-1! [&>label]:mb-2"
                />
                <Button
                    type="submit"
                    size="lg"
                    className="min-w-35"
                    mt={36}
                    loading={loading}
                    disabled={loading}
                >
                    {t('ui.addBtn')}
                </Button>
            </Group>

            {formErrorKey && (
                <Notification
                    color="red"
                    withCloseButton
                    onClose={() => setFormErrorKey(null)}
                    mt="sm"
                >
                    {t(formErrorKey)}
                </Notification>
            )}

            {success === 'success' && (
                <Notification
                    color="green"
                    withCloseButton
                    onClose={() => setSuccess('idle')}
                    mt="sm"
                >
                    {t('formStatus.success')}
                </Notification>
            )}
        </form>
    );
}
