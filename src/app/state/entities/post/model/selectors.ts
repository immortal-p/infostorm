import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../../../index';
import { postsAdapter } from './slice';

export const { selectAll: selectAllPosts } = postsAdapter.getSelectors<RootState>(
    (state) => state.posts,
);

export const selectorPostsByFeedId = createSelector(
    [selectAllPosts, (_state: RootState, feedId: string | null) => feedId],
    (posts, feedId) => {
        return posts.filter((post) => post.feedId === feedId);
    },
);
