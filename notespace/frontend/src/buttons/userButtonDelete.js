import { Button } from "@mui/material";
import useDeleteData from "../funcs/useDeleteData";
import DeleteIcon from "@mui/icons-material/Delete";
import endpoints from "../urls.json";

export default function UserButtonDelete({ note }) {
  const handleDelete = useDeleteData(`${endpoints.notes}${note.id}/`);
  return (
    <button
      className="noteCardDeleteButton"
      variant="outlined"
      startIcon={<DeleteIcon />}
      onClick={() => handleDelete()}
    >
      Delete
    </button>
  );
}
