import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills-section">

      <div className="section-heading">
        <span>02</span>
        <p>SKILLS</p>
      </div>

      <div className="skills-content">

        <div className="skills-intro">
          <h2>
            Technologies I use to
            <span> build web applications.</span>
          </h2>

          <p>
            I enjoy working with modern frontend technologies and
            building responsive, user-friendly web applications.
          </p>
        </div>

        <div className="skills-grid">

          <div className="skill-category">
            <p className="category-number">01</p>
            <h3>Languages</h3>

            <div className="skill-list">
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>
          </div>

          <div className="skill-category">
            <p className="category-number">02</p>
            <h3>Frontend</h3>

            <div className="skill-list">
              <span>React</span>
              <span>Bootstrap</span>
            </div>
          </div>

           <div className="skill-category">
            <p className="category-number">03</p>
            <h3>Database & Tools</h3>

            <div className="skill-list">
              <span>VS Code</span>
              <span>MongoDB</span>
              <span>Git</span>
              <span>GitHub</span>
            </div>
          </div>

          <div className="skill-category">
            <p className="category-number">04</p>
            <h3>Backend & APIs</h3>

            <div className="skill-list">
              <span>REST APIs</span>
              <span>Postman</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;