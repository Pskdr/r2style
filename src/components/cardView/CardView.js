import React, { useState } from 'react';
import './ccardView.css';

function CardView(props) {
  const onClick = (e) => {
    window.location.href =
      'https://wa.me/573170488805?text= Hola, me interesa ' + props.link;
  };
  const [verMas, setVerMas] = useState(false);

  const onVerMas = (e) => {
    setVerMas(!verMas);
  };

  return (
    <div className='cardView'>
      <h2
        style={{
          marginBottom: '10px',
          fontFamily: "'Castoro Titling', cursive",
        }}
      >
        {props.title}
      </h2>
      <img
        src={props.imageUrl}
        alt={props.title}
        style={{
          width: '100%',
          marginBottom: '10px',
          maxWidth: '200px',
          maxHeight: '290px',
        }}
      />

      {props.description === '' ? null : (
        <div>
          {verMas ? (
            <div>
              <p
                style={{
                  marginBottom: '10px',
                  whiteSpace: 'pre-wrap',
                  minHeight: 'auto',
                }}
              >
                {props.description}
              </p>

              <h7
                onClick={onVerMas}
                style={{
                  color: '#000',
                  border: 'none',
                  fontWeight: 'bold',
                  textDecoration: 'underline',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  margin: 'auto',
                  justifyContent: 'center',
                }}
              >
                Ocultar
              </h7>
            </div>
          ) : (
            <h7
              onClick={onVerMas}
              style={{
                color: '#000',
                border: 'none',
                fontWeight: 'bold',
                textDecoration: 'underline',
                borderRadius: '5px',
                cursor: 'pointer',
                margin: 'auto',
                justifyContent: 'center',
              }}
            >
              Ver descripción
            </h7>
          )}
        </div>
      )}
      <p
        style={{
          fontWeight: 'bold',
          fontSize: '1.2em',
          marginBottom: '10px',
          marginTop: '10px',
        }}
      >
        {props.price}
      </p>
      <button
        onClick={onClick}
        style={{
          backgroundColor: '#000',
          color: '#fff',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Comprar
      </button>
    </div>
  );
}

export default CardView;
