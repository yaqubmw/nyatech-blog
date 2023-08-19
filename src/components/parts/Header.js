"use client";
import React, { useState, useEffect } from "react";
import Button from "@components/button/Button";
import BrandLogo from "@components/parts/BrandLogo";

export default function Header() {
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    const currentPath = window.location.pathname;

    if (currentPath === "/") {
      setActiveItem("Home");
    } else if (currentPath === "/blog") {
      setActiveItem("Blog");
    } else if (currentPath === "/connect") {
      setActiveItem("Follow Me");
    }
  }, []);

  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <BrandLogo />
          </div>
          <ul className="nav-menu">
            <li
              className={`menu-item ${activeItem === "Home" ? "active" : ""}`}
            >
              <Button text="Home" link="/" />
            </li>
            <li
              className={`menu-item ${activeItem === "Blog" ? "active" : ""}`}
            >
              <Button text="Blog" link="/blog" />
            </li>
            <li
              className={`menu-item ${
                activeItem === "Follow Me" ? "active" : ""
              }`}
            >
              <Button text="Follow Me" link="/connect" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}