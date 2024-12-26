import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_s906rpe", "template_0is53kj", form.current, {
        publicKey: "GEQiGiDfuPSzC57ru",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    setName("");
    setEmail("");
    setMessage("");
  };
  // const handleFormSubmit = (formData) => {
  //   // console.log(formData.entries());
  //   const formInputData = Object.fromEntries(formData.entries());
  //   console.log(formInputData);
  // };

  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>

      <div className="contact-wrapper container">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="form-control"
            placeholder="enter your name"
            name="to_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoComplete="off"
          />

          <input
            type="email"
            className="form-control"
            placeholder="Enter you email"
            name="from_name"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="off"
          />

          <textarea
            className="form-control"
            rows="10"
            placeholder="Enter your message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            autoComplete="off"
          ></textarea>

          <button type="submit" value="send">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};
