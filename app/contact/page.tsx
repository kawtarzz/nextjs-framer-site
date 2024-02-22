"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import "@/app/globals.css";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [templateParams, setTemplateParams] = useState({
    to_name: "Kawtar Azzouzi",
    from_name: "",
    message: "",
    reply_to: "",
  });
  const [captchaComplete, setCaptchaComplete] = useState<string | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !templateParams.from_name ||
      !templateParams.reply_to ||
      !templateParams.message
    ) {
      alert("Please fill out all fields");
      return;
    } else {
      emailjs
        .send(
          "service_ii6ih5p",
          "template_fjl9j6l",
          templateParams,
          "oVuhuWy96mVwChvm2"
        )
        .then(
          () => {
            alert(
              "Message successfully sent! I will get back to your shortly. Thanks!"
            );
            window.location.reload();
          },
          () => {
            alert(
              "Failed to send the message, please try again or contact me directly at Kawtaryazzouzi@gmail.com"
            );
          }
        );
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTemplateParams({ ...templateParams, [name]: value });
  };

  return (
    <>
      <div className="flex justify-center items-center container">
        <p className="text-2xl font-bold my-8">
          Open to freelance or full-time opportunities. Lets connect!
        </p>
        <p className="text-4xl font-bold my-8">Contact</p>
        <form onSubmit={sendEmail} className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="from_name"
              >
                Your Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                placeholder="Your Name"
                type="text"
                name="from_name"
                value={templateParams.from_name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="reply_to"
              >
                Your Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                name="reply_to"
                type="text"
                placeholder="JaneDoe@email.com"
                onChange={handleInputChange}
                value={templateParams.reply_to}
                required
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                name="message"
                placeholder="Your message here..."
                value={templateParams.message}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="flex justify-center">
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                onChange={setCaptchaComplete}
              />
            </div>

            <div className="md:w-1/3">
              <button className="btn-blue" type="submit" value="Submit">
                Send
              </button>
            </div>
            <div className="md:w-2/3"></div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
