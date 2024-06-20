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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .send(
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
    <div className="Contact w-full h-screen flex ">
      <div className="flex-1 flex flex-col p-4 md:p-10">
        {/* Adjusted padding */}
        <h1
          className="text-white text-6xl mt-40"
          style={{ fontFamily: "Playfair Display" }}
        >
          Get in touch
        </h1>
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
      <div className="flex-1 lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}>
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={null}></Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Contact;
