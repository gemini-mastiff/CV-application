import "../styles/NewListItemBtn.css";
import plusSvg from "../assets/plus.svg";

export default function NewListItemBtn(handleClick) {
  return (
    <button className="new-list-item-btn" onClick={handleClick}>
      <img src={plusSvg} alt="" />
      <p>New Item</p>
    </button>
  );
}
