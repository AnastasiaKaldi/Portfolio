/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, { useState, useRef, Suspense } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber"; // Correct named import for Canvas
import Dog from "./Dog.jsx";

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

  const handleSubmit = () => {};

  return (
    <div className="ContactMob">
      <div className="Contact w-full h-screen flex">
        {/* Adjusted margin-top from mt-40 to mt-20 to move content upwards */}
        <div className="flex-1 flex flex-col p-3 md:p-10 mt-20">
          <div className="flex items-center space-x-14">
            <h1
              className="text-white text-4xl ml-16"
              style={{ fontFamily: "Playfair Display" }}
            >
              Get in touch
            </h1>
          </div>
          <form
            className="w-full flex flex-col text-white gap-7 font-bold mt-10"
            style={{ fontFamily: "Playfair Display" }}
            onSubmit={handleSubmit}
          >
            <label>
              Name <br />
              <input
                type="text"
                name="name"
                className="input rounded-sm w-full h-12 text-black pl-4"
                placeholder="Maria"
                required
                value={form.name}
                onChange={handleChange}
              />
            </label>

            <label>
              Email <br />
              <input
                type="email"
                name="email"
                className="input rounded-sm w-full h-12 text-black pl-4"
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
                className="input rounded-sm w-full h-48 text-black pl-4"
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
              className="btn min-w-72 h-10  text-white bg-purple-950 rounded-sm"
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
    </div>
  );
};

export default Contact;
