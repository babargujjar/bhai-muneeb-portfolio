"use client";
import React, { useState } from 'react'

const ContactForm = () => {
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
    <div className="bg-white p-8 rounded-lg border border-gray-200">
      <h2 className="text-3xl font-bold mb-6 text-black">Send Us a Message</h2>
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
  );
}

export default ContactForm