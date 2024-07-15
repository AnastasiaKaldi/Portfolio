/* eslint-disable react/no-unknown-property */
import React, { useState, useRef, Suspense } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber"; // Correct named import for Canvas
import Dog from "./Dog.jsx";
import gmail from "../src/assets/gmail.webp";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
    <div className="Contact w-full h-screen flex">
      <div className="flex-1 flex flex-col p-3 md:p-10">
        <div className="flex items-center space-x-14">
          <h1
            className="text-white text-6xl"
            style={{ fontFamily: "Playfair Display" }}
          >
            Get in touch
          </h1>
          <div className="flex items-center space-x-8">
            <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg hover:bg-gray-300 transition duration-300 transform hover:-translate-y-1 hover:scale-110">
              <img src={gmail} alt="Gmail" className="w-8 h-8" />
            </div>
            <a
              href="https://www.linkedin.com/in/anastasia-kaldi-3685691b8/"
              className="button-link"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg hover:bg-gray-300 transition duration-300 transform hover:-translate-y-1 hover:scale-110">
                <FaLinkedin className="text-2xl text-blue-500" />
              </div>
            </a>
            <a href="https://github.com/anastasiakaldi" className="button-link">
              <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg hover:bg-gray-300 transition duration-300 transform hover:-translate-y-1 hover:scale-110">
                <FaGithub className="text-2xl text-black" />
              </div>
            </a>
          </div>
        </div>
        <form
          className="w-full flex flex-col text-white gap-7 mt-10"
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
            className="btn w-full h-12 mt-8 text-white bg-purple-950 rounded-sm"
            style={{ fontFamily: "Playfair Display" }}
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[500px] h-[200px]">
        <Canvas camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}>
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={null}></Suspense>

          <Dog />
        </Canvas>
      </div>
    </div>
  );
};

export default Contact;
