export default function PersonalDisplay({ nameValue, emailValue, phoneValue }) {
  return (
    <div className="personal-display">
      <h1>{nameValue}</h1>
      <p>{emailValue}</p>
      <p>{phoneValue}</p>
    </div>
  );
}
