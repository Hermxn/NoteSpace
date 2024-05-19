import "./styles.css";
import { useParams } from "react-router-dom";
import useFetchData from "../funcs/useFetchData";
import Navbar from "../navbar/navbar";
import endpoints from "../urls.json";
import UserCardNote from "../cards/CardNote";

export default function NoteOnePage() {
  const { noteId } = useParams();
  const { data: note, error } = useFetchData(`${endpoints.notes}${noteId}/`);

  return (
    <div className="wrapperFlex">
      <Navbar />
      <div className="wrapperNoteOne">
        <UserCardNote key={note.id} note={note} toBeEdited />
      </div>
    </div>
  );
}
