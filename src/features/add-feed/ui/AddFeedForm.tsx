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

export function AddFeedForm() {
    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    const [loading, setLoading] = useState(false);

    const feeds = useAppSelector(selectFeeds);
    const existingUrls = feeds.map((f) => f.url);

    const form = useForm({
        mode: 'controlled',
        initialValues: { url: '' },
        validate: yupResolver(useFeedSchema(existingUrls)),
    });

    const handleSubmit = async (values: { url: string }) => {
        setLoading(true);
        try {
            await dispatch(addFeed(values.url)).unwrap();
            form.reset();
        } catch (err) {
            form.setFieldError('url', t('errors.newtworkError'));
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={form.onSubmit(handleSubmit)} className="mt-4 min-h-27.5">
            <Group align="flex-start">
                <TextInput
                    size="lg"
                    radius="md"
                    label="RSS Agregator"
                    placeholder="RSS url"
                    {...form.getInputProps('url')}
                    disabled={loading}
                    style={{ width: 900 }}
                    className="flex-1! [&>label]:mb-2"
                />
                <Button type="submit" size="lg" className="min-w-35" mt={36} loading={loading}>
                    {t('ui.addBtn')}
                </Button>
            </Group>
        </form>
    );
}
