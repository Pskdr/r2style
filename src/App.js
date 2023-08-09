import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import CardView from './components/cardView/CardView';
import curvas1 from './imagenes/curvas1.jpeg';
import curvas2 from './imagenes/curvas2.jpeg';
import curvas3 from './imagenes/curvas3.jpeg';

import arte1 from './imagenes/arte1.jpeg';
import arte2 from './imagenes/arte2.jpeg';

import menteAlma1 from './imagenes/menteAlma1.jpeg';
import menteAlma2 from './imagenes/menteAlma2.jpeg';
import menteAlma3 from './imagenes/menteAlma3.jpeg';

import portavaso from './imagenes/portavaso.jpeg';
import portavasoexa from './imagenes/portavasoexa.jpeg';

import kitparceros from './imagenes/kitparceros.jpeg';
import kit420 from './imagenes/kit420.jpeg';

// import flores1 from "./imagenes/hermetismo1.jpeg";
// import flores2 from "./imagenes/hermetismo2.jpeg";
// import flores3 from "./imagenes/hermetismo3.jpeg";
import flores4 from './imagenes/flores4.jpeg';

function App() {
  // Estilos CSS para el contenedor de los CardViews
  const curvas = [
    {
      title: 'Orden & Caos',
      imageUrl: curvas2,
      description: '',
      price: '$35 USD',
      link: 'la camisa Orden y Caos',
    },
    {
      title: 'Fluye',
      imageUrl: curvas1,
      description: '',
      price: '$35 USD',
      link: 'la camisa Fluye',
    },

    {
      title: 'Ondas',
      imageUrl: curvas3,
      description: '',
      price: '$35 USD',
      link: 'la camisa Ondas',
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
      title: 'Encendedor',
      imageUrl: flores4,
      description: 'Encendedor coleccionable.',
      price: '$10 USD',
      link: 'el encendedor coleccionable',
    },
    {
      title: 'Portavaso',
      imageUrl: portavaso,
      description: 'Porta vaso en resina.',
      price: '$8 USD',
      link: 'el portavaso en resina',
    },
    {
      title: 'Portavaso hexagonal',
      imageUrl: portavasoexa,
      description: 'Porta vaso hexagonal en resina.',
      price: '$8 USD',
      link: 'el portavaso hexagonal',
    },
    {
      title: 'Celos',
      imageUrl: arte1,
      description:
        'La máscara Hannya en la cultura japonesa representa el alma de una persona obsesiva o celosa, que al morir toma la forma de un demonio al no querer dejar atrás dicha obsesión.  Esta obra representa esa obsesión que se puede llegar a sentir por otra persona, aquella que nos hace olvidar de nosotros mismos.   Tinta sobre papel durex 102x73 cm',
      price: '$2.000 USD',
      link: 'Celos',
    },

    {
      title: 'Invencible',
      imageUrl: arte2,
      description:
        'Obra pintada sobre madero marca deathwish patinada en el 2017 con la cual tuve un accidente que me dejó sin poder caminar seis meses. Esta obra representa el sentimiento de poder superar cualquier miedo y obstáculo.',
      price: '$800 USD',
      link: 'Invencible',
    },
  ];

  const promociones = [
    {
      title: 'kit universitario',
      imageUrl: flores4,
      description: 'Encendedor + camisa.',
      price: '$40 USD',
      link: 'la promocion: Encendedor más camisa',
    },
    {
      title: 'kit parceros',
      imageUrl: kitparceros,
      description: 'Dos camisas a elección.',
      price: '$60 USD',
      link: 'la promocion: kit parceros',
    },
    {
      title: 'kit 420',
      imageUrl: kit420,
      description:
        'Tres camisas a elección + cenicero en resina + encendedor coleccionable.',
      price: '$100 USD',
      link: 'la promocion: kit 420',
    },
  ];

  const menteAlma = [
    {
      title: 'Mente ',
      imageUrl: menteAlma1,
      description: '',
      price: '$35 USD',
      link: 'la camisa: Mente ',
    },

    {
      title: 'Cuerpo ',
      imageUrl: menteAlma2,
      description: '',
      price: '$35 USD',
      link: 'la camisa: Cuerpo ',
    },

    {
      title: 'Alma ',
      imageUrl: menteAlma3,
      description: '',
      price: '$35 USD',
      link: 'la camisa: Alma ',
    },
  ];

  const [mostrar, setMostrar] = useState(0);

  const TAB_HERMETISMO = 0;
  const TAB_ARTE = 1;
  const TAB_RPOMOCIONES = 2;

  const TAB_CUERPOALMA = 3;

  const steps = {
    [TAB_HERMETISMO]: curvas.map((item) => (
      <CardView
        key={item.title + ' - ' + item.price}
        title={item.title}
        description={item.description}
        imageUrl={item.imageUrl}
        price={item.price}
        link={item.link}
      />
    )),
    [TAB_ARTE]: arte.map((item) => (
      <CardView
        key={item.title + ' - ' + item.price}
        title={item.title}
        description={item.description}
        imageUrl={item.imageUrl}
        price={item.price}
        link={item.link}
      />
    )),
    [TAB_RPOMOCIONES]: promociones.map((item) => (
      <CardView
        key={item.title + ' - ' + item.price}
        title={item.title}
        description={item.description}
        imageUrl={item.imageUrl}
        price={item.price}
        link={item.link}
      />
    )),
    [TAB_CUERPOALMA]: menteAlma.map((item) => (
      <CardView
        key={item.title + ' - ' + item.price}
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
