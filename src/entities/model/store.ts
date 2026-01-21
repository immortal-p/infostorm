import { create } from 'zustand';
import { nanoid } from 'nanoid';
import { type Feed, type Post, type ParsedFeed, type ParsedPost } from './types';

interface RSSState {
    feeds: Feed[];
    posts: Post[];
    addFeedWithPosts: (newFeed: ParsedFeed, newPosts: ParsedPost[]) => void;
    updateFeedPosts: (feedId: string, parsedItems: ParsedPost[]) => void;
}

export const useRSSStore = create<RSSState>((set, get) => ({
    feeds: [],
    posts: [],
    viewedPstIds: new Set(),

    addFeedWithPosts: (newFeed, newPosts) => {
        const feedId = nanoid();
        const preparendPosts = newPosts.map((p) => ({ ...p, id: nanoid(), feedId }));

        set((state) => ({
            feeds: [...state.feeds, { ...newFeed, id: feedId }],
            posts: [...preparendPosts, ...state.posts],
        }));
    },

    updateFeedPosts: (feedId, parsedItems) => {
        const { posts } = get();
        const onlyNewItems = parsedItems.filter(
            (newItem) => !posts.some((oldPost) => oldPost.link === newItem.link),
        );

        if (onlyNewItems.length > 0) {
            const newPostsWithIds = onlyNewItems.map((item) => ({
                ...item,
                id: nanoid(),
                feedId,
            }));

            set({
                posts: [...newPostsWithIds, ...posts],
            });
        }
    },
}));
