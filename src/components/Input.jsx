import "../styles/Input.css";

export default function Input({
  type = "text",
  value,
  onChange,
  onKeyDown,
  onBlur,
}) {
  return (
    <input
      autoFocus
      value={value}
      type={type}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
    />
  );
}
