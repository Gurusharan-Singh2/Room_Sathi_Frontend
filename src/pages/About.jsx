import React from "react";
import {
  Users,
  Home,
  Shield,
  Heart,
  ShieldCheck,
  Sparkles,
  Lock,
} from "lucide-react";
import Footer from "../Components/footer";
import { useNavigate } from "react-router-dom";


const About = () => {
  const navigate =useNavigate();
  return (
    <div className="bg-gray-50 w-full mt-16 text-gray-800">

      {/* HERO */}
      <section className="text-center py-16 px-6">
        <h1 className="text-5xl font-bold mb-4">
          Find Your Perfect <span className="text-blue-600">Room</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          We help thousands of people find safe, affordable, and verified rooms
          with ease. No stress. No confusion.
        </p>
      </section>

      {/* 📊 STATS */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 py-10 text-center">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-3xl font-bold text-blue-600">10K+</h2>
          <p className="text-gray-600">Happy Users</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-3xl font-bold text-green-600">5K+</h2>
          <p className="text-gray-600">Rooms Listed</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-3xl font-bold text-purple-600">20+</h2>
          <p className="text-gray-600">Cities Covered</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-3xl font-bold text-orange-500">98%</h2>
          <p className="text-gray-600">Satisfaction Rate</p>
        </div>
      </section>

      {/* 🌟 FEATURES */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <ShieldCheck className="w-10 h-10 text-green-600" />,
              title: "Verified Rooms",
              desc: "Every listing is verified to ensure safety and authenticity.",
            },
            {
              icon: <Sparkles className="w-10 h-10 text-yellow-500" />,
              title: "Smart Matching",
              desc: "Find rooms and roommates based on your preferences.",
            },
            {
              icon: <Lock className="w-10 h-10 text-blue-600" />,
              title: "Secure Platform",
              desc: "Your data is protected with industry-level security.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-xl hover:scale-105 transition"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🧭 HOW IT WORKS */}
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              step: "1",
              title: "Create Profile",
              desc: "Tell us about your preferences and needs.",
            },
            {
              step: "2",
              title: "Browse Rooms",
              desc: "Explore verified listings and connect instantly.",
            },
            {
              step: "3",
              title: "Move In",
              desc: "Finalize your perfect living space easily.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:scale-105 transition"
            >
              <div className="bg-blue-600 text-white w-10 h-10 mx-auto rounded-full flex items-center justify-center mb-3">
                {item.step}
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ❤️ VALUES */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          What We Believe
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              icon: <Users className="w-8 h-8 mx-auto" />,
              title: "Community",
            },
            {
              icon: <Home className="w-8 h-8 mx-auto" />,
              title: "Trust",
            },
            {
              icon: <Shield className="w-8 h-8 mx-auto" />,
              title: "Security",
            },
            {
              icon: <Heart className="w-8 h-8 mx-auto" />,
              title: "Care",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-purple-600 text-white p-6 rounded-xl text-center hover:bg-orange-500 transition"
            >
              {item.icon}
              <h3 className="mt-3 font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 🚀 CTA */}
      <section className="text-center py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">
          Start Your Journey Today
        </h2>

        <p className="text-gray-600 mb-6">
          Join thousands of users who found their perfect home with us.
        </p>

        <button onClick={()=>navigate("/")} className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:scale-105 hover:bg-blue-700 transition">
          Get Started
        </button>
      </section>

      <Footer />
    </div>
  );
};

export default About;