'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <section className="py-20 bg-white text-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-8 text-teal-400">Contact Us</h2>
        <form
          className="max-w-4xl mx-auto space-y-6 bg-white shadow-lg p-8 rounded-xl"
          onSubmit={handleSubmit}
        >
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="peer w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <label
              htmlFor="name"
              className="absolute left-4 top-2 text-gray-600 text-sm transform scale-75 origin-[0] transition-all duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:scale-75 peer-focus:text-teal-500"
            >
              Name
            </label>
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="peer w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-2 text-gray-600 text-sm transform scale-75 origin-[0] transition-all duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:scale-75 peer-focus:text-teal-500"
            >
              Email
            </label>
          </div>

          <div className="relative">
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="peer w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <label
              htmlFor="company"
              className="absolute left-4 top-2 text-gray-600 text-sm transform scale-75 origin-[0] transition-all duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:scale-75 peer-focus:text-teal-500"
            >
              Company
            </label>
          </div>

          <div className="relative">
            <select
              name="licenseType"
              value={formData.licenseType}
              onChange={handleChange}
              required
              className="peer w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="">Select License Type</option>
              <option value="Microsoft">Microsoft</option>
              <option value="Adobe">Adobe</option>
              <option value="Autodesk">Autodesk</option>
            </select>
            <label
              htmlFor="licenseType"
              className="absolute left-4 top-2 text-gray-600 text-sm transform scale-75 origin-[0] transition-all duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:scale-75 peer-focus:text-teal-500"
            >
              License Type
            </label>
          </div>

          <div className="relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="peer w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <label
              htmlFor="message"
              className="absolute left-4 top-2 text-gray-600 text-sm transform scale-75 origin-[0] transition-all duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:scale-75 peer-focus:text-teal-500"
            >
              Message
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-500 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-teal-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
