import "./styles.css";
import { useParams } from "react-router-dom";
import { useNotes } from "../context/NotesContext";
import { CardNote } from "../cards";
import Navbar from "../navbar/navbar";

export default function NoteOnePage() {
  const { noteId } = useParams();
  const { currentNotes } = useNotes();
  const note = currentNotes.find((note) => note.id === parseInt(noteId, 10));

  const style = note?.style || {
    backgroundColor: "var(--default-color)",
  };

  return (
    <div className="wrapperFlex">
      <div className="header">{note.title}</div>
      <div className="wrapperContent">
        <Navbar />
        <div className="wrapperNoteOne">
          <CardNote key={note?.id} note={note} toBeEdited style={style} />
        </div>
      </div>
    </div>
  );
}
