import { Button } from "@mui/material";
import usePutData from "../funcs/usePutData";
import usePostData from "../funcs/usePostData";
import SaveIcon from "@mui/icons-material/Save";
import endpoints from "../urls.json";

export default function UserSaveButton({ note, title, body, method }) {
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
    >
      Save
    </Button>
  );
}
