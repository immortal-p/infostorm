import { Title, Paper, Button } from '@mantine/core';
import { type Post } from '../../model/types';
import { PostModal } from './PostModal';
import { useDisclosure } from '@mantine/hooks';
import { useTranslation } from 'react-i18next';

interface PostItemProps {
    post: Post;
}

export function PostItem({ post }: PostItemProps) {
    const [opened, { open, close }] = useDisclosure(false);
    const { t } = useTranslation();
    return (
        <>
            <Paper
                className="flex! justify-between! items-center!"
                p="md"
                withBorder
                mb="sm"
                radius="md"
            >
                <Title className="max-w-[85%]" order={4}>
                    {post.title}
                </Title>
                <Button onClick={open}>{t('ui.view')}</Button>
            </Paper>
            <PostModal opened={opened} onClose={close} post={post} />
        </>
    );
}
