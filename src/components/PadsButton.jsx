import React from "react"

export default function PadsButton(props) {

  return (
    <button
      style={{
        backgroundColor: props.color,
      }}
      className={ props.on==true?"on":null }
      onClick={()=>props.toggleBt(props.id)}
    ></button>
  );
}
