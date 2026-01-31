import { PostItem } from './PostItem';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../../shared/lib/hooks/useAppSelector';
import { selectorPostsByFeedId } from '../../../app/state/entities/post/model/selectors';
import { Skeleton } from '@mantine/core';

export function PostList() {
    const activeFeedId = useAppSelector((state) => state.feeds.currentFeedId);
    const posts = useAppSelector((state) =>
        activeFeedId ? selectorPostsByFeedId(state, activeFeedId) : [],
    );
    const { t } = useTranslation();

    return (
        <div>
            <h3 className="mb-4 text-xl">{t('ui.posts')}</h3>
            {!activeFeedId ? (
                <>
                    <div className="border-2 border-[#2e2e2e] p-4 rounded-xl mb-4">
                        <Skeleton height={15} width={240} mb="10"></Skeleton>
                        <Skeleton height={10} width={350} mb="10"></Skeleton>
                        <Skeleton height={10} width={600}></Skeleton>
                    </div>
                    <div className="border-2 border-[#2e2e2e] p-4 rounded-xl mb-4">
                        <Skeleton height={15} width={240} mb="10"></Skeleton>
                        <Skeleton height={10} width={350} mb="10"></Skeleton>
                        <Skeleton height={10} width={200}></Skeleton>
                    </div>
                    <div className="border-2 border-[#2e2e2e] p-4 rounded-xl mb-4">
                        <Skeleton height={15} width={240} mb="10"></Skeleton>
                        <Skeleton height={10} width={350} mb="10"></Skeleton>
                        <Skeleton height={10} width={400}></Skeleton>
                    </div>
                </>
            ) : (
                posts.map((item) => <PostItem key={item.id} post={item} />)
            )}
        </div>
    );
}
