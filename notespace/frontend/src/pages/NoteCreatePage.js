import "./styles.css";
import Navbar from "../navbar/navbar";
import { CardNote } from "../cards";

export default function NoteCreatePage() {
  console.log(new Date().toString());
  return (
    <div className="wrapperFlex">
      <Navbar />
      <div className="wrapperNoteOne">
        <CardNote note={{ body: "", title: "" }} toBeCreated />
      </div>
    </div>
  );
}
