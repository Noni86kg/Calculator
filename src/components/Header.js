import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [theme, setTheme] = useState("dark-theme");
  console.log(theme);
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="header">
      <h1>calc</h1>
      <div className="theme-changer-div">
        <h6>THEME</h6>
        <div className="theme-changer">
          <div
            className="theme-changer-btn"
            onClick={() => setTheme("dark-theme")}
          >
            <p>1</p>
            <div
              className="theme-changer-circle"
              style={{
                background:
                  theme === "dark-theme"
                    ? "var(--red1toggleBg)"
                    : "transparent",
              }}
            ></div>
          </div>
          <div
            className="theme-changer-btn"
            onClick={() => setTheme("light-theme")}
          >
            <p>2</p>
            <div
              className="theme-changer-circle"
              style={{
                background:
                  theme === "light-theme"
                    ? "var(--red1toggleBg)"
                    : "transparent",
              }}
            ></div>
          </div>
          <div
            className="theme-changer-btn"
            onClick={() => setTheme("purple-theme")}
          >
            <p>3</p>
            <div
              className="theme-changer-circle"
              style={{
                background:
                  theme === "purple-theme"
                    ? "var(--red1toggleBg)"
                    : "transparent",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
