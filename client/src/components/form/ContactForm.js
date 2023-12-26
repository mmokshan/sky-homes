import React, { useState, useEffect } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const sendForm = () => {
    fetch("https://sheetdb.io/api/v1/1jw2ckvyfox0r", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [
          {
            id: "INCREMENT",
            time: "DATETIME",
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          },
        ],
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Server response:", data);
      })
      .catch((error) => {
        console.error("Error sending form data:", error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendForm();
  };

  const getForm = () => {
    fetch(
      "https://sheetdb.io/api/v1/1jw2ckvyfox0r"
    )
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0) {
          console.log(data);
          const defaultFormData = data[0]; // Assuming the first entry is the default data
          setFormData(defaultFormData);

        }
      });
  };

  useEffect(() => {
    getForm();
  }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit}>
        <div className="top-line">
          <input
            type="text"
            id="name"
            name="name"
            className="label-01"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            id="email"
            name="email"
            className="label-01"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />

        <textarea
          id="message"
          name="message"
          placeholder="Enter Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
