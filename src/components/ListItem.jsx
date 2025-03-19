import "../styles/ListItem.css";
import pencilSvg from "../assets/pencil.svg";
import saveSvg from "../assets/save.svg";
import delSvg from "../assets/delete.svg";
import AddItemBtn from "./AddItemBtn.jsx";
import { useState } from "react";

export default function ListItem({ listItem, handleDel, handleSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [item, setItem] = useState(listItem);

  if (isEditing) {
    return (
      <div className="list-item-container">
        <div className="list-item">
          <hr className="divider" />
          <div className="content input">
            <div className="item-header">
              <input
                type="text"
                value={item.place}
                onChange={(e) => setItem({ ...item, place: e.target.value })}
              />
              <p>
                <input
                  type="month"
                  value={item.start}
                  onChange={(e) => setItem({ ...item, start: e.target.value })}
                />
                <input
                  type="month"
                  value={item.end}
                  onChange={(e) => setItem({ ...item, end: e.target.value })}
                />
              </p>
            </div>
            <input
              className="topic"
              type="text"
              value={item.topic}
              onChange={(e) => setItem({ ...item, topic: e.target.value })}
            />
            <textarea
              className="desc"
              value={item.desc}
              onChange={(e) => setItem({ ...item, desc: e.target.value })}
            />
          </div>
        </div>
        <div className="btn-container">
          <button
            className="save-btn"
            onClick={() => {
              handleSave(item);
              setIsEditing(false);
            }}
          >
            <img src={saveSvg} alt="" />
          </button>
          <button className="del-btn" onClick={handleDel}>
            <img src={delSvg} alt="" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="list-item-container" key={item.key}>
      <div className="list-item">
        <hr className="divider" />
        <div className="content">
          <div className="item-header">
            <h3 className="place">{item.place}</h3>
            <p>{`${item.start} - ${item.end}`}</p>
          </div>
          <h3 className="topic">{item.topic}</h3>
          <p className="desc">{item.desc}</p>
        </div>
      </div>
      <div className="btn-container">
        <button className="edit-btn" onClick={() => setIsEditing(true)}>
          <img src={pencilSvg} alt="" />
        </button>
        <button className="del-btn" onClick={handleDel}>
          <img src={delSvg} alt="" />
        </button>
      </div>
    </div>
  );
}
