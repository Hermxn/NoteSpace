export default function UserTextArea({ value, onchange, className }) {
  const textareaStyle = {
    resize: "none",
    background: "transparent",
    border: "1px solid transparent",
    padding: "10px",
    borderRadius: "15px",
  };
  return (
    <textarea
      style={textareaStyle}
      value={value}
      onChange={onchange}
      className={className}
    ></textarea>
  );
}
