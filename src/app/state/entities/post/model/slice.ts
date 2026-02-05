import { createSlice, createEntityAdapter, type PayloadAction } from '@reduxjs/toolkit';
import { type Post } from './types';
import { feedRemoved } from '../../feed/model/slice';

export const postsAdapter = createEntityAdapter<Post>();

const postsSlice = createSlice({
    name: 'post',
    initialState: postsAdapter.getInitialState(),
    reducers: {
        postsAdded: postsAdapter.upsertMany,
        postMarkedRead: (state, action: PayloadAction<string>) => {
            postsAdapter.updateOne(state, {
                id: action.payload,
                changes: { read: true },
            });
        },
    },

    extraReducers: (builder) => {
        builder.addCase(feedRemoved, (state, action) => {
            const feedId = action.payload;

            const idsToRemove = state.ids.filter((id) => state.entities[id]?.feedId === feedId);
            postsAdapter.removeMany(state, idsToRemove);
        });
    },
});

export const { postsAdded, postMarkedRead } = postsSlice.actions;
export const postsReducer = postsSlice.reducer;