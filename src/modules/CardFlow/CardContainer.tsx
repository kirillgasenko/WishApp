import { useEffect } from "react";
import { WishCard } from "./components/WishCard/WishCard";
import wishTest from "../../assets/wishTest.svg";
import { AddCard } from "./components/WishCard/AddCard";
import { useDispatch } from "react-redux";
import { getUniqueWishes } from "../../components/Modal/redux/middleware";
import { useWish } from "../../components/Modal/redux/selectors";

export const CardContainer = () => {
  const dispatch = useDispatch();
  const { wishes } = useWish();
  console.log(wishes.content);
  useEffect(() => {
    dispatch(getUniqueWishes());
  }, []);

  return (
    <div className="card-container">
      <AddCard />
      {wishes?.content?.map((element: any) => (
        <WishCard costLevel={1} name={element.name} />
      ))}
      {/* <WishCard costLevel={1} name="default image" />
      <WishCard
        imgSrc={wishTest}
        costLevel={3}
        name="with image and loooooooooooong text"
      /> */}
    </div>
  );
};
