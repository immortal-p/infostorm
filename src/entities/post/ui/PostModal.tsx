import {
    Modal,
    Title,
    Text,
    Group,
    Button,
    Stack,
    Divider,
    Image,
    ScrollArea,
    Box,
} from '@mantine/core';
import { IconExternalLink, IconCalendar, IconX } from '@tabler/icons-react';
import type { Post } from '../../../app/state/entities/post/model/types';
import { useTranslation } from 'react-i18next';

interface PostModalProps {
    opened: boolean;
    onClose: () => void;
    post: Post | null;
}

export function PostModal({ opened, onClose, post }: PostModalProps) {
    const { t } = useTranslation();
    if (!post) return null;

    const formatDate = (date: Date | string) => {
        try {
            const dateObj = typeof date === 'string' ? new Date(date) : date;
            const userLocale = typeof navigator !== 'undefined' ? navigator.language : 'en-US';
            return dateObj.toLocaleDateString(userLocale, {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
            });
        } catch (e) {
            console.error(e);
            return 'Дата неизвестна';
        }
    };

    return (
        <Modal
            opened={opened}
            onClose={onClose}
            withCloseButton={false}
            size="lg"
            radius="md"
            padding="0"
            centered
            styles={{
                root: {
                    display: 'flex',
                    justifyContent: 'center',
                },
            }}
        >
            {post.img && (
                <Box
                    component="a"
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'block', cursor: 'pointer' }}
                >
                    <Image
                        src={post.img}
                        alt={post.title}
                        height={250}
                        fit="cover"
                        fallbackSrc="https://placehold.co/600x400?text=No+Image"
                    />
                </Box>
            )}
            <Stack gap="md" p="lg">
                <Stack gap="xs">
                    <Title order={2} style={{ lineHeight: 1.2 }}>
                        {post.title}
                    </Title>

                    {post.date && (
                        <Group gap="xs">
                            <IconCalendar size={14} color="gray" />
                            <Text size="xs" c="dimmed">
                                {formatDate(post.date)}
                            </Text>
                        </Group>
                    )}
                </Stack>

                <Divider />

                <ScrollArea.Autosize mah={400} type="hover">
                    <div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: post.description || 'Нет описания',
                            }}
                        />
                    </div>
                </ScrollArea.Autosize>

                <Divider />

                <Group justify="space-between">
                    <Button
                        variant="subtle"
                        color="gray"
                        onClick={onClose}
                        className="hover:border-blue-500! transition-all! duration-400!"
                        leftSection={<IconX size={18} />}
                    >
                        {t('ui.close')}
                    </Button>

                    <Button
                        variant="filled"
                        color="blue"
                        component="a"
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        leftSection={<IconExternalLink size={18} />}
                    >
                        {t('ui.read')}
                    </Button>
                </Group>
            </Stack>
        </Modal>
    );
}
