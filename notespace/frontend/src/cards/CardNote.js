import React, { useState } from "react";
import UserButtonDelete from "../buttons/UserButtonDelete";
import UserSaveButton from "../buttons/UserButtonSave";
import TextField from "../textfields/UserTextField";
import TextArea from "../textfields/UserTextArea";
import "./styles.css";

export default function CardNote({ note, url, toBeEdited }) {
  const [title, setTitle] = useState(note.title);
  const [body, setBody] = useState(note.body);
  return (
    <div className="CardNote">
      {!toBeEdited ? (
        <a className="CardNoteHref" href={url}>
          <div className="CardContent">
            <div className="CardContentDate">
              <p>{note.date_updated}</p>
            </div>
            <div className="CardContentTitle">
              <p>{title}</p>
            </div>
            <div className="CardContentBody">
              <p>{body}</p>
            </div>
          </div>
        </a>
      ) : (
        <div className="CardContent">
          <TextField
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="noteCardTitleTextField"
          />
          <TextArea
            value={body}
            onChange={setBody}
            className="noteCardBodyTextField"
          />
        </div>
      )}
      <div className="CardNoteAction">
        {toBeEdited && <UserSaveButton note={note} title={title} body={body} />}
        <UserButtonDelete note={note} />
      </div>
    </div>
  );
}
