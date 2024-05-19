import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  CardActions,
} from "@mui/material";
import "./styles.css";
import UserButtonDelete from "../buttons/userButtonDelete";
import UserSaveButton from "../buttons/userButtonSave";
import UserTextArea from "../textfields/textField";
import RichTextField from "../textfields/richTextField";

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
            <Typography className="noteCardTitle">
              <UserTextArea
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                className="noteCardTitleTextField"
              />
            </Typography>
            <Typography className="noteCardBody">
              <RichTextField
                value={body}
                onChange={setBody}
                className="noteCardBodyTextField"
              />
            </Typography>
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
