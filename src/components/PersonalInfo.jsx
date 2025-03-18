import { useState } from "react";
import "../styles/PersonalInfo.css";
import emailSvg from "../assets/email.svg";
import phoneSvg from "../assets/phone.svg";
import pencilSvg from "../assets/pencil.svg";
import saveSvg from "../assets/save.svg";

export default function PersonalInfo() {
  const [name, setName] = useState("Joe Bloggs");
  const [email, setEmail] = useState("joebloggs@dodo.com");
  const [number, setNumber] = useState("07777 7777");
  const [isEditing, setIsEditing] = useState(false);

  if (isEditing) {
    return (
      <div className="personal-info-container">
        <div className="personal-info">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="contact-info">
            <div className="contact-item">
              {email && <img src={emailSvg} alt="" />}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="contact-item">
              {number && <img src={phoneSvg} alt="" />}
              <input
                type="tel"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="btn-container">
          <button className="save-btn" onClick={() => setIsEditing(false)}>
            <img src={saveSvg} alt="" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="personal-info-container">
      <div className="personal-info">
        <h2 className="personal-name" onClick={() => setName(true)}>
          {name}
        </h2>
        <div className="contact-info">
          <div className="contact-item">
            {email && <img src={emailSvg} alt="" />}
            <p>{email}</p>
          </div>
          <div className="contact-item">
            {number && <img src={phoneSvg} alt="" />}
            <p>{number}</p>
          </div>
        </div>
      </div>
      <div className="btn-container">
        <button className="edit-btn" onClick={() => setIsEditing(true)}>
          <img src={pencilSvg} alt="" />
        </button>
      </div>
    </div>
  );
}
