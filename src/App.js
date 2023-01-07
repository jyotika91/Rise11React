import { React } from "react";
import "./styles.css";
import Navbar from "./Navbar.js";
import Radiob from "./Radiob.js";
import Bmain from "./Bmain.js";

export default function App() {
  return (
    <div>
      <Navbar />
      <Radiob />
      <Bmain />
    </div>
  );
}
