import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  CardActions,
} from "@mui/material";
import "./styles.css";
import { useState } from "react";
import UserButtonDelete from "../buttons/userButtonDelete";
import UserSaveButton from "../buttons/userButtonSave";
import UserTextField from "../textfields/textField";

export default function CardNote({ note, component, url, toBeEdited }) {
  const [title, setTitle] = useState(note.title);
  const [body, setBody] = useState(note.body);

  return (
    <Card className="noteCard">
      <div className="cardContentWrapper">
        {!toBeEdited ? (
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
        ) : (
          <CardContent className="noteCardContent">
            <UserTextField
              value={title}
              onchange={(event) => {
                setTitle(event.target.value);
              }}
            />
            <UserTextField
              value={body}
              onchange={(event) => {
                setBody(event.target.value);
              }}
            />
          </CardContent>
        )}
      </div>
      <CardActions>
        <UserButtonDelete note={note} />
        {toBeEdited && <UserSaveButton note={note} title={title} body={body} />}
      </CardActions>
    </Card>
  );
}
