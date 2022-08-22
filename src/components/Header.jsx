import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export const Header = (props) => {
  const color = useContext(ThemeContext);
  return (
    <div style={{ color }} className="Header">
      <h1>ReactHooks</h1>
      <button type="button" onClick={() => props.onClick()}>
        {props.darkMode ? 'Dark Mode' : 'Light Mode'}
      </button>
    </div>
  );
}