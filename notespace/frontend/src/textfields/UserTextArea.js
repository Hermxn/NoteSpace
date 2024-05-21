import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./styles.css";

export default function UserTextArea({ value, onChange, className }) {
  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"],
    ["blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }],
    [{ indent: "-1" }, { indent: "+1" }],

    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }],
    [{ font: [] }],
    [{ align: [] }],

    ["clean"],
  ];

  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={onChange}
      modules={{ toolbar: toolbarOptions }}
      className={className}
    />
  );
}
