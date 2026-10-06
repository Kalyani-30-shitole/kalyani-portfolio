import { useState } from "react";
import "./Certifications.css";

import mkcl from "../assets/MKCL.jpeg";
import mastermind from "../assets/TechMind.jpeg";

function Certifications() {
  const [expandedCertificate, setExpandedCertificate] = useState(null);

  const toggleCertificate = (certificate) => {
    setExpandedCertificate(
      expandedCertificate === certificate ? null : certificate
    );
  };

  return (
    <section id="certifications" className="certifications-section">

      <div className="section-heading">
        <span>05</span>
        <p>CERTIFICATIONS</p>
      </div>

      <div className="certifications-content">
        <div className="certification-item">

          <div
            className={`certification-preview ${
              expandedCertificate === "mastermind" ? "expanded" : ""
            }`}
            onClick={() => toggleCertificate("mastermind")}>
            <img
              src={mastermind}
              alt="Full-Stack Development Certificate"/>
          </div>

          <div className="certification-info">
            <div className="certification-number">
              01 / CERTIFICATION
            </div>

            <h2>Full-Stack Development Course</h2>
            <p>MasterMind Tech</p>

            <button
              className="certificate-button"
              onClick={() => toggleCertificate("mastermind")}>
              {expandedCertificate === "mastermind"
                ? "CLOSE CERTIFICATE ↑"
                : "OPEN CERTIFICATE ↗"}
            </button>
          </div>

        </div>

        <div className="certification-item">
          <div
            className={`certification-preview ${
              expandedCertificate === "mkcl" ? "expanded" : ""
            }`}
            onClick={() => toggleCertificate("mkcl")}>
            <img
              src={mkcl}
              alt="Advanced Web Designing Certificate"/>
          </div>

          <div className="certification-info">
            <div className="certification-number">
              02 / CERTIFICATION
            </div>

            <h2>Advanced Web Designing</h2>
            <p>MKCL / SARTHI — CSMS-DEEP</p>

            <button
              className="certificate-button"
              onClick={() => toggleCertificate("mkcl")}>
              {expandedCertificate === "mkcl"
                ? "CLOSE CERTIFICATE ↑"
                : "OPEN CERTIFICATE ↗"}
            </button>

          </div>
        </div>

      </div>

    </section>
  );
}

export default Certifications;