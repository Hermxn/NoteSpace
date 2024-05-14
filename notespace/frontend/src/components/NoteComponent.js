import "./styles.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import endpoints from "../urls.json";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function NoteComponent() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(endpoints.notes_all);
        setNotes(response.data);
      } catch (error) {
        console.error("Error retreiving data:", error);
      }
    };
    fetchData();
  }, [notes]);

  return (
    <div className="noteWrapper">
      {notes.map((note) => (
        <Card key={note.id} className="noteCard">
          <CardActionArea>
            {" "}
            <CardContent>
              <Typography className="noteCardTitle">{note.title}</Typography>
              <Typography
                className="noteCardBody"
                variant="body2"
                color="text.secondary"
              >
                {note.body}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}
