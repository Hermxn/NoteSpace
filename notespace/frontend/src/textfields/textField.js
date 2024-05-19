export default function UserTextArea({ value, onChange, className }) {
  const textareaStyle = {
    background: "transparent",
    border: "1px solid transparent",
    padding: "10px",
    borderRadius: "15px",
  };
  return (
    <textarea
      style={textareaStyle}
      value={value}
      onChange={onChange}
      className={className}
    ></textarea>
  );
}
