import { Paper, Text, Title } from '@mantine/core';
import type { Feed } from '../../../app/state/entities/feed/model/types';
import { IconX } from '@tabler/icons-react';
import { useAppDispatch } from '../../../shared/lib/hooks/useAppDispatch';
import { feedRemoved } from '../../../app/state/entities/feed/model/slice';

export function FeedItem({ feed, activeFeedId }: { feed: Feed; activeFeedId: string | null }) {
    const isActive = feed.id === activeFeedId;
    const dispatch = useAppDispatch();

    return (
        <Paper
            p="md"
            withBorder
            mb="sm"
            className={`cursor-pointer relative! rounded-lg! ${isActive ? 'border-blue-500! border-2!' : 'border-transparent'}`}
        >
            <Title order={4}>
                <div className="w-full flex justify-between">
                    <span>{feed.title}</span>
                    <button
                        className="cursor-pointer absolute right-2 top-2 hover:*:text-blue-500 w-4.8 h-5 rounded-md transition duration-300"
                        onClick={(e) => {
                            e.stopPropagation();
                            dispatch(feedRemoved(feed.id));
                        }}
                    >
                        <IconX className="transition duration-300" width={16} height={16} />
                    </button>
                </div>
            </Title>
            <Text size="sm" color="dimmed">
                {feed.description}
            </Text>
        </Paper>
    );
}
