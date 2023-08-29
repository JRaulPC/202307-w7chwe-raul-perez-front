/* eslint-disable react/no-unescaped-entities */
import NewRobot from "../../components/NewRobot/NewRobot";
import "./NewRobotPage.css";

const NewRobotPage = () => {
  return (
    <section className="new-robot-page">
      <h2 className="new-robot-page__title">Who's the new robot?</h2>
      <NewRobot />
    </section>
  );
};

export default NewRobotPage;

// const [user, isLoading] = useAuthState(auth);

// if (isLoading) {
//   return <span>Loading</span>;
// }

// const login = async () => {
//   await signInWithPopup(auth, gitHubAuthProvider);
// };

// const logOut = async () => {
//   await signOut(auth);
// };

// if (!user) {
//   return <Navigate to={paths.newRobot} />;
// }
