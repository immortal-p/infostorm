import { createSelector } from '@reduxjs/toolkit';
import type { RootStore } from '../../..';
import { postsAdapter } from './slice';

export const {
    selectAll: selectAllPosts,
} = postsAdapter.getSelectors<RootStore>(state => state.posts)

export const selectorPostsByFeedId = createSelector(
    [
        selectAllPosts,
        (_state: RootStore, feedId: string | null) => feedId
    ],
    (posts, feedId) => {
        return posts.filter(post => post.feedId === feedId)
    }
)