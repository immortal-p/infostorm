import {
    Drawer,
    Button,
    Text,
    CopyButton,
    Group,
    Accordion,
    AccordionItem,
    AccordionPanel,
    AccordionControl,
    Divider,
    Stack,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { nanoid } from 'nanoid';
import { useTranslation } from 'react-i18next';
import newsIcon from './assets/news.svg';
import businessIcon from './assets/business.svg';
import techIcon from './assets/tech.svg';
import travelIcon from './assets/travel.svg';

interface RssItem {
    label: string;
    url: string;
}

interface exmaples {
    icon: string;
    title: string;
    items: RssItem[];
}

const rssExamples: exmaples[] = [
    {
        icon: newsIcon,
        title: 'ui.news',
        items: [
            {
                label: 'BBC News',
                url: 'https://feeds.bbci.co.uk/news/rss.xml',
            },
            {
                label: 'Radio Free Europe',
                url: 'https://www.rferl.org/api/',
            },
            {
                label: 'The Hill',
                url: 'https://thehill.com/homenews/feed/',
            },
            {
                label: 'NY Post',
                url: 'https://nypost.com/feed/',
            },
            {
                label: 'ABC News',
                url: 'https://abcnews.go.com/abcnews/internationalheadlines',
            },
        ],
    },
    {
        icon: techIcon,
        title: 'ui.tech',
        items: [
            {
                label: 'MIT News - AI',
                url: 'http://news.mit.edu/rss/topic/artificial-intelligence2',
            },
            {
                label: 'VentureBeat',
                url: 'https://venturebeat.com/feed/',
            },
            {
                label: 'Deep Mind',
                url: 'https://deepmind.com/blog/feed/basic/',
            },
            {
                label: 'Wired',
                url: 'https://www.wired.com/feed/rss',
            },
            {
                label: 'Arc Techica',
                url: 'http://feeds.arstechnica.com/arstechnica/index/',
            },
        ],
    },
    {
        icon: businessIcon,
        title: 'ui.business',
        items: [
            {
                label: 'The Economist',
                url: 'https://www.economist.com/latest/rss.xml',
            },
            {
                label: 'Bloombeg',
                url: 'https://feeds.bloomberg.com/markets/news.rss',
            },
            {
                label: 'Forbes',
                url: 'https://www.forbes.com/business/feed/',
            },
            {
                label: 'Side Hustle Nation',
                url: 'https://www.sidehustlenation.com/feed/',
            },
            {
                label: 'Financial Themes',
                url: 'https://www.ft.com/?format=rss',
            },
            {
                label: 'MarketWatch',
                url: 'https://www.marketwatch.com/rss/topstories',
            },
        ],
    },
    {
        icon: travelIcon,
        title: 'ui.travel',
        items: [
            {
                label: 'Conde Nast Traveler',
                url: 'https://www.cntraveler.com/feed/rss',
            },
            {
                label: 'Adventure Journal',
                url: 'https://www.adventure-journal.com/feed/',
            },
            {
                label: 'Two Monkeys',
                url: 'https://twomonkeystravelgroup.com/feed/',
            },
            {
                label: 'Flight Mate',
                url: 'https://flightmateza.co.za/feed/',
            },
            {
                label: 'Nomad Experiment',
                url: 'https://www.thenomadexperiment.com/feed/',
            },
        ],
    },
];

export function RssExamplesDrawer() {
    const [opened, { open, close }] = useDisclosure(false);
    const { t } = useTranslation();

    return (
        <>
            <Drawer opened={opened} onClose={close} position="right" title={t('ui.list')} size="md">
                <Accordion variant="separated">
                    {rssExamples.map((category) => (
                        <AccordionItem key={category.title} value={category.title}>
                            <AccordionControl>
                                <Group>
                                    <img src={category.icon} alt="" />
                                    {t(category.title)}
                                </Group>
                            </AccordionControl>
                            <Divider />
                            <AccordionPanel className="w-full" key={nanoid()}>
                                {category.items.map((item) => (
                                    <Stack key={item.url}>
                                        <Group className="flex! justify-between! pt-2 -mb-2">
                                            <Text size="sm" lineClamp={1}>
                                                {item.label}
                                            </Text>
                                            <CopyButton value={item.url}>
                                                {({ copy }) => (
                                                    <Button
                                                        size="xs"
                                                        variant="light"
                                                        onClick={copy}
                                                    >
                                                        Copy
                                                    </Button>
                                                )}
                                            </CopyButton>
                                        </Group>
                                        <Divider />
                                    </Stack>
                                ))}
                            </AccordionPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </Drawer>

            <Button variant="default" onClick={open} className="mt-4 text-neutral-300!">
                {t('ui.example')}
            </Button>
        </>
    );
}
