import { useState } from "react";
import Item from "../Item";
const Fooditems = ({ items }) => {
  let [activeItem, setactiveItem] = useState([]);
  let onBuyButton = (item, event) => {
    let newItem = [...activeItem, item];
    setactiveItem(newItem);
  };
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          fooditemss={item}
          bought={activeItem.includes(item)}
          handleByButton={(event) => onBuyButton(item, event)}
        ></Item>
      ))}
    </ul>
  );
};
export default Fooditems;
