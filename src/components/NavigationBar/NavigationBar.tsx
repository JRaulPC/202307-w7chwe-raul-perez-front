import { NavLink } from "react-router-dom";
import "./NavigationBar.css";

const NavigationBar = (): React.ReactElement => {
  return (
    <nav className="navigation-bar">
      <ul className="navigation-bar__elements">
        <li>
          <NavLink to="/robots" className="navigation-bar__home">
            The Robots
          </NavLink>
        </li>
        <li>
          <NavLink to="/new-robot" className="navigation-bar__add ">
            Add robot
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
