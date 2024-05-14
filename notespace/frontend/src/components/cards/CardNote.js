import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  CardActions,
  Button,
} from "@mui/material";
import "./styles.css";
import endpoints from "../../urls.json";
import useDeleteData from "../../funcs/useDeleteData";

export default function CardNote({ note, component, url }) {
  const handleDelete = useDeleteData(`${endpoints.notes}${note.id}/`);

  return (
    <Card className="noteCard">
      <CardActionArea
        className="noteCardActionArea"
        component={component}
        to={url}
      >
        <CardContent className="noteCardContent">
          <Typography className="noteCardTitle">{note.title}</Typography>
          <Typography className="noteCardBody">{note.body}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={() => handleDelete()} size="small">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
