import { useState } from "react";
import "../styles/PersonalInfo.css";
import emailSvg from "../assets/email.svg";
import phoneSvg from "../assets/phone.svg";
import Input from "./Input.jsx";
import ContactItem from "./ContactItem.jsx";

export default function PersonalInfo() {
  const [name, setName] = useState("Joe Bloggs");
  const [editName, setEditName] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setEditName(false);
    }
  };

  return (
    <div className="personal-info-container">
      {editName ? (
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={() => setEditName(false)}
        />
      ) : (
        <h2 className="personal-name" onClick={() => setEditName(true)}>
          {name}
        </h2>
      )}
      <div className="contact-info">
        <div className="contact-item">
          <ContactItem initValue="joebloggs@dodo.com" symbol={emailSvg} />
        </div>
        <div className="contact-item">
          <ContactItem initValue="07777 7777" symbol={phoneSvg} />
        </div>
      </div>
    </div>
  );
}
