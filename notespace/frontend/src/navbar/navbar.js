import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import {
  Home as HomeIcon,
  Book as BookIcon,
  List as ListIcon,
  Note as NoteIcon,
} from "@mui/icons-material";
import "./styles.css";

const navItems = [
  { text: "Home", to: "#", icon: <HomeIcon /> },
  { text: "Note", to: "/notes", icon: <NoteIcon /> },
  { text: "To-Do", to: "#", icon: <ListIcon /> },
  { text: "Diary", to: "#", icon: <BookIcon /> },
];

export default function Navbar() {
  return (
    <div className="wrapperNavbar">
      <Nav>
        {navItems.map((item, index) => (
          <Nav.Item key={index}>
            <Button size="sm" variant="Text" startIcon={item.icon}>
              <Link to={item.to} style={{ textDecoration: "none" }}>
                {item.text}
              </Link>
            </Button>
          </Nav.Item>
        ))}
      </Nav>
    </div>
  );
}
