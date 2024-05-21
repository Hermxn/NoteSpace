import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserButtonDelete, UserButtonSave } from "../buttons";
import { UserTextArea, UserTextField } from "../textfields";
import sanitizeHtml from "sanitize-html";
import "./styles.css";

export default function CardNote({
  note,
  url,
  toBeEdited,
  toBeCreated,
  style,
}) {
  const [title, setTitle] = useState(note.title || "");
  const [body, setBody] = useState(note.body || "");
  const date_updated = new Date(note.date_updated || new Date());

  return (
    <div className="CardNote" style={style}>
      {!toBeEdited && !toBeCreated ? (
        <Link
          to={{
            pathname: url,
            state: { style },
          }}
          className="CardNoteHref"
        >
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
        </Link>
      ) : (
        <div className="CardContentEdit">
          <UserTextField
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="noteCardTitleTextField"
          />
          <UserTextArea
            value={body}
            onChange={setBody}
            className="noteCardBodyTextField"
          />
        </div>
      )}
      <div className="CardNoteAction">
        {toBeEdited && (
          <UserButtonSave
            note={note}
            title={title}
            body={body}
            method={"PUT"}
          />
        )}
        {toBeCreated && (
          <UserButtonSave
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
