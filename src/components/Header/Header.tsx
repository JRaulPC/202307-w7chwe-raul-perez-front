import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import paths from "../../paths/paths";
import NavigationBar from "../NavigationBar/NavigationBar";
import "./Header.css";

const Header = (): React.ReactElement => {
  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    navigate(paths.loginPage);
  };

  return (
    <header className="header">
      <div className="header__elements">
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
        {user ? (
          <button className="logout-button" onClick={logout}>
            Sign out
          </button>
        ) : undefined}
      </div>
      {user ? <NavigationBar /> : undefined}
    </header>
  );
};

export default Header;
