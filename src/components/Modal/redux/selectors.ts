import { useAppSelector } from "../../../store";

export const useWish = () =>
  useAppSelector((state) => {
    console.log(state);
    return state.wishes;
  });
