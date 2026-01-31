import { configureStore } from '@reduxjs/toolkit';
import { feedsReducer } from './entities/feed/model/slice';
import { postsReducer } from './entities/post/model/slice';

export const store = configureStore({
    reducer: {
        feeds: feedsReducer,
        posts: postsReducer,
    },
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
