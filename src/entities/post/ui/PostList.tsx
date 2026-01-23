import { useRSSStore } from '../../model/store';
import { PostItem } from './PostItem';
import { useTranslation } from 'react-i18next';

export function PostList() {
    const posts = useRSSStore((state) => state.posts);
    const { t } = useTranslation();

    if (posts.length === 0) return null;

    return (
        <div>
            <h3 className="mb-4 text-xl">{t('ui.posts')}</h3>
            {posts.map((item) => (
                <PostItem key={item.id} post={item} />
            ))}
        </div>
    );
}
