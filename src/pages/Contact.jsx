import React, { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import Footer from "../Components/footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="h-auto w-full mt-15 bg-Secondary flex flex-col items-center text-gray-800">
     
     
      <section className="w-full py-16 text-center bg-Secondary text-Font-dark">
        <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl">
          We'd love to hear from you! Reach out anytime — we're here to help.
        </p>
      </section>

      <section className="flex flex-wrap justify-center gap-10 py-12 px-8 w-full max-w-6xl">
      


        <div className="w-full md:w-[45%] bg-Secondary p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
          <h2 className="text-3xl font-semibold mb-6 text-Font-dark">
            Send us a message
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border rounded-xl p-3 focus:outline-none focus:border-fuchsia-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border rounded-xl p-3 focus:outline-none focus:border-fuchsia-500"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="border rounded-xl p-3 focus:outline-none focus:border-fuchsia-500"
            ></textarea>
            

            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-fuchsia-600 transition duration-300 w-full"
            >
              Send Message
            </button>
          </form>
        </div>


        <div className="w-full md:w-[40%] p-8 bg-Secondary rounded-2xl shadow-md hover:shadow-xl transition duration-300">
          <h2 className="text-3xl font-semibold mb-6 text-Font-dark">
            Get in touch
          </h2>

          <div className="space-y-5 text-lg">
            <p className="flex items-center gap-3">
              <Mail className="text-fuchsia-500" /> help@roommatefinder.com
            </p>
            <p className="flex items-center gap-3">
              <Phone className="text-fuchsia-500" /> +91 98765 43210
            </p>
            <p className="flex items-center gap-3">
              <MapPin className="text-fuchsia-500" /> Lucknow, Uttar Pradesh, India
            </p>
          </div>

          
          <div className="mt-10 text-center border-t pt-6">
            <h3 className="text-2xl font-semibold mb-4">💬 Live Chat With Us</h3>
            <p className="text-gray-600 mb-4">
              Need quick help? Chat with our support team in real-time.
            </p>
            <button className="flex items-center justify-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-fuchsia-600 transition duration-300 w-full">
              <MessageCircle className="w-6 h-6" />
              Start Live Chat
            </button>
            <p className="text-sm text-gray-500 mt-2">Available 9 AM – 10 PM</p>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Contact;
