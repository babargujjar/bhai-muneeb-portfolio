"use client";
import React, { useState } from "react";
import FadeUp from "../components/FadeUp";

const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Thanks for contacting Betelbee! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-white max-w-6xl mx-auto px-5">
      <div className="text-black flex flex-col items-center">
        <div className="pt-5 w-full grid md:grid-cols-2 gap-8">
          {/* Left Side - Company Info */}
          <FadeUp>
          <div className="text-black sm:p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-yellow-400">
              Get in Touch
            </h2>
            <p className="mb-6 text-gray-500">
              At Betelbee, we’re always open to new opportunities,
              collaborations, and conversations. Whether you’re looking for
              innovative solutions, creative insights, or just want to say hello
              we’re here for you 24/7.
            </p>

            {/* Pakistan Head Office */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-yellow-400">
                HEAD OFFICE (Pakistan)
              </h3>
              <p>13-C, Peoples Colony No 1, Faisalabad, Pakistan, 38000</p>
              <p>Phone: +92 3030768989</p>
              <p>Email: betelbee.official@gmail.com</p>
            </div>

            {/* UK Virtual Office */}
            <div>
              <h3 className="text-xl font-semibold text-yellow-400">
                REGIONAL HUB (UK)
              </h3>
              <p>31, Duddingston, Park South, Edinburgh, EH15 3NZ</p>
              <p>Phone: +44 7411272710</p>
              <p>Email: betelbee.official@gmail.com</p>
            </div>
          </div>
          </FadeUp>

          {/* Right Side - Contact Form */}
          <FadeUp>
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-black">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-semibold mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-yellow-400"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-yellow-400"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-yellow-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 text-black font-semibold py-2 rounded-lg transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          </FadeUp>
        </div>
        <FadeUp>
          <div className="p-8 flex md:flex-row flex-col gap-5 bg-black justify-between rounded-md border-gray-200 items-center w-full border mt-10">
            <div className="flex flex-col text-white gap-10 justify-between">
              <div className="w-full">
                <h2 className="text-3xl pb-2 w-full text-yellow-400">
                  Got a Project in Mind? Let’s <br /> Make It Happen.
                </h2>
                <p className="text-md">
                  Partner with Betelbee to get your digital <br /> marketing
                  done right with strategy, <br /> creativity, and results.
                </p>
              </div>
              <div className="text-md flex gap-4">
                <h2>
                  <span className="font-bold text-lg">2021</span> <br /> Founded
                  in
                </h2>
                <h2>
                  <span className="font-bold text-lg">3k+</span> <br />{" "}
                  eCommerce Stores <br /> Lounched
                </h2>
                <h2>
                  <span className="font-bold text-lg">20+</span> <br /> Offered
                  services
                </h2>
              </div>
            </div>
            <div className="md:w-1/2 w-full flex justify-center items-center">
              <img
                className=" h-[200px] rounded-lg"
                src={"/assets/contactimg.jpeg"}
                alt=""
              />
            </div>
          </div>
        </FadeUp>
      </div>
    </div>
  );
};

export default page;
