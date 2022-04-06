import React from "react";
import "./Fetch_Load.css";

export default function Fetch_Load(props) {
    const bg = props.color;
  return (
    <div id="img_preload">
      <div class="loder" style={{background: bg}}></div>
    </div>
  );
}
