import { Title, Paper, Button } from '@mantine/core';
import { type Post } from '../../model/types';
import { PostModal } from './PostModal';
import { useDisclosure } from '@mantine/hooks';
import { MdMenuBook } from "react-icons/md";

interface PostItemProps {
    post: Post;
}

export function PostItem({ post }: PostItemProps) {
    const [opened, { open, close }] = useDisclosure(false);
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
                <Button onClick={open} className='p-2! min-h-10'><MdMenuBook className='text-neutral-200 h-6 w-8'/></Button>
            </Paper>
            <PostModal opened={opened} onClose={close} post={post} />
        </>
    );
}
