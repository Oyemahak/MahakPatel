import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-container">
        <h2 className="contact-header">Get in Touch</h2>
        <p className="contact-description">
          Have a question or want to work together? I'd love to hear from you.
        </p>

        <form id="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Hey, what's your first name?"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Drop your email here. I promise no spam!"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell me all the things! (Or just a quick hello.)"
              required
            ></textarea>
          </div>

          <div className="form-status-wrap">
            <button type="submit" className="send-message-button">
              Send Message
            </button>
            <div id="form-status" className="form-status-text"></div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;