import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../../../index';

export const selectFeeds = createSelector(
    [(state: RootState) => state.feeds.ids, (state: RootState) => state.feeds.entities],
    (ids, entities) => ids.map((id) => entities[id]),
);
