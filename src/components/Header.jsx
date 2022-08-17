import React from "react";

export const Header = (props) => {
  return (
    <div className="Header">
      <h1>ReactHooks</h1>
      <button type="button" onClick={() => props.onClick()}>
        {props.darkMode ? 'Dark Mode' : 'Light Mode'}
      </button>
    </div>
  );
}