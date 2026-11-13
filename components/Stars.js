export default function Stars({ value }) {
  return (
    <span className="stars" role="img" aria-label={`${value} dari 5 bintang`}>
      {"★".repeat(value)}
      <span className="off">{"★".repeat(5 - value)}</span>
    </span>
  );
}
