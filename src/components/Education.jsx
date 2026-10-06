import "./Education.css";

function Education() {
  return (
    <section id="education" className="education-section">

      <div className="section-heading">
        <span>04</span>
        <p>EDUCATION </p>
      </div>

      <div className="education-layout">
        <div className="education-left">

          <div className="education-header">
            <span>DEGREE</span>
            <span>INSTITUTION</span>
            <span>YEAR</span>
            <span>SCORE</span>
          </div>

          <div className="education-row">
            <div>
              <h2>B.Tech CSE</h2>
              <p>Computer Science & Engineering</p>
            </div>

            <div>
              <h3>KBP College of Engineering</h3>
              <p>Satara</p>
            </div>

            <span>2026</span>
            <span className="score">9.00</span>
          </div>

          <div className="education-row">
            <div>
              <h2>XII HSC</h2>
              <p>Higher Secondary Certificate</p>
            </div>

            <div>
              <h3>Gopinath Higher Secondary </h3>
              <p>Higher & Technical School</p>
            </div>

            <span>2022</span>
            <span className="score">74.83%</span>
          </div>

          <div className="education-row">
            <div>
              <h2>X SSC</h2>
              <p>Secondary School Certificate</p>
            </div>

            <div>
              <h3>Shri Bhanoba Vidyalaya</h3>
              <p>Kusegaon</p>
            </div>

            <span>2020</span>
            <span className="score">91.40%</span>
          </div>

        </div>

        <div className="academic-standing">

          <div className="academic-heading">
            <span>ACADEMIC STANDING</span>
          </div>

          <div className="academic-item">
            <div className="academic-number">01 / ACHIEVEMENT</div>

            <p>Secured first rank in First Year and Second Year of B.Tech CSE.</p>
          </div>

          <div className="academic-item">
            <div className="academic-number">02 / ACHIEVEMENT</div>
            <p>Won a college-level poster presentation competition.</p>
          </div>

        </div>
      </div>

    </section>
  );
}

export default Education;