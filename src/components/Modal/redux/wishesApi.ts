import { commonFetch } from "../../../utils/apiHelpers";
import { WishesResponse } from "../types/reduxTypes";

export const postWishes = (body: WishesResponse) =>
  commonFetch("POST", "/user/2/wish", body);

export const getWishes = () => commonFetch("GET", "/user/2/wish");
