import { Link } from "react-router-dom";
import useFetchData from "../funcs/useFetchData";
import CardNote from "./cards/CardNote";
import endpoints from "../urls.json";

export default function NotesAllComponent() {
  const { data: notes, error } = useFetchData(endpoints.notes);

  return (
    <div className="noteWrapper">
      {notes.map((note) => (
        <CardNote
          key={note.id}
          note={note}
          component={Link}
          url={`/notes/${note.id}`}
        />
      ))}
    </div>
  );
}
