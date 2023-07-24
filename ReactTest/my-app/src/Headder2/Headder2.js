import React, { useContext } from "react";
import { ThemeContextColor } from "../App";

export default function Headder2() {
  const theme = useContext(ThemeContextColor);

  return <div>Welcome back, {theme}</div>;
}
