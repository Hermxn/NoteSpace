import "./styles.css";

export default function CardNoteNew({ url }) {
  return (
    <div className="CardNote">
      <a className="CardNoteHref CardNoteNewHref" href={url}>
        Create note
      </a>
    </div>
  );
}
