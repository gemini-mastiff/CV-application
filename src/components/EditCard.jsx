import { useState } from "react";
import "../styles/EditCard.css";

export default function EditCard({ symbol, title, children }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (open) setOpen(false);
    else setOpen(true);
  };

  return (
    <div className="edit-card">
      <div className="card-header">
        <img src={symbol} className="card-symbol"></img>
        <h2>{title}</h2>
        <button className="card-expand-btn" onClick={handleClick}></button>
      </div>
      {open && <div className="card-content">{children}</div>}
    </div>
  );
}

// TODO:
// - Implement button that shows/hide the card
//    - will do this by adding a show/hide class to the card
