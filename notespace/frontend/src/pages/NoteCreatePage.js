import "./styles.css";
import Navbar from "../navbar/navbar";
import UserCardNote from "../cards/CardNote";

export default function NoteCreatePage() {
  console.log(new Date().toString());
  return (
    <div className="wrapperFlex">
      <Navbar />
      <div className="wrapperNoteOne">
        <UserCardNote note={{ body: "", title: "" }} toBeCreated />
      </div>
    </div>
  );
}
