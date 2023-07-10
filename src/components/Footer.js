import React from "react";
import WhatsappIcon from "../icons/whatsapp.svg";

function Footer() {
  const styleFlex = {
    flex: 1,
    top: "50%",
    color: "#fffff",
    backgroundColor: "#e0e0e0",
  };

  const onClick = (e) => {
    console.log("https://api.whatsapp.com/send?phone=number");
  };

  return (
    <footer>
      <div
        className="container"
        style={{
          backgroundColor: "#E0E0E0",
          height: "8vh",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          textAlign: "center",
          color: "#fffff",
        }}
      >
        <div className="row" style={styleFlex}>
          <a
            onClick={onClick}
            style={{ color: "blue" }}
            href={"https://api.whatsapp.com/send?phone=573170488805"}
          >
            <img
              src={WhatsappIcon}
              alt=""
              style={{ width: "40px", height: "40px" }}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
