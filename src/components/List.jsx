import { useState } from "react";
import "../styles/List.css";
import AddItemBtn from "./AddItemBtn.jsx";
import ListItem from "./ListItem.jsx";

export default function List({ title, arr }) {
  const [listArr, setListArr] = useState(arr);

  const handleAdd = () => {
    setListArr([
      ...listArr,
      {
        key: crypto.randomUUID(),
        place: "",
        topic: "",
        start: "2001-01",
        end: "2001-01",
        desc: "",
      },
    ]);
  };

  return (
    <div className="list-container">
      <div className="list-header">
        <h2>{title}</h2>
        <AddItemBtn className="add-item-btn" handleClick={handleAdd} />
      </div>
      <div className="list">
        {listArr.map((listItem) => {
          return (
            <ListItem
              listItem={listItem}
              key={listItem.key}
              handleDel={() =>
                setListArr(listArr.filter((item) => item.key !== listItem.key))
              }
              handleSave={(newItem) => {
                const index = listArr.findIndex(
                  (item) => item.key === listItem.key
                );
                const arrCopy = [...listArr];
                arrCopy[index] = newItem;
                setListArr(arrCopy);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
