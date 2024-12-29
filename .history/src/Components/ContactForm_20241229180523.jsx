import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const data = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };
    emailjs
      .sendForm(
        "service_3c2ea4i", // Replace with your EmailJS service ID
        "template_l7wr8bl", // Replace with your EmailJS template ID
        formData, // The form element
        "KX8ayzyxwOKBfJPtb" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          setFormData({ name: "", email: "", subject: "", message: "" });
          setLoading(false);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("Error:", error.text);
          setLoading(false);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <form id="contact-form" onSubmit={onSubmit}>
      <div className="row gx-3 gy-4">
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label">Your Name</label>
            <input
              name="name"
              placeholder="Name *"
              className="form-control"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label">Your Email</label>
            <input
              name="email"
              placeholder="Email *"
              className="form-control"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <label className="form-label">Subject</label>
            <input
              name="subject"
              placeholder="Subject *"
              className="form-control"
              type="text"
              value={formData.subject}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <label className="form-label">Your message</label>
            <textarea
              name="message"
              placeholder="Your message *"
              rows={4}
              className="form-control"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="send">
            <button className={`px-btn w-100 ${loading ? "disabled" : ""}`} type="submit">
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
