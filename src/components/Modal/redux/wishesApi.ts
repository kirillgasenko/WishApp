import { commonFetch } from "../../../utils/apiHelpers";
import { WishesResponse } from "../types/reduxTypes";

const id = sessionStorage.getItem("userId");

export const postWishes = (body: WishesResponse) =>
  commonFetch("POST", `/user/${id}/wish`, body);

export const getWishes = () => commonFetch("GET", `/user/${id}/wish`);
