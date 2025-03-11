import "../styles/EditCard.css";

export default function EditCard({ symbol, title, children }) {
  return (
    <div className="edit-card">
      <div className="card-header">
        <img src={symbol} className="card-symbol"></img>
        <h2>{title}</h2>
        <button className="card-expand-btn"></button>
      </div>
      <div className="card-content card-hidden">{children}</div>
    </div>
  );
}

// TODO:
// - Implement button that shows/hide the card
//    - will do this by adding a show/hide class to the card
