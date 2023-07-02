import React from "react";

export function Circle({ text, circleStyle }) {
  return <li style={circleStyle}>{text}</li>;
}

export function CircleIcon({ circleStyle, icon }) {
  return <li style={circleStyle}>{icon}</li>;
}
