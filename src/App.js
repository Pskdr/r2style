import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import CardView from "./components/cardView/CardView";
import curvas1 from "./imagenes/curvas1.jpeg";
import curvas2 from "./imagenes/curvas2.jpeg";
import curvas3 from "./imagenes/curvas3.jpeg";

import portavaso from "./imagenes/portavaso.jpeg";
import portavasoexa from "./imagenes/portavasoexa.jpeg";

import kitparceros from "./imagenes/kitparceros.jpeg";
import kit420 from "./imagenes/kit420.jpeg";

// import flores1 from "./imagenes/hermetismo1.jpeg";
// import flores2 from "./imagenes/hermetismo2.jpeg";
// import flores3 from "./imagenes/hermetismo3.jpeg";
import flores4 from "./imagenes/flores4.jpeg";

function App() {
  // Estilos CSS para el contenedor de los CardViews
  const curvas = [
    {
      id: 1,
      title: "Orden & Caos",
      imageUrl: curvas2,
      description: "Orden & Caos",
      price: "$140.000",
      link: "la camisa Orden y Caos",
    },
    {
      id: 2,
      title: "Fluye",
      imageUrl: curvas1,
      description: "Fluye",
      price: "$140.000",
      link: "la camisa Fluye",
    },

    {
      id: 3,
      title: "Ondas",
      imageUrl: curvas3,
      description: "Ondas",
      price: "$140.000",
      link: "la camisa Ondas",
    },
  ];

  // //{
  //     id: 1,
  //     title: "Peonia",
  //     imageUrl: flores1,
  //     description: "Peonia",
  //     price: "$140.000",
  //     link: "Peonia",
  //   },
  //   {
  //     id: 2,
  //     title: "Crisantemo",
  //     imageUrl: flores2,
  //     description: "Crisantemo",
  //     price: "$140.000",
  //     link: "Crisantemo",
  //   },

  //   {
  //     id: 3,
  //     title: "Loto",
  //     imageUrl: flores3,
  //     description: "Loto",
  //     price: "$140.000",
  //     link: "Loto",
  //   },

  const arte = [
    {
      id: 4,
      title: "Encendedor",
      imageUrl: flores4,
      description: "Encendedor coleccionable",
      price: "$50.000",
      link: "el encendedor coleccionable",
    },
    {
      id: 5,
      title: "Portavaso",
      imageUrl: portavaso,
      description: "Porta vaso en resina",
      price: "$30.000",
      link: "el portavaso en resina",
    },
    {
      id: 6,
      title: "Portavaso hexagonal",
      imageUrl: portavasoexa,
      description: "Porta vaso hexagonal en resina",
      price: "$30.000",
      link: "el portavaso hexagonal",
    },
  ];

  const promociones = [
    {
      id: 4,
      title: "kit universitario",
      imageUrl: flores4,
      description: "Encendedor + camisa",
      price: "$170.000",
      link: "la promocion: Encendedor más camisa",
    },
    {
      id: 5,
      title: "kit parceros",
      imageUrl: kitparceros,
      description: "dos camisas a elección",
      price: "$240.000",
      link: "la promocion: kit parceros",
    },
    {
      id: 6,
      title: "kit 420",
      imageUrl: kit420,
      description:
        "tres camisas a elección + cenicero en resina + encendedor coleccionable",
      price: "$420.000",
      link: "la promocion: kit 420",
    },
  ];

  const [mostrar, setMostrar] = useState(0);

  const TAB_HERMETISMO = 0;
  const TAB_ARTE = 1;
  const TAB_RPOMOCIONES = 2;

  const steps = {
    [TAB_HERMETISMO]: curvas.map((item) => (
      <CardView
        key={item.id}
        title={item.title}
        description={item.description}
        imageUrl={item.imageUrl}
        price={item.price}
        link={item.link}
      />
    )),
    [TAB_ARTE]: arte.map((item) => (
      <CardView
        key={item.id}
        title={item.title}
        description={item.description}
        imageUrl={item.imageUrl}
        price={item.price}
        link={item.link}
      />
    )),
    [TAB_RPOMOCIONES]: promociones.map((item) => (
      <CardView
        key={item.id}
        title={item.title}
        description={item.description}
        imageUrl={item.imageUrl}
        price={item.price}
        link={item.link}
      />
    )),
  };

  return (
    <div>
      <Navbar setMostrar={setMostrar} steps={steps} mostrar={mostrar} />
    </div>
  );
}

export default App;
