import { useEffect, useRef } from "react";
import "./Welcome.css"; // Your CSS file

const Welcome = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer: any = scrollContainerRef.current;

    scrollContainer.scrollTop = 0;

    // Scroll down after 1000ms by 100px
    const timer = setInterval(() => {
      scrollContainer.scrollBy({
        top: 3, //
        behavior: "smooth",
      });
      if (
        scrollContainer.scrollTop + 2 >
        scrollContainer.scrollHeight - scrollContainer.clientHeight
      ) {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="Slide" ref={scrollContainerRef}>
      <div className="card first">
        <p>H</p>
        <p>e</p>
        <p>l</p>
        <p>l</p>
        <p>o</p>
      </div>
      <div className="card second">
        <span>My Name is</span>
        <p>James Devine</p>
      </div>
      <div className="card third">
        <p>I Am A FullStack Web Developer</p>
      </div>
      <div className="card fourth">
        <p>
          I graduated from Grand Circus Full-Stack JavaScript bootcamp in
          February of 2022 and it has changed my life. I specialize in Front-end
          JavaScript using React and Back-end JavaScript using MongoDB. Now I'm
          looking for a place where I can go even further.
        </p>
      </div>
      <div className="card fifth">
        <p>Somewhere I can climb.</p>
      </div>
      <div className="card sixth">
        <p>Somewhere I can grow.</p>
      </div>
      <div className="card seventh">
        <p>Somewhere I can </p>
        <span>lead.</span>
      </div>
      <div className="card eighth">
        <p>
          Check out the <a href="https://github.com/JDevine313">GitHub</a>
        </p>
      </div>
      <div className="card nineth">
        <p>
          Connect with me on{" "}
          <a href="https://www.linkedin.com/in/james-devine-at-your-service/">
            LinkedIn
          </a>
        </p>
      </div>
      <div className="card">
        <p>
          Check out my latest projects below!!{" "}
          <i className="fa-solid fa-down-long"></i>
        </p>
      </div>
    </div>
  );
};

export default Welcome;
