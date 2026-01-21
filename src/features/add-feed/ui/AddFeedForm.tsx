import { useForm, yupResolver } from '@mantine/form';
import { TextInput, Button, Group } from '@mantine/core';
import { useRSSStore } from '../../../entities/model/store';
import { useFeedSchema } from '../model/validation';
import { fetchRssContent } from '../../../entities/feed/api/feedApi';
import { parseRss } from '../../../shared/lib/rssParser';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export function AddFeedForm() {
    const { t } = useTranslation();
    const [loading, setLoading] = useState(false);
    const feeds = useRSSStore((state) => state.feeds);
    const addFeedWithPosts = useRSSStore((state) => state.addFeedWithPosts);

    const existingUrls = feeds.map((f) => f.url);

    const form = useForm({
        mode: 'controlled',
        initialValues: { url: '' },
        validate: yupResolver(useFeedSchema(existingUrls)),
    });

    const handleSubmit = async (values: { url: string }) => {
        setLoading(true);
        try {
            const xml = await fetchRssContent(values.url);
            const { feed, items } = parseRss(xml, values.url);
            addFeedWithPosts(feed, items);
            form.reset();
        } catch (err: unknown) {
            if (err instanceof Error) {
                if (err.message === 'parse_error') {
                    form.setFieldError('url', t('errors.invalidRss'));
                } else {
                    form.setFieldError('url', t('errors.networkError'));
                }
            } else {
                form.setFieldError('url', t('errors.unkownError'));
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={form.onSubmit(handleSubmit)} className="mt-4">
            <Group align="flex-start">
                <TextInput
                    size="lg"
                    radius="md"
                    label="RSS Agregator"
                    placeholder="RSS url"
                    {...form.getInputProps('url')}
                    disabled={loading}
                    style={{ width: 900 }}
                    className="flex-1!"
                />
                <Button type="submit" size="lg" mt={27} loading={loading}>
                    Добавить
                </Button>
            </Group>
        </form>
    );
}
