import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const formRef = useRef(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = () => {};
  const handleBlur = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Anastasia",
        from_email: form.email,
        to_email: "kaldianastasia@gmail.com",
        message: form.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setIsLoading(false);
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };

  return (
    <div className="Contact w-full h-screen relative">
      <div className="flex-1 min-w[50%] flex flex-col">
        <h1
          className="text-white text-6xl mt-60 ml-72"
          style={{ fontFamily: "Playfair Display" }}
        >
          Get in touch
        </h1>
        <form
          className="w-full flex flex-col text-white gap-7 mt-20 ml-72"
          style={{ fontFamily: "Playfair Display" }}
          onSubmit={handleSubmit}
        >
          <label>
            Name <br />
            <input
              type="text"
              name="name"
              className="input rounded-sm w-96 h-12 text-black pl-4"
              placeholder="Maria"
              required
              value={form.name}
              onChange={handleChange}
            />
          </label>

          <label>
            Email <br />
            <input
              type="text"
              name="email"
              className="input rounded-sm w-96 h-12 text-black pl-4"
              placeholder="mariasmith@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
            />
          </label>

          <label>
            Message <br />
            <textarea
              name="message"
              className="input rounded-sm w-96 h-52 text-black pl-4"
              placeholder="Let me know how I can help you!"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className="btn w-96 h-10 mt-8 text-white bg-orange-900 rounded-sm"
            style={{ fontFamily: "Playfair Display" }}
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
