import React, { useState, useEffect } from "react";

function Navbar({ menuItems, onSelect }) {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
  <span style={{ color: "#fff" }}>DAT</span>
  <span style={{ color: "#00aeffff" }}>A i</span>
</div>
      <button className="hamburger" onClick={() => setOpen(!open)}>
        &#9776;
      </button>

      <ul className={`nav-links ${open ? "open" : ""}`}>
        {menuItems.map((item) => (
          <li
            key={item.name}
            onClick={() => {
              onSelect(item.image);
              setOpen(false);
            }}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
