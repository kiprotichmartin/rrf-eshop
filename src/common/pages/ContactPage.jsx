import React from "react";
import "../../style/ContactPage.css";

export default function ContactPage() {
  return (
    <div className="contact-container">
      <div className="contact-section">
        <form className="contact-form">
          <h2 className="contact-title">Hit Me Up 🤙🏾</h2>
          <label className="contact-label name-label" htmlFor="name-input">
            Name:
          </label>
          <input
            className="contact-input"
            type="text"
            name="contact-name"
            id="name-input"
            placeholder="your name here"
          />
          <label className="contact-label email-label" htmlFor="email-input">
            Email:
          </label>
          <input
            className="contact-input"
            type="email"
            name="contact-email"
            id="email-input"
            placeholder="your email here"
          />
          <label
            className="contact-label message-label"
            htmlFor="message-input"
          >
            Message:
          </label>
          <textarea
            className="contact-input textarea"
            name="contact-message"
            id="message-input"
            cols="30"
            rows="5"
          >
            Enter your message here...
          </textarea>
          <button className="btn-contact" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
