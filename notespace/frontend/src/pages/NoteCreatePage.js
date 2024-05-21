import "./styles.css";
import Navbar from "../navbar/navbar";
import { CardNote } from "../cards";

export default function NoteCreatePage() {
  console.log(new Date().toString());
  return (
    <div className="wrapperFlex">
      <div className="header">New note</div>
      <div className="wrapperContent">
        <Navbar />
        <div className="wrapperNoteOne">
          <CardNote note={{ body: "", title: "" }} toBeCreated />
        </div>
      </div>
      <Navbar />
    </div>
  );
}
