import { Link, useParams } from "react-router-dom";
import useFetchData from "../funcs/useFetchData";
import CardNote from "./cards/CardNote";
import endpoints from "../urls.json";

export default function NoteComponent() {
  const { noteId } = useParams();
  const { data: note, error } = useFetchData(`${endpoints.notes}${noteId}/`);

  return (
    <div className="noteWrapper">
      <CardNote key={note.id} note={note} component={Link} url="#" />
    </div>
  );
}
