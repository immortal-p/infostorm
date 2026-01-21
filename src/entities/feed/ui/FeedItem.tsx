import { Paper, Text, Title } from '@mantine/core';
import { type Feed } from '../../model/types';

export function FeedItem({ feed }: { feed: Feed }) {
    return (
        <Paper p="md" withBorder mb="sm">
            <Title order={4}>{feed.title}</Title>
            <Text size="sm" color="dimmed">
                {feed.description}
            </Text>
        </Paper>
    );
}
