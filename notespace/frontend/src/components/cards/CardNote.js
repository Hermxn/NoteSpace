import { Card, CardContent, Typography, CardActionArea } from "@mui/material";
import "./styles.css";

export default function CardNote({ note, component, url }) {
  return (
    <Card className="noteCard">
      <CardActionArea component={component} to={url}>
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
  );
}
