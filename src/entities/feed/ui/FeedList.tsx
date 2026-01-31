import { FeedItem } from './FeedItem';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../../shared/lib/hooks/useAppSelector';
import { useAppDispatch } from '../../../shared/lib/hooks/useAppDispatch';
import { selectFeeds } from '../../../app/state/entities/feed/model/selectors';
import { feedSelected } from '../../../app/state/entities/feed/model/slice';
import { Skeleton } from '@mantine/core';

export function FeedList() {
    const feeds = useAppSelector(selectFeeds);
    const dispatch = useAppDispatch();
    const activeFeedId = useAppSelector((state) => state.feeds.currentFeedId);
    const { t } = useTranslation();

    return (
        <div>
            <h3 className="mb-4 text-xl">{t('ui.feeds')}</h3>
            {feeds.length === 0 ? (
                <>
                    <div className="border-2 border-[#2e2e2e] p-4 rounded-xl mb-4">
                        <Skeleton height={24} />
                        <Skeleton height={19} w={270} mt={12} />
                    </div>
                </>
            ) : (
                feeds.map((feed) => (
                    <div key={feed.id} onClick={() => dispatch(feedSelected(feed.id))}>
                        <FeedItem feed={feed} activeFeedId={activeFeedId} />
                    </div>
                ))
            )}
        </div>
    );
}
