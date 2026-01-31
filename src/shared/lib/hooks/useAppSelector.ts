import { type TypedUseSelectorHook, useSelector } from "react-redux";
import type { RootStore } from "../../../app/state";

export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector