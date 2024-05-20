import "./styles.css";

export default function CardNoteNew({}) {
  return (
    <div className="CardNote">
      <a className="CardNoteHref CardNoteNewHref" href={"notes/create"}>
        <div className="CardContent CardContentCreate">Create note</div>
      </a>
    </div>
  );
}
