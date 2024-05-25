import "./App.css";
import Header from "./components/Header";
import MyCard from "./components/MyCard";

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
      <div className="container mt-4">
        <div className="row">
          {perritos.map((libros, index) => (
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
