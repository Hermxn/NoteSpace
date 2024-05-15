import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  CardActions,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import "./styles.css";
import endpoints from "../../urls.json";
import useDeleteData from "../../funcs/useDeleteData";

export default function CardNote({ note, component, url }) {
  const handleDelete = useDeleteData(`${endpoints.notes}${note.id}/`);

  return (
    <Card className="noteCard">
      <div className="cardContentWrapper">
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
      </div>
      <CardActions>
        <Button
          className="noteCardDeleteButton"
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={() => handleDelete()}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
