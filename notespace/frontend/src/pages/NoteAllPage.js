import "./styles.css";
import Navbar from "../navbar/navbar";
import { CardNote, CardNoteNew } from "../cards";
import { useNotes } from "../context/NotesContext";

export default function NoteAllPage() {
  const { currentNotes } = useNotes();

  return (
    <div className="wrapperFlex">
      <div className="header">My notes</div>
      <div className="wrapperContent">
        <Navbar />
        <div className="wrapperNotesAll">
          <CardNoteNew />
          {currentNotes.map((note) => (
            <CardNote
              key={note.id}
              note={note}
              url={`/notes/${note.id}`}
              style={note.style}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
