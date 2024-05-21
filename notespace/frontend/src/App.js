import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NoteAllPage, NoteOnePage, NoteCreatePage } from "./pages";
import { NotesProvider } from "./context/NotesContext";

function App() {
  return (
    <NotesProvider>
      <Router>
        <Routes>
          <Route path="notes" element={<NoteAllPage />} />
          <Route path="notes/:noteId" element={<NoteOnePage />} />
          <Route path="notes/create" element={<NoteCreatePage />} />
        </Routes>
      </Router>
    </NotesProvider>
  );
}

export default App;
