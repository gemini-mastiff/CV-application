import "../styles/PersonalDisplay.css";
import emailSvg from "../assets/email.svg";
import phoneSvg from "../assets/phone.svg";

export default function PersonalDisplay({ personalInfo }) {
  const nameValue = personalInfo.name;
  const emailValue = personalInfo.email;
  const phoneValue = personalInfo.number;
  const isTrue = nameValue || emailValue || phoneValue;

  return (
    <>
      <div className="personal-display">
        {nameValue && <h1 className="name">{nameValue}</h1>}
        <div className="contact-info">
          {emailValue && (
            <div className="contact-item">
              <img src={emailSvg} alt="" className="contact-icon" />
              <p className="email">{emailValue}</p>
            </div>
          )}
          {phoneValue && (
            <div className="contact-item">
              <img src={phoneSvg} alt="" className="contact-icon" />
              <p className="number">{phoneValue}</p>
            </div>
          )}
        </div>
      </div>
      {isTrue && <hr />}
    </>
  );
}
