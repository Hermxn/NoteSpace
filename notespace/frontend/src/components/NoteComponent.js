import React, { useEffect, useState } from "react";
import axios from "axios";
import endpoints from "../urls.json";

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
    <div>
      {notes.map((note) => (
        <div key={note.id} className="note-item">
          {note.title}
        </div>
      ))}
    </div>
  );
}
