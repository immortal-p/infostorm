import { Title, Paper, Button } from '@mantine/core';
import type { Post } from '../../../app/state/entities/post/model/types';
import { PostModal } from './PostModal';
import { useDisclosure } from '@mantine/hooks';
import { MdMenuBook } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { postMarkedRead } from '../../../app/state/entities/post/model/slice';

interface PostItemProps {
    post: Post;
}

export function PostItem({ post }: PostItemProps) {
    const [opened, { open, close }] = useDisclosure(false);
    const dispatch = useDispatch();

    const handleReadClick = () => {
        dispatch(postMarkedRead(post.id));
    };

    return (
        <>
            <Paper
                className="flex! justify-between! items-center!"
                p="md"
                withBorder
                mb="sm"
                radius="md"
            >
                <Title className="max-w-[90%]" order={4}>
                    {post.title}
                </Title>
                <Button
                    onClick={() => {
                        open();
                        handleReadClick();
                    }}
                    className={`p-2! min-h-10 ${post.read === true ? 'bg-[#1b1b1b]!' : ''}`}
                >
                    <MdMenuBook className="text-neutral-200 h-6 w-8" />
                </Button>
            </Paper>
            <PostModal opened={opened} onClose={close} post={post} />
        </>
    );
}
