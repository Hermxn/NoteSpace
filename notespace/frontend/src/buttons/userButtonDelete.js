import { Button } from "@mui/material";
import useDeleteData from "../funcs/useDeleteData";
import DeleteIcon from "@mui/icons-material/Delete";
import endpoints from "../urls.json";

export default function UserButtonDelete({ note }) {
  const handleDelete = useDeleteData(`${endpoints.notes}${note.id}/`);
  return (
    <Button
      size="sm"
      variant="Text"
      startIcon={<DeleteIcon />}
      onClick={() => handleDelete()}
    >
      Delete
    </Button>
  );
}
