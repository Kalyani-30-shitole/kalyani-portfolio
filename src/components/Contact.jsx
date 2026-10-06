import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./Contact.css";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        () => {
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="contact-section">

      <div className="contact-main-heading">
        <h1>Contact Me</h1>
        <div className="main-heading-line"></div>
        <p>Feel free to contact me for any opportunities.</p>
      </div>

      <div className="contact-container">

        <div className="contact-left">
          <h2>Let's Connect</h2>
          <div className="heading-line"></div>

          <div className="contact-details">
            <div className="contact-detail">

              <div className="contact-icon">
                <FaEnvelope />
              </div>

              <div className="contact-text">
                <h3>Email</h3>
                <p>kalyanishitole80@gmail.com</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">
                <FaPhone />
              </div>

              <div className="contact-text">
                <h3>Phone</h3>
                <p>+91 88309 19908</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>

              <div className="contact-text">
                <h3>Location</h3>
                <p>Pune, Maharashtra, India</p>
              </div>
            </div>

          </div>
        </div>

        <div className="contact-right">
          <h2>Send me a message</h2>

          <div className="heading-line"></div>

          <form ref={form} onSubmit={sendEmail}>

            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Enter your name"
                  required/>
              </div>

              <div className="form-group">
                <label>Email</label>

                <input
                  type="email"
                  name="from_email"
                  placeholder="Enter your email"
                  required/>
              </div>
            </div>

            <div className="form-group">
              <label>Message</label>

              <textarea
                name="message"
                rows="6"
                placeholder="Write your message..."
                required></textarea>
            </div>

            <button type="submit">
              Send Message
            </button>

            {status && (
              <p className="form-status">{status}</p>
            )}

          </form>

        </div>
      </div>

    </section>
  );
}

export default Contact;