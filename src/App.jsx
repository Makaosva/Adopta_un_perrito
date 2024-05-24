import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";

function App() {
  const perritos = [
    {
      imagen: "",
      title: "Perrito 1",
      desciption: "Description 1",
    },
    {
      imagen: "",
      title: "Perrito 2",
      desciption: "Description 2",
    },
    {
      imagen: "",
      title: "Perrito 3",
      desciption: "Description 3",
    },
    {
      imagen: "",
      title: "Perrito 4",
      desciption: "Description 4",
    },
  ];
  return (
    <>
      <Header title="Adopta un perrito" />
    </>
  );
}

export default App;
