import { useRSSStore } from '../../model/store';
import { FeedItem } from './FeedItem';
import { useTranslation } from 'react-i18next';

export function FeedList() {
    const feeds = useRSSStore((state) => state.feeds);
    const { t } = useTranslation();

    if (feeds.length === 0) return null;

    return (
        <div>
            <h3 className="mb-4 text-xl">{t('ui.feeds')}</h3>
            {feeds.map((item) => (
                <FeedItem key={item.id} feed={item} />
            ))}
        </div>
    );
}
