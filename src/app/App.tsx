import { Container, Grid } from '@mantine/core';
import '../App.css';
import { FeedList } from '../entities/feed/ui/FeedList';
import { PostList } from '../entities/post/ui/PostList';
import { AddFeedForm } from '../features/add-feed/ui/AddFeedForm';
import { useTranslation } from 'react-i18next';

function App() {
    const { t } = useTranslation();
    return (
        <Container className="min-w-full w-full flex justify-center flex-col p-0!">
            <div className="h-full bg-[#1b1b1b] w-full py-9 flex justify-center">
                <div className="max-w-4xl">
                    <p className="text-3xl">{t('ui.title')}</p>
                    <AddFeedForm />
                    <p className="text-lg mt-4 text-zinc-400">https://lorem-rss.hexlet.app/feed</p>
                </div>
            </div>
            <div className="w-full flex justify-center">
                <Grid mt="xl" className="max-w-5xl">
                    <Grid.Col span={8}>
                        <PostList />
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <FeedList />
                    </Grid.Col>
                </Grid>
            </div>
        </Container>
    );
}

export default App;
