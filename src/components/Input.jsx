import "../styles/Input.css";

export default function Input({ name, type = "text", value, onChange }) {
  return (
    <>
      <label htmlFor={name}>{name + ":"}</label>
      <input type={type} id={name} value={value} onChange={onChange} />
    </>
  );
}
