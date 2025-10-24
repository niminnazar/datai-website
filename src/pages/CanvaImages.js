import React from "react";

// Import your Canva-exported images
import home from "../assets/home.jpg";
import about from "../assets/about-us.jpg";
import retail from "../assets/retail-automation-hub.jpg";
import visual from "../assets/visual-intelligence-platform.jpg";
import contact from "../assets/get-in-touch.jpg";

function CanvaImages() {
  const images = [
    { src: home, alt: "Home" },
    { src: about, alt: "About Us" },
    { src: retail, alt: "Retail Automation Hub" },
    { src: visual, alt: "Visual Intelligence Platform" },
    { src: contact, alt: "Get in Touch" },
  ];

  return (
    <div
      style={{
        backgroundColor: "white",
        minHeight: "100vh",
        color: "white",
        padding: "40px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowY: "auto",
      }}
    >
      <h1 style={{ marginBottom: "30px", fontSize: "2rem", fontWeight: "600" }}>
        Data i Website Preview
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "50px",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            style={{
              width: "90%",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 0 20px rgba(255,255,255,0.1)",
            }}
          >
            <img
              src={img.src}
              alt={img.alt}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: "12px",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CanvaImages;
