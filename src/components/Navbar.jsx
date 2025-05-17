"use client"; 
import React, { useState } from "react";
import "./Navbar.css";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">HABERLER</div>

        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        <ul className={`navbar-menu ${menuOpen ? "active" : ""}`}>
          <li><a href="#">SON DAKİKA</a></li>
          <li><a href="#">YAZARLAR</a></li>

          <li className="has-submenu">
            <a href="#">GÜNDEM</a>
            <ul className="submenu">
              <li><a href="#">Siyaset</a></li>
              <li><a href="#">Yerel</a></li>
              <li><a href="#">Eğitim</a></li>
            </ul>
          </li>

          <li className="has-submenu">
            <a href="#">EKONOMİ</a>
            <ul className="submenu">
              <li><a href="#">Borsa</a></li>
              <li><a href="#">Döviz</a></li>
              <li><a href="#">Altın</a></li>
            </ul>
          </li>

          <li><a href="#">DÜNYA</a></li>
          <li><a href="#">GÜNÜN İÇİNDEN</a></li>
          <li><a href="#">SPOR</a></li>
          <li><a href="#">HAYAT</a></li>
          <li><a href="#">MAGAZİN</a></li>
          <li><a href="#">FİNANS</a></li>
          <li><a href="#">RESMİ İLANLAR</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
