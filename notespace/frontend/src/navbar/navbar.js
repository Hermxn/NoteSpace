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
  { text: "Home", to: "/home", icon: <HomeIcon /> },
  { text: "Diaries", to: "/diaries", icon: <BookIcon /> },
  { text: "To-Do", to: "/todo", icon: <ListIcon /> },
  { text: "Note", to: "/notes", icon: <NoteIcon /> },
];

export default function Navbar() {
  return (
    <div className="wrapperNavbar">
      <Nav>
        {navItems.map((item, index) => (
          <Nav.Item key={index}>
            <Button variant="outlined" startIcon={item.icon}>
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
