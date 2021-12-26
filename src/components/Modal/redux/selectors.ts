import { useAppSelector } from "../../../store";

export const useWish = () => useAppSelector((state) => state.wishes);
