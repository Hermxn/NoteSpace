import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteAllPage from "./pages/NoteAllPage";
import NoteOnePage from "./pages/NoteOnePage";
import NoteCreatePage from "./pages/NoteCreatePage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Main />} /> */}
        <Route path="notes" element={<NoteAllPage />} />
        <Route path="/notes/:noteId" element={<NoteOnePage />} />
        <Route path="notes/create" element={<NoteCreatePage />} />
        {/* <Route path="diaries" element={<DiaryComponent />} />
        <Route path="todos" element={<TodoCOmponent />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
