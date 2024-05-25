import "./App.css";
import Header from "./components/Header";
import MyCard from "./components/MyCard";
import Footer from "./components/Footer";

function App() {
  const perritos = [
    {
      imagen: "https://picsum.photos/id/237/200",
      name: "Black",
      description:
        "Adorable perrito,lleno de energia y muy amoroso. ¡Dale a Black la oportunidad de un amoroso hogar!",
      tags: [{ text: "Labrador", color: "success" }],
    },
    {
      imagen: "https://placedog.net/200/200?id=191",
      name: "Punta",
      description:
        "Pequeño regalón en busca de familia, revoltoso y muy amigable. ¡Haz de Punta parte de tu familia y te llevaras un nuevo amigo!",
      tags: [{ text: "Chihuahua", color: "info" }],
    },
    {
      imagen: "https://placedog.net/200/200?id=163",
      name: "Pintas",
      description:
        "Juguetón, amigable y se lleva bien con los niños y otros animales. ¡Haz de Pintas parte de tu familia hoy mismo!",
      tags: [{ text: "Dalmata", color: "primary" }],
    },
    {
      imagen: "https://placedog.net/200/200?id=28",
      name: "Snow",
      description:
        "Es juguetón, amigable y muy obediente. ¡Haz de este pequeñin un amigo y parte de su familia! ",
      tags: [{ text: "Samoyedo", color: "danger" }],
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
