import { Link } from "react-router-dom";
import useFetchData from "../funcs/useFetchData";
import CardNote from "../cards/CardNote";
import endpoints from "../urls.json";
import Navbar from "../navbar/navbar";
import "./styles.css";

export default function NotesAllComponent() {
  const { data: notes, error } = useFetchData(endpoints.notes);

  return (
    <div className="wrapperApp">
      <Navbar />
      <div className="wrapperNotesAll">
        {notes.map((note) => (
          <CardNote
            key={note.id}
            note={note}
            component={Link}
            url={`/notes/${note.id}`}
          />
        ))}
      </div>
    </div>
  );
}
