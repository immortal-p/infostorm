import type { FeedsState } from '../../app/state/entities/feed/model/slice';
import { initialState as feedsInitialState } from "../../app/state/entities/feed/model/slice"
import { postsAdapter } from "../../app/state/entities/post/model/slice"

export const loadFeeds = (): FeedsState => {
  const raw = localStorage.getItem('feeds');
  return raw ? JSON.parse(raw) : feedsInitialState;
};

export const loadPosts = () => {
  const raw = localStorage.getItem('posts');
  return raw ? JSON.parse(raw) : postsAdapter.getInitialState();
};