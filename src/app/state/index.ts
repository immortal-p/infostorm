import { configureStore } from '@reduxjs/toolkit';
import { feedsReducer } from './entities/feed/model/slice';
import { postsReducer } from './entities/post/model/slice';
import { loadFeeds, loadPosts } from '../../shared/lib/storage';

export const store = configureStore({
    reducer: {
        feeds: feedsReducer,
        posts: postsReducer,
    },
    preloadedState: {
        feeds: loadFeeds(),
        posts: loadPosts(),
    },
});

store.subscribe(() => {
    const state = store.getState();

    localStorage.setItem('feeds', JSON.stringify(state.feeds));
    localStorage.setItem('posts', JSON.stringify(state.posts));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;