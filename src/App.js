import React, { useState } from "react";

// Import images from src/assets
import homeImg from "./assets/home.jpg";
import aboutImg from "./assets/about-us.jpg";
import retailImg from "./assets/retail-automation-hub.jpg";
import visualImg from "./assets/visual-intelligence-platform.jpg";
import contactImg from "./assets/get-in-touch.jpg";

function App() {
  const [currentImage, setCurrentImage] = useState(homeImg);

  const menuItems = [
    { name: "Home", image: homeImg },
    { name: "About us", image: aboutImg },
    { name: "Retail Automation Hub", image: retailImg },
    { name: "Visual Intelligence Platform", image: visualImg },
    { name: "Get in Touch", image: contactImg },
  ];

  return (
    <div style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      {/* Navigation Menu */}
      <nav style={styles.nav}>
        <div style={styles.logo}>Data i</div>
        <ul style={styles.menu}>
          {menuItems.map((item) => (
            <li
              key={item.name}
              style={styles.menuItem}
              onClick={() => setCurrentImage(item.image)}
              onMouseOver={(e) => (e.target.style.color = "#007bff")}
              onMouseOut={(e) => (e.target.style.color = "#000")}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </nav>

      {/* Image Display */}
      <div style={styles.imageContainer}>
        <img
          src={currentImage}
          alt="Selected"
          style={styles.image}
          loading="lazy"
        />
      </div>
    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    position: "sticky",
    top: 0,
    backgroundColor: "#fff",
    boxShadow: "none",
    zIndex: 1000,
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  menu: {
    display: "flex",
    gap: "1.5rem",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  menuItem: {
    cursor: "pointer",
    fontWeight: 500,
    color: "#000",
    transition: "color 0.2s",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "2rem",
    minHeight: "80vh",
  },
  image: {
    Width: "auto",
    Height: "80vh",
    objectFit: "cover",
    borderRadius: "0",
    boxShadow: "none",
    transition: "transform 0.3s ease",
  },
};

export default App;
