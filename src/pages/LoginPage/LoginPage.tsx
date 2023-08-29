import { signInWithPopup, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, gitHubAuthProvider } from "../../firebase";
import "./LoginPage.css";

const LoginPage = (): React.ReactElement => {
  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  const login = async () => {
    await signInWithPopup(auth, gitHubAuthProvider);

    navigate("/robots");
  };

  const logout = async () => {
    await signOut(auth);
    navigate("/robots");
  };

  return (
    <div className="login">
      <h2 className="login__welcome">
        ¡Check and create your favorite anime robots!
      </h2>
      {user ? (
        <button onClick={logout} className="login-button">
          Sign out
        </button>
      ) : (
        <button onClick={login} className="login-button">
          Sign in with Github
        </button>
      )}
    </div>
  );
};

export default LoginPage;
