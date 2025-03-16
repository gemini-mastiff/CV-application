import "../styles/PersonalInput.css";

export default function PersonalInput({
  nameValue,
  nameOnChange,
  emailValue,
  emailOnChange,
  phoneValue,
  phoneOnChange,
}) {
  return (
    <div className="personal-input">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={nameValue} onChange={nameOnChange} />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={emailValue}
        onChange={emailOnChange}
      />
      <label htmlFor="number">Phone Number:</label>
      <input
        type="tel"
        id="number"
        value={phoneValue}
        onChange={phoneOnChange}
      />
    </div>
  );
}
