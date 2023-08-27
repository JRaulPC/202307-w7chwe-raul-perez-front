import NavigationBar from "../NavigationBar/NavigationBar";
import "./Header.css";

const Header = (): React.ReactElement => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header__title">Robots</h1>
        <img
          className="main-header__logo"
          src="/img/app-logo.webp"
          alt="Robots webpage logo"
          width="82"
          height="67"
        />
      </div>
      <NavigationBar />
    </header>
  );
};

export default Header;
