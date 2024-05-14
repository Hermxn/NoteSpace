import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotesAllComponent from "./components/NotesAllComponent";
import NoteOneComponent from "./components/NoteOneComponent";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Main />} /> */}
        <Route path="notes" element={<NotesAllComponent />} />
        <Route path="/notes/:noteId" element={<NoteOneComponent />} />
        {/* <Route path="diaries" element={<DiaryComponent />} />
        <Route path="todos" element={<TodoCOmponent />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
