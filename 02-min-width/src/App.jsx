import { useState } from "react";
import "./App.css";

function App() {
  const [width, setWidth] = useState(500);
  return (
    <>
      <h1>Do you understand flexbox?</h1>

      <div
        className="card"
        style={{
          gap: "10px",
        }}
      >
        <span>Container width:</span>
        <input
          type="range"
          max={500}
          min={180}
          step={1}
          value={width}
          onChange={(e) => setWidth(parseInt(e.target.value))}
        />
        <span>{width}px</span>
      </div>

      <h2>Input</h2>
      <div className="card">
        <div
          className="container-2"
          style={{
            display: "flex",
            width: `${width}px`,
          }}
        >
          <label htmlFor="name" style={{ minWidth: "fit-content" }}>
            Search name:
          </label>
          <input id="name" placeholder="Fancy name" style={{ flexGrow: "1" }} />
        </div>
      </div>

      <h2>Text</h2>
      <div className="card">
        <div
          className="container-1"
          style={{
            display: "flex",
            width: `${width}px`,
            wordWrap: "break-word",
          }}
        >
          <div className="profile" />
          <div>Here is a titlewithaverylongword</div>
        </div>
      </div>

      <h2>Paragraphs (width: {width + 300}px)</h2>
      <div className="card">
        <div
          style={{
            display: "flex",
            gap: "3rem",
            width: `${width + 300}px`,
          }}
        >
          <span className="col">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dictum, justo eu sodales maximus, enim turpis varius felis, et
            scelerisque risus nisl ac nisl. Aenean faucibus urna ornare eros
            suscipit scelerisque. Curabitur eget purus tempus, consectetur justo
            et, sollicitudin metus.{" "}
          </span>
          <span className="col">
            Morbi id consecteturdfasdfasdfdfasdfasdfaui. Sed feugiat, orci id
            pellentesque volutpat, nunc urna ullamcorper sapien, ac ullamcorper
            magna ligula ac lectus. Aliquam erat volutpat. Maecenas ac dolor eu
            ante iaculis convallis quis non turpis. Morbi nec eros quam.
            Curabitur vestibulum semper ligula, eget vehicula sem accumsan ut.
          </span>
          <span className="col">
            Suspendisse eleifend quam quis lacus tristique fringilla.
            Suspendisse potenti. Nunc at mollis lectus. Duis neque libero,
            semper sit amet nisl non, egestas dictum neque. Sed ac dolor cursus
            tortor ultrices lobortis sed eu nisl. Cras viverra laoreet neque, eu
            gravida lorem dictum nec.
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
