import React, { useState } from 'react';

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
    <div
      style={{
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
        padding: '20px',
        textAlign: 'center',
        maxWidth: '500px',
        maxHeight: '700px',
      }}
    >
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
          maxHeight: '250px',
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
