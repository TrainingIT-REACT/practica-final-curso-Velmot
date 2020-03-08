import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "Components/Icon";

import "./css/Menu.css";

const menus = [
  { icon: "home", title: "Inicio", path: "/", exact: true },
  { icon: "book", title: "Biblioteca", path: "/library", exact: true }
];

const Menu = () => (
  <div className="menu">
    <ul>
      {menus.map((m, i) => (
        <li key={i}>
          <NavLink
            exact={m.exact || false}
            to={m.path}
            activeClassName="active"
          >
            <span className="menu__icon">
              {m.icon && <Icon name={m.icon} />}
            </span>
            <span>{m.title}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

export default Menu;
