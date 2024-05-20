import React, { useState } from "react";
import UserButtonDelete from "../buttons/UserButtonDelete";
import UserSaveButton from "../buttons/UserButtonSave";
import TextField from "../textfields/UserTextField";
import TextArea from "../textfields/UserTextArea";
import sanitizeHtml from "sanitize-html";
import "./styles.css";

export default function CardNote({ note, url, toBeEdited, toBeCreated }) {
  const [title, setTitle] = useState(note.title || "");
  const [body, setBody] = useState(note.body || "");
  const date_updated = new Date(note.date_updated || new Date());

  return (
    <div className="CardNote">
      {!toBeEdited && !toBeCreated ? (
        <a className="CardNoteHref" href={url}>
          <div className="CardContent">
            <div className="CardContentDate">
              <p>{date_updated.toLocaleDateString()}</p>
            </div>
            <div className="CardContentTitle">
              <p>{title}</p>
            </div>
            <div className="CardContentBody">
              <p dangerouslySetInnerHTML={{ __html: sanitizeHtml(body) }} />
            </div>
          </div>
        </a>
      ) : (
        <div className="CardContentEdit">
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
        {toBeEdited && (
          <UserSaveButton
            note={note}
            title={title}
            body={body}
            method={"PUT"}
          />
        )}
        {toBeCreated && (
          <UserSaveButton
            note={note}
            title={title}
            body={body}
            method={"POST"}
          />
        )}
        {!toBeCreated && <UserButtonDelete note={note} />}
      </div>
    </div>
  );
}
