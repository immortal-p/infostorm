import { Container, Grid, Group } from '@mantine/core';
import { FeedList } from '../entities/feed/ui/FeedList';
import { PostList } from '../entities/post/ui/PostList';
import { AddFeedForm } from '../features/add-feed/ui/AddFeedForm';
import { useTranslation } from 'react-i18next';
import { RssExamplesDrawer } from '../widjets/rss-examples-drawer/RssExamplesDrawer';
import rssIcon from '../shared/assets/icons/rss.svg';
import LanguageSwitcher from '../widjets/language-switcher/LanguageSwitcher';

function App() {
    const { t } = useTranslation();

    return (
        <Container fluid className="p-0!">
            <div className="w-full bg-[#1b1b1b] py-9">
                 <div className="mx-auto max-w-4xl">
                    <div className="flex w-full justify-between">
                        <Group>
                            <img src={rssIcon} alt="" />
                            <p className="text-3xl -ml-2">{t('ui.title')}</p>
                        </Group>
                        <LanguageSwitcher />
                    </div>
                    <AddFeedForm />
                    <RssExamplesDrawer />
                </div>
            </div>

            <div className="w-full">
                <div className="mx-auto max-w-5xl">
                    <Grid mt="xl">
                        <Grid.Col span={8}>
                            <PostList />
                        </Grid.Col>
                        <Grid.Col span={4}>
                            <FeedList />
                        </Grid.Col>
                    </Grid>
                </div>
            </div>
        </Container>
    );
}

export default App;
