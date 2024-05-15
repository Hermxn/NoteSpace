import { Button } from "@mui/material";
import usePutData from "../funcs/usePutData";
import SaveIcon from "@mui/icons-material/Save";
import endpoints from "../urls.json";

export default function UserSaveButton({ note, title, body }) {
  const handlePut = usePutData(`${endpoints.notes}${note.id}/`, title, body);
  return (
    <Button
      className="noteCardDeleteButton"
      variant="outlined"
      startIcon={<SaveIcon />}
      onClick={() => handlePut()}
    >
      Save
    </Button>
  );
}
