import useMouse from './useMouse';
import React from 'react';

// Test Hook below :
export default function Cat() {
  const [position, setMousePosition] = useMouse({ x: 150, y: 100 });

  return (
    <div style={{ height: "100%" }} onMouseMove={setMousePosition}>
      <img src="/cat.png" width="20" height="20" 
      style={{ position: "absolute", left: position.x, top: position.y }} />
    </div>
  );
}