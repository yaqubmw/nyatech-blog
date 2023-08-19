"use client";
import React, { useState, useEffect } from "react";
import Button from "@components/button/Button";
import BrandLogo from "@components/parts/BrandLogo";
import Link from "next/link";

export default function Header() {
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    const currentPath = window.location.pathname;

    if (currentPath === "/") {
      setActiveItem("Home");
    } else if (currentPath === "/blog") {
      setActiveItem("Blog");
    } else if (currentPath === "/connect") {
      setActiveItem("FollowMe");
    }
  }, []);

  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-wrap">
          <div className="nav-responsive">
            <Link className="nav-logo" href="/">
              <BrandLogo />
            </Link>
            <button
              className="nav-hamburger"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                height="1em"
                width="1em"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z" />
              </svg>
            </button>
          </div>
          <div
            className={"nav-menu" + (navbarOpen ? " flex" : " hidden")}
            id="nav-responsive"
          >
            <ul className="nav-ul">
              <li
                className={`menu-item ${
                  activeItem === "Home"
                    ? "nav-menu-active"
                    : "nav-menu-inactive"
                }`}
              >
                <Button className="nav-menu-item" text="Home" link="/" />
              </li>
              <li
                className={`menu-item ${
                  activeItem === "Blog"
                    ? "nav-menu-active"
                    : "nav-menu-inactive"
                }`}
              >
                <Button className="nav-menu-item" text="Blog" link="/blog" />
              </li>
              <li
                className={`menu-item ${
                  activeItem === "FollowMe"
                    ? "nav-menu-active"
                    : "nav-menu-inactive"
                }`}
              >
                <Button
                  className="nav-menu-item"
                  text="Follow Me"
                  link="/connect"
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
