import "./styles.css";

export default function CardNoteNew({ url }) {
  return (
    <div className="CardNote">
      <a className="CardNoteHref CardNoteNewHref" href={url}>
        <div className="CardContent">Create note</div>
      </a>
    </div>
  );
}
