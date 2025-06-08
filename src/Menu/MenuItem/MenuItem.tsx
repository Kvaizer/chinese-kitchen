import { FC } from "react";
import "./styles.css";

type MenuItemT = {
  name: string;
  imgSrc: string;
};

export const MenuItem: FC<MenuItemT> = ({ imgSrc }) => {
  return (
    <div className="menuItem">
      <img src={imgSrc} className="img" />
    </div>
  );
};
