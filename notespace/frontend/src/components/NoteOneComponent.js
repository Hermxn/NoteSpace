import { useParams } from "react-router-dom";
import useFetchData from "../funcs/useFetchData";
import CardNote from "../cards/CardNote";
import Navbar from "../navbar/navbar";
import endpoints from "../urls.json";
import "./styles.css";

export default function NoteComponent() {
  const { noteId } = useParams();
  const { data: note, error } = useFetchData(`${endpoints.notes}${noteId}/`);

  return (
    <div className="wrapperFlex">
      <Navbar />
      <div className="wrapperNoteOne">
        <CardNote key={note.id} note={note} toBeEdited />
      </div>
    </div>
  );
}
