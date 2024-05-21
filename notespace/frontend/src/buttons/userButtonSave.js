import { usePutData, usePostData } from "../funcs";
import { Button } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import endpoints from "../urls.json";
import "./styles.css";

export default function UserButtonSave({ note, title, body, method }) {
  const handlePut = usePutData(`${endpoints.notes}${note.id}/`, title, body);
  const handlePost = usePostData(`${endpoints.notes}`, title, body);

  return (
    <Button
      size="sm"
      variant="Text"
      startIcon={<SaveIcon />}
      onClick={() => {
        if (method == "PUT") {
          handlePut();
        } else {
          handlePost();
        }
      }}
      className="buttonSave"
    >
      Save
    </Button>
  );
}
