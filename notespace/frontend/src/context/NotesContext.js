import React, { createContext, useContext, useEffect, useState } from "react";
import { useFetchData } from "../funcs";
import endpoints from "../urls.json";

const NotesContext = createContext();

export const useNotes = () => {
  return useContext(NotesContext);
};

export const NotesProvider = ({ children }) => {
  const { data: fetchedNotes, error } = useFetchData(endpoints.notes);
  const [currentNotes, setCurrentNotes] = useState([]);

  const getStyle = (index) => {
    if ((index + 1) % 5 === 0) return { backgroundColor: "var(--note2-color)" };
    if ((index + 1) % 4 === 0) return { backgroundColor: "var(--note3-color)" };
    if ((index + 1) % 2 === 0) return { backgroundColor: "var(--note1-color)" };
    return { backgroundColor: "var(--note4-color)" };
  };

  useEffect(() => {
    if (fetchedNotes.length > 0) {
      const notesWithStyle = fetchedNotes.map((note, index) => ({
        ...note,
        style: getStyle(index),
      }));
      setCurrentNotes(notesWithStyle);
    }
  }, [fetchedNotes]);

  return (
    <NotesContext.Provider value={{ currentNotes, error }}>
      {children}
    </NotesContext.Provider>
  );
};
