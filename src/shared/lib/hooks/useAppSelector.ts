import { type TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from '../../../app/state';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
