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
