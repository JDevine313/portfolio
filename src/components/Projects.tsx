import "./Projects.css";
import DSB from "../assests/Screenshot-devine-score.png";
import eCommerce from "../assests/Screenshot-e-commerce.png";
import trivia from "../assests/Screenshot-trivia.png";
import weather from "../assests/Screenshot-weather.png";

const Projects = () => {
  const redirectDevineScore = () => {
    window.location.href = "https://devine-score-tracker.web.app/";
  };
  const redirectTrivia = () => {
    window.location.href = "https://trivia-game-a3901.web.app/";
  };
  const redirectWeather = () => {
    window.location.href = "https://weather-app-55957.web.app/";
  };
  const redirectECommerce = () => {
    window.location.href = "https://e-commerce-1c157.web.app";
  };
  return (
    <div className="Projects">
      <h1>Projects</h1>
      <div className="projects">
        <section className="Container">
          <h2>Devine Score Tracker</h2>
          <img
            src={DSB}
            className="project DSB"
            onClick={() => redirectDevineScore()}
          ></img>
          <p>
            This is my latest project The Devine Score Tracker! It is a way for
            My family and I to keep score when we play our various lawn games.
            So much so we will have more than one game and more than one group
            playing at the same time! This is what lead me to creating the
            Devine Score Tracker. Because our love for lawn game and
            competiviness we hold a yearly tournament with a bunch of lawn games
            talling up wins for a champion which is what the tournament feature
            is for!{" "}
          </p>
          <p>
            Technical Skills: MongoDB, Express, React, Node.js, Typescript,
            local storage, firebase.
          </p>
        </section>
        <section className="Container">
          <h2>Trivia Game</h2>
          <img
            src={trivia}
            className="project Trivia-game"
            onClick={() => redirectTrivia()}
          ></img>
          <p>
            My family and I love to play trivia type games around the campfire
            but all the good travel ones are gone! Not to worry though this
            trivia app gives you plenty of catagories to choose from that will
            keep the night going! Challenge yourself to score a perfect 50!
          </p>
          <p>
            Technical Skills: MongoDB, Express, React, Node.js, Typescript, Web
            API, firebase.
          </p>
        </section>
        <section className="Container">
          <h2>Week Checker</h2>
          <img
            src={weather}
            className="project Week-checker"
            onClick={() => redirectWeather()}
          ></img>
          <p>
            This weather app allows you to check up to the next three days in
            detail by the hour. I used bootstrap to impliment a carasoul that
            lets you check the morning, noon, evening, and night easily and
            quickly while each day can be clicked on to get an hour by hour
            breakdown.{" "}
          </p>
          <p>Technical Skills: React, Web API, Bootstrap, firebase.</p>
        </section>
        <section className="Container">
          <h2>JJs Antiques (e-commerce)</h2>
          <img
            src={eCommerce}
            className="project e-commerce"
            onClick={() => redirectECommerce()}
          ></img>
          <p>
            This e-commerce site around antiques is developed around letting a
            user shop for antqiues searching by any part of the name or just by
            browsing. After logging in using your google account, you can add to
            your cart which you can then go look at in another view. Once you
            have added all you want to your cart you may checkout using a credit
            card which clears the cart.{" "}
          </p>
          <p>
            Technical Skills: MongoDB, Express, React, Node.js, Google
            Authentacation, firebase.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Projects;

//https://recipe-rescue-99e85.web.app
