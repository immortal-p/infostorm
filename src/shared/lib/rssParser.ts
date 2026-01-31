import { nanoid } from 'nanoid';

export const parseRss = (xmlString: string, url: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(xmlString, 'application/xml');

    const errorNode = doc.querySelector('parsererror');
    if (errorNode) {
        throw new Error('parse_error');
    }

    const channel = doc.querySelector('channel');
    const feedId = nanoid();

    const feed = {
        id: feedId,
        title: channel?.querySelector('title')?.textContent ?? '',
        description: channel?.querySelector('description')?.textContent ?? '',
        url,
    };

    const getDateFromRSS = (item: Element) => {
        const dateSelectors = ['pubDate', 'date', 'updated', 'published'];
        for (const selector of dateSelectors) {
            const dateElement = item.querySelector(selector);
            if (dateElement?.textContent) {
                const parsedDate = Date.parse(dateElement.textContent);
                return !isNaN(parsedDate)
                    ? new Date(parsedDate).toISOString()
                    : new Date().toISOString();
            }
        }
        return new Date().toISOString();
    };

    const getImage = (item: Element) => {
        const enclosure = item.querySelector('enclosure[type^="image/"]');
        if (enclosure?.getAttribute('url')) {
            return enclosure.getAttribute('url');
        }

        const mediaContent =
            item.getElementsByTagName('media:content')[0] ||
            item.getElementsByTagName('content')[0];
        if (mediaContent?.getAttribute('url')) {
            return mediaContent.getAttribute('url');
        }

        const mediaThumbnail =
            item.getElementsByTagName('media:thumbnail')[0] ||
            item.getElementsByTagName('thumbnail')[0];
        if (mediaThumbnail?.getAttribute('url')) {
            return mediaThumbnail.getAttribute('url');
        }

        return null;
    };

    const items = Array.from(doc.querySelectorAll('item')).map((item) => ({
        id: nanoid(),
        feedId: feedId,
        title: item.querySelector('title')?.textContent ?? '',
        link: item.querySelector('link')?.textContent ?? '',
        description: item.querySelector('description')?.textContent ?? '',
        date: getDateFromRSS(item),
        img: getImage(item),
        read: false,
    }));

    return { feed, items };
};
