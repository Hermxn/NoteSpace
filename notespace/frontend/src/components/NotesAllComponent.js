import { Link } from "react-router-dom";
import useFetchData from "../funcs/useFetchData";
import CardNote from "../cards/CardNote";
import NewCardNote from "../cards/NewCardNote";
import Navbar from "../navbar/navbar";
import endpoints from "../urls.json";
import "./styles.css";

export default function NotesAllComponent() {
  const { data: notes, error } = useFetchData(endpoints.notes);

  return (
    <div className="wrapperFlex">
      <Navbar />
      <div className="wrapperNotesAll">
        <NewCardNote />
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
