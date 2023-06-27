import React from "react";

export default function BrLi({ icon, iconStyle, text, bgStyle }) {
  return (
    <li style={bgStyle}>
      <div style={iconStyle}>{icon}</div>
      <p>{text}</p>
    </li>
  );
}
