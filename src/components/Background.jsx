import "./background.css";

export default function Background() {
  return (
    <div className="global-bg" aria-hidden="true">
      <div className="bg-grid" />
      <div className="bg-glow" />
      <div className="bg-circle bg-circle-main" />
    </div>
  );
}
