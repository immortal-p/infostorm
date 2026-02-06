import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type Feed } from './types';

type FeedsState = {
    ids: string[];
    entities: Record<string, Feed>;
    currentFeedId: string | null;
};

export const initialState: FeedsState = {
    ids: [],
    entities: {},
    currentFeedId: null,
};

const feedsSlice = createSlice({
    name: 'feeds',
    initialState,
    reducers: {
        feedAdded: (state, action: PayloadAction<Feed>) => {
            const feed = action.payload;
            state.ids.push(feed.id);
            state.entities[feed.id] = feed;

            if (!state.currentFeedId) {
                state.currentFeedId = feed.id;
            }
        },

        feedRemoved: (state, action: PayloadAction<string>) => {
            const idToRemove = action.payload;
            state.ids = state.ids.filter((feedId) => feedId !== idToRemove);
            delete state.entities[idToRemove];

            if (state.currentFeedId === idToRemove) {
                state.currentFeedId = state.ids.length > 0 ? state.ids[0] : null;
            }
        },

        feedSelected: (state, action: PayloadAction<string>) => {
            state.currentFeedId = action.payload;
        },
    },
});

export const { feedAdded, feedRemoved, feedSelected } = feedsSlice.actions;
export const feedsReducer = feedsSlice.reducer;
export type { FeedsState };
