import React from "react";
import padsDataOg from "../pads.js";
import PadsButton from "./PadsButton.jsx";

export default function Pads(props) {
  const [padsData, setPadsData] = React.useState(padsDataOg);
  let styles = { backgroundColor: props.darkMode ? "#222222" : "#cccccc" };
  function toggleBt(id) {
    console.log(id);
    setPadsData((prevPad) =>
      prevPad.map((obj) => (obj.id === id ? { ...obj, on: !obj.on } : obj))
    );
  }

  let padsDataAry = padsData.map((elem) => (
    <PadsButton
      key={elem.id}
      id={elem.id}
      toggleBt={toggleBt}
      color={elem.color}
      on={elem.on}
    />
  ));
  return (
    <main style={styles}>
      <div className="pad-container">{padsDataAry}</div>
    </main>
  );
}
