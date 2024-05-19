import "./styles.css";
import useFetchData from "../funcs/useFetchData";
import Navbar from "../navbar/navbar";
import endpoints from "../urls.json";
import CardNote from "../cards/CardNote";
import CardNoteNew from "../cards/CardNoteNew";

export default function NoteAllPage() {
  const { data: notes, error } = useFetchData(endpoints.notes);

  return (
    <div className="wrapperFlex">
      <Navbar />
      <div className="wrapperNotesAll">
        <CardNoteNew />
        {notes.map((note) => (
          <CardNote key={note.id} note={note} url={`/notes/${note.id}`} />
        ))}
      </div>
    </div>
  );
}
