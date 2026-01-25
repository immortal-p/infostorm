import { FeedItem } from './FeedItem';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../../shared/lib/hooks/useAppSelector';
import { useAppDispatch } from '../../../shared/lib/hooks/useAppDispatch';
import { selectFeeds } from '../../../app/state/entities/feed/model/selectors';
import { feedSelected } from '../../../app/state/entities/feed/model/slice';


export function FeedList() {
    const feeds = useAppSelector(selectFeeds);
    const dispatch = useAppDispatch()
    const activeFeedId = useAppSelector(state => state.feeds.currentFeedId)
    const { t } = useTranslation();

    if (feeds.length === 0) return null;

    return (
        <div>
            <h3 className="mb-4 text-xl">{t('ui.feeds')}</h3>
            {feeds.map((feed) => (
                <div key={feed.id} onClick={() => dispatch(feedSelected(feed.id))}>
                    <FeedItem feed={feed} activeFeedId={activeFeedId} />
                </div>
            ))}
        </div>
    );
}
