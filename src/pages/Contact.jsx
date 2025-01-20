import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [feedback, setFeedback] = useState("");

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (feedback.trim() !== "") {
      alert("Thank you for your feedback!");
      setFeedback(""); // Clear the text box
    } else {
      alert("Please enter some feedback before submitting.");
    }
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Contact Us</h1>
      <p className="page-content">
        Have questions or want to make a reservation? Reach out to us at:
      </p>
      <p className="page-content">📞 Phone: (123) 456-7890</p>
      <p className="page-content">📧 Email: reservations@restaurant.com</p>
      <hr />
      <h2 className="page-heading">Feedback</h2>
      <p className="page-content">
        We value our customers' feedback. If you want to leave a review of your
        experience at Restaurant Name, please fill out this form.
      </p>
      <form className="feedback-form" onSubmit={handleFeedbackSubmit}>
        <textarea
          className="feedback-textbox"
          placeholder="Write your feedback here..."
          value={feedback}
          onChange={handleFeedbackChange}
        />
        <button className="feedback-submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
