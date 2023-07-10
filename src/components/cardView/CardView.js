import React from "react";

function CardView(props) {
  const onClick = (e) => {
    window.location.href =
      "https://wa.me/573170488805?text= Hola, me interesa " + props.link;
  };

  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
        padding: "20px",
        textAlign: "center",
        maxWidth: "500px",
        maxHeight: "600px",
      }}
    >
      <h2
        style={{
          marginBottom: "10px",
          fontFamily: "'Castoro Titling', cursive",
        }}
      >
        {props.title}
      </h2>
      <img
        src={props.imageUrl}
        alt={props.title}
        style={{
          width: "100%",
          marginBottom: "10px",
          maxWidth: "200px",
          maxHeight: "300px",
        }}
      />
      <p style={{ marginBottom: "10px" }}>{props.description}</p>
      <p style={{ fontWeight: "bold", fontSize: "1.2em" }}>{props.price}</p>
      <button
        onClick={onClick}
        style={{
          backgroundColor: "#000",
          color: "#fff",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Comprar
      </button>
    </div>
  );
}

export default CardView;
