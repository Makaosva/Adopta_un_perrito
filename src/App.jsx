import "./App.css";
import Header from "./components/Header";
import MyCard from "./components/MyCard";
import Footer from "./components/Footer";

function App() {
  const perritos = [
    {
      imagen: "",
      name: "Perrito 1",
      desciption: "Description 1",
      tags: [{ text: "texto 1", color: "success" }],
    },
    {
      imagen: "",
      name: "Perrito 2",
      desciption: "Description 2",
      tags: [{ text: "texto 1", color: "info" }],
    },
    {
      imagen: "",
      name: "Perrito 3",
      desciption: "Description 3",
      tags: [{ text: "texto 1", color: "primary" }],
    },
    {
      imagen: "",
      name: "Perrito 4",
      desciption: "Description 4",
      tags: [{ text: "texto 1", color: "danger" }],
    },
  ];

  return (
    <>
      <Header title="Adopta un perrito" />
      <div className="container mt-4">
        <div className="row">
          {perritos.map((perritos, index) => (
            <div className="col-md-3" key={index}>
              <MyCard {...perritos} />
            </div>
          ))}
        </div>
      </div>
      <Footer title="Explora nuestra galería de adopción de perros para enconrar a tu compañero perfecto. Tenemos una variedad de perros con diferentes personalidades y tamaños, todos en busca de un hogar amoroso. Cada imagen captura su escencia única. Adopta a tu perro y brindale una segunda oportunidad. Encuentra a tu compañero peludo para siempre" />
    </>
  );
}

export default App;
