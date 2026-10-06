import { FaArrowDown } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import photo from "../assets/photo.jpg";
import "./Profile.css";

function Profile() {
  return (
    <section id="profile" className="profile">

      <div className="profile-content">
        <p className="profile-intro">Hello, I'M</p>
        <h1>KALYANI SHITOLE</h1>
        <h2>
          <TypeAnimation
            sequence={[
              "Frontend Developer",
              2000,
              "React Developer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            deletionSpeed={50}
            repeat={Infinity} />
        </h2>

        <p className="profile-description">
          I’m a passionate Frontend Developer and a recent Computer Science
          graduate who enjoys building responsive and user-friendly web
          applications. I have worked on personal projects using React,
          JavaScript, HTML, CSS, and Bootstrap. I’m eager to learn new
          technologies, improve my skills, and begin my career in frontend
          development.
        </p>

        <div className="profile-buttons">
          <a href="#projects" className="primary-btn">
            View Projects
            <FaArrowDown />
          </a>

          <a
            href="/resume.pdf"
            download="Kalyani_Shitole_Resume.pdf"
            className="secondary-btn">
            Download Resume
          </a>

        </div>
      </div>

      <div className="profile-photo-area">
        <div className="profile-photo-box">

          <img
            src={photo}
            alt="Kalyani Shitole"
            className="profile-photo" />

          <div className="portrait-label">
            PROFILE PORTRAIT
          </div>

        </div>
      </div>

    </section>
  );
}

export default Profile;