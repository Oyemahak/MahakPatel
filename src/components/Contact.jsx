import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [statusVisible, setStatusVisible] = useState(false);

  // 🎯 Auto-switch local/prod API
  const API_URL =
    import.meta.env.MODE === 'development'
      ? 'http://localhost:3000/api/contact'
      : 'https://admin-dashboard-mahak.onrender.com/api/contact';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('');
    setStatusVisible(false);
    setLoading(true);

    const form = e.target;
    const formData = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      message: form.message.value.trim(),
    };

    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('Please fill in all fields.');
      setStatusVisible(true);
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setFormStatus('Message sent successfully!');
        setStatusVisible(true);
        form.reset();
        window.dispatchEvent(new Event('contact:celebrate')); // 🎉 Animation
      } else {
        setFormStatus(`❌ ${data.error || 'Something went wrong.'}`);
        setStatusVisible(true);
      }
    } catch (err) {
      console.error('❌ Error:', err);
      setFormStatus('❌ Failed to send message. Try again later.');
      setStatusVisible(true);
    }

    setLoading(false);

    // Auto-hide status after 4s
    setTimeout(() => {
      setStatusVisible(false);
    }, 4000);
  };

  return (
    <section id="contact">
      <div className="contact-container">
        <h2 className="contact-header">Get in Touch</h2>
        <p className="contact-description">
          Have a question or want to work together? I'd love to hear from you.
        </p>

        <form id="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Your message" required />
          </div>

          <div className="form-status-wrap">
            <button type="submit" className="send-message-button" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            <div
              className="form-status-text"
              style={{ opacity: statusVisible ? 1 : 0 }}
            >
              {formStatus}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;