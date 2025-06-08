import { FC } from "react";
import { MenuItem } from "./MenuItem/MenuItem";
import "./styles.css";
import { db } from "../db/db";

export const Menu: FC = () => {
  return (
    <div className="mainContainer">
      {db.map((item) => (
        <MenuItem key={item.id} name={item.name} imgSrc={item.imgSrc} />
      ))}
    </div>
  )
}
