import "../styles/AddItemBtn.css";
import plusSvg from "../assets/plus.svg";

export default function AddItemBtn({ handleClick }) {
  return (
    <button className="new-list-item-btn" onClick={handleClick}>
      <img src={plusSvg} alt="" />
      <p>Add Item</p>
    </button>
  );
}
