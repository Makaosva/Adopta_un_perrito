import "./App.css";
import Header from "./components/Header";
import MyCard from "./components/MyCard";

function App() {
  const perritos = [
    {
      imagen: "",
      title: "Perrito 1",
      desciption: "Description 1",
      tags: [{ text: "texto 1", color: "success" }],
    },
    {
      imagen: "",
      title: "Perrito 2",
      desciption: "Description 2",
      tags: [{ text: "texto 1", color: "info" }],
    },
    {
      imagen: "",
      title: "Perrito 3",
      desciption: "Description 3",
      tags: [{ text: "texto 1", color: "success" }],
    },
    {
      imagen: "",
      title: "Perrito 4",
      desciption: "Description 4",
      tags: [{ text: "texto 1", color: "danger" }],
    },
  ];

  return (
    <>
      <Header title="Adopta un perrito" />
      <div className="container mt-3">
        <div className="row">
          {perritos.map((perritos, index) => (
            <div className="col-md-4" key={index}>
              <MyCard {...perritos} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
