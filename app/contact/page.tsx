"use client";
import { useEffect, useState } from "react";
import Loader from "react-loaders";
import emailjs from "@emailjs/browser";
import "@/app/globals.css";

const Contact = () => {
  const [templateParams, setTemplateParams] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        "service_ii6ih5p",
        "template_fjl9j6l",
        templateParams,
        "oVuhuWy96mVwChvm2"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload();
        },
        () => {
          alert(
            "Failed to send the message, please try again or contact me at Kawtaryazzouzi@gmail.com"
          );
        }
      );
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTemplateParams({ ...templateParams, [name]: value });
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>Contact</h1>
          <h3>
            I&apos;m currently available for freelance work and open to new
            opportunities.
          </h3>
          <p>
            Have a project you&apos;d like to discuss or a role you&apos;d like
            to fill? Or if you just want to say hello, I&apos;d love to hear
            from you! Feel free to contact me using the form below or at:
          </p>
          <br />
          <h2>
            <a href="mailto:kawtaryazzouzi@gmail.com">
              <i>KawtaryAzzouzi@gmail.com</i>
            </a>
          </h2>
          <div className="contact-form">
            <form onSubmit={sendEmail}>
              <ul>
                <li>
                  <input
                    placeholder="Name"
                    type="text"
                    name="name"
                    value={templateParams.name}
                    onChange={handleInputChange}
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    value={templateParams.email}
                    onChange={handleInputChange}
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    value={templateParams.subject}
                    onChange={handleInputChange}
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Hi Kawtar, I'd like to talk about..."
                    name="message"
                    value={templateParams.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
