import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchRssContent } from "../../../../../entities/feed/api/feedApi";
import { parseRss } from "../../../../../shared/lib/rssParser";
import { feedAdded } from "../../../entities/feed/model/slice";
import { postsAdded } from "../../../entities/post/model/slice";

export const addFeed = createAsyncThunk(
    'feed/addFeed',
    async (url: string, { dispatch, rejectWithValue }) => {
        try {
            const xml = await fetchRssContent(url)
            const { feed, items } = parseRss(xml, url)

            dispatch(feedAdded(feed))
            dispatch(postsAdded(items))

            return true
        }
        catch (err) {
            return rejectWithValue(err)
        }
    }
)