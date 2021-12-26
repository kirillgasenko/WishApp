import { commonFetch } from "../../../utils/apiHelpers";
import { WishesResponse } from "../types/reduxTypes";

export const postWishes = (body: WishesResponse) =>
  commonFetch("POST", "/user/10/wish", body);
