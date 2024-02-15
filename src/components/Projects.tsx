import "./Projects.css";

const Projects = () => {
  const redirectNBA = () => {
    window.location.href = "https://nba-finalproject.web.app/";
  };
  const redirectTrivia = () => {
    window.location.href = "https://trivia-game-a3901.web.app/";
  };
  const redirectWeather = () => {
    window.location.href = "https://weather-app-55957.web.app/";
  };
  return (
    <div className="projects">
      <div className="Container">
        <h2>NBAGalaxy</h2>
        <div className="NBAGalaxy" onClick={() => redirectNBA()}></div>
        <p>
          This was my final collaboritive project while I was at Grand Circus
          during my bootcamp that is your one stop shop for all that is
          basketball! Check on standings, betting odds, latest news, or buy
          tickets for the next game! Want to test you and your friends love of
          the game? Try out our trivia section to kill the time waiting in those
          consession lines! My collaboraters and I intergrated multipule APIs
          requiring different authorzations without conflicting.
        </p>
      </div>
      <div className="Container">
        <h2>Trivia Game</h2>
        <div className="Trivia-game" onClick={() => redirectTrivia()}></div>
        <p>
          My family and I love to play trivia type games around the campfire but
          all the good travel ones are gone! Not to worry though this trivia app
          gives you plenty of catagories to choose from that will keep the night
          going!
        </p>
      </div>
      <div className="Container">
        <h2>Week Checker</h2>
        <div className="Week-checker" onClick={() => redirectWeather()}></div>
        <p>
          This weather app allows you to check up to the next three days in
          detail by the hour. I used bootstrap to impliment a carasoul that lets
          you check the morning, noon, evening, and night easily and quickly
          while each day can be clicked on to get an hour by hour breakdown.
        </p>
      </div>
    </div>
  );
};

export default Projects;

//https://recipe-rescue-99e85.web.app
