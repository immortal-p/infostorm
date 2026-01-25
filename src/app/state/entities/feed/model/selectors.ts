import { createSelector } from '@reduxjs/toolkit';
import { type RootStore } from "../../..";

export const selectFeeds = createSelector(
    [
        (state: RootStore) => state.feeds.ids,
        (state: RootStore) => state.feeds.entities,
    ],
    (ids, entities) => ids.map(id => entities[id])
);
