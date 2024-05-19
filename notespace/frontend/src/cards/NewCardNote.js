import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import "./styles.css";

export default function NewCardNote({ component, url }) {
  return (
    <Card className="noteCard">
      <div className="cardContentWrapper">
        <CardActionArea
          className="noteCardActionArea"
          component={component}
          to={url}
        >
          <CardContent>
            <Typography className="newNoteBody">Add note</Typography>
          </CardContent>
        </CardActionArea>
      </div>
    </Card>
  );
}
