import { useState } from "react";

export default function useMouse(initialValue = { x: 0, y: 0 }) {
  var [position, setPosition] = useState(initialValue);
  const handleMouseMove = (mouseEventArgs) => {

    if (mouseEventArgs.clientX - position.x > 10 && mouseEventArgs.clientY - position.y > 10) {
      setPosition({
        x: mouseEventArgs.clientX - 20,
        y: mouseEventArgs.clientY - 20,
      });
    }
    if (mouseEventArgs.clientX - position.x > 10 && mouseEventArgs.clientY - position.y > 10) {
      setPosition({
        x: mouseEventArgs.clientX - 20,
        y: mouseEventArgs.clientY - 20,
      });
    } 
    else if (mouseEventArgs.clientX - position.x > 10 ) {
      setPosition({
        x: mouseEventArgs.clientX - 20,
        y: mouseEventArgs.clientY,
      });
    } 
    else if (mouseEventArgs.clientY - position.y > 10) {
      setPosition({
        x: mouseEventArgs.clientX,
        y: mouseEventArgs.clientY - 20,
      });
    } 
    else {
      setPosition({
        x: mouseEventArgs.clientX,
        y: mouseEventArgs.clientY,
      });
    }
  };
  return [position, handleMouseMove];
}
