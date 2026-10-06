import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects-section">

      <div className="section-heading projects-heading">
        <span>03</span>
        <p>PROJECTS</p>
      </div>

      <div className="projects-content">
        <article className="project-item">

          <div className="project-left">
            <span className="project-number">01</span>
            <h2>SkillSwap</h2>
            <p className="project-subtitle">
              Full-stack skill exchange platform
            </p>
          </div>

          <div className="project-right">

            <div className="project-tech">
              <span>REACT</span>
              <span>JAVASCRIPT</span>
              <span>NODE.JS</span>
              <span>EXPRESS</span>
              <span>MONGODB</span>
              <span>REST APIs</span>
            </div>

            <div className="project-points">

              <p>
                <b>+</b>
                Users can explore skills and connect with people
                who want to exchange their knowledge.
              </p>

              <p>
                <b>+</b>
                Includes authentication, skill exchange requests,
                protected routes and user profiles.
              </p>

              <p>
                <b>+</b>
                Users can send requests and chat with each other
                through the platform.
              </p>

            </div>

            <div className="project-links">
              <a
                href="https://skillswap-frontend-6iar.onrender.com/"
                target="_blank"
                rel="noopener noreferrer">
                LIVE DEMO
                <FaArrowUpRightFromSquare />
              </a>

              <a
                href="https://github.com/Kalyani-30-shitole/SkillSwap"
                target="_blank"
                rel="noopener noreferrer">
                GITHUB
                <FaGithub />
              </a>

            </div>
          </div>

        </article>

        <article className="project-item">

          <div className="project-left">
            <span className="project-number">02</span>
            <h2>Developer Portfolio</h2>
            <p className="project-subtitle">
              Responsive personal developer portfolio
            </p>
          </div>

          <div className="project-right">

            <div className="project-tech">
              <span>REACT</span>
              <span>JAVASCRIPT</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>REACT ICONS</span>
            </div>

            <div className="project-points">

              <p>
                <b>+</b>
                Responsive one-page portfolio showcasing my
                skills, projects, education and certifications.
              </p>

              <p>
                <b>+</b>
                Includes smooth section navigation, resume download
                and responsive design for different screen sizes.
              </p>

              <p>
                <b>+</b>
                Customized and developed using React, JavaScript and
                CSS to present my professional profile and projects.
              </p>

            </div>

            <div className="project-links">
              <a href="#profile">
                VIEW PORTFOLIO
                <FaArrowUpRightFromSquare />
              </a>
            </div>

          </div>
        </article>

      </div>

    </section>
  );
}

export default Projects;