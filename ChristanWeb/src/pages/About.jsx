// About.js
import "./About.css";
import Card from "../Cards/Card";

function About() {
  return (
    <div id="AboutSection">
      <div className="header">
        <h1 className="N">About Me</h1>
      </div>

      <div className="container">
        <Card
          title="Christian Moore"
          desc={
            <>
              My name is Christian Moore, a freshman at the University of Houston{" "}
              <br /> - Certified Fitness Trainer <br /> - I have been working out for 3+ years{" "}
              <br /> - Many clients are satisfied with my work
            </>
          }
        />
      </div>
    </div>
  );
}

export default About;
