import "./style.css";

function Grid({ urls, render }) {
  return (
    <div className="grid">
      {urls.map((url) => (
        <div key={url}>{render(url)}</div>
      ))}
    </div>
  );
}

export default Grid;
