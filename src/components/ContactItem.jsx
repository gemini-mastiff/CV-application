import { useState } from "react";
import Input from "./Input.jsx";

export default function ContactItem({ initValue, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(initValue);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setIsEditing(false);
    }
  };

  return (
    <div className="contact-item">
      <img src={symbol} alt="" />
      {isEditing ? (
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={() => setIsEditing(false)}
        />
      ) : (
        <p onClick={() => setIsEditing(true)}>{value}</p>
      )}
    </div>
  );
}
