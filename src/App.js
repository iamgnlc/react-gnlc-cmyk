import React from "react";
import "./App.scss";
import g from "./assets/g.svg";
import n from "./assets/n.svg";
import l from "./assets/l.svg";
import c from "./assets/c.svg";

function App() {
  return (
    <div className="cmyk">
      <div className="portion cyan">
        <img className="letter g" src={g} alt="g" />
      </div>
      <div className="portion magenta">
        <img className="letter n" src={n} alt="n" />
      </div>
      <div className="portion yellow">
        <img className="letter l" src={l} alt="l" />
      </div>
      <div className="portion black">
        <img className="letter c" src={c} alt="c" />
      </div>
    </div>
  );
}

export default App;
