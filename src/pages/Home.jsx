import React, { useState } from "react";
import Footer from "../Components/footer";
import { Search, MapPin } from "lucide-react";
import room from "../assets/roompic.png";
import room2 from "../assets/room4.jpg";
import room3 from "../assets/room6.jpg";

import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [address, setAddress] = useState("");
  const [area, setArea] = useState("");
  const [status, setStatus] = useState("");

  const navigate = useNavigate();

  // 🌟 Featured Rooms
  const Rooms = [
    {
      image: room,
      title: "Modern Private Room",
      description: "Near Civil Lines, fully furnished",
      price: 6000,
      services: ["Wifi", "AC", "Laundry"],
      rating: 4.8,
    },
    {
      image: room2,
      title: "Affordable Sharing Room",
      description: "Budget friendly near university",
      price: 3500,
      services: ["Wifi", "Kitchen"],
      rating: 4.5,
    },
    {
      image: room3,
      title: "Luxury Studio Room",
      description: "Premium living with all amenities",
      price: 9000,
      services: ["Wifi", "AC", "Gym"],
      rating: 4.9,
    },
  ];

  // 🔍 SEARCH FUNCTION (FIXED)
  const handleSearch = () => {
    if (!address && !area && !status) {
      alert("Please select at least one filter");
      return;
    }

    const params = new URLSearchParams();

    if (address) params.append("address", address.toLowerCase());
    if (area) params.append("area", area.toLowerCase());
    if (status) params.append("status", status.toLowerCase());

    console.log("Search Params:", params.toString()); // debug

    navigate(`/find-rooms?${params.toString()}`);
  };

  return (
    <div className="bg-gray-50 w-full mt-20 flex flex-col items-center">

      {/* HERO SECTION */}
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center px-6 py-16 gap-10">
        
        {/* LEFT */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Find Your Perfect{" "}
            <span className="text-blue-600">Room</span> &{" "}
            <span className="text-blue-600">Roommate</span>
          </h1>

          <p className="text-gray-600">
            Discover affordable and verified rooms near you easily.
          </p>

          {/* SEARCH BOX */}
          <div className="bg-white shadow-lg rounded-2xl p-4 space-y-4">

            {/* AREA */}
            <div className="flex items-center bg-gray-100 rounded-xl px-3">
              <MapPin className="text-gray-500" />
              <input
                type="text"
                placeholder="Enter area (e.g. Civil Lines)"
                className="w-full p-2 bg-transparent outline-none"
                value={area}
                onChange={(e) => setArea(e.target.value)}
              />
            </div>

            {/* ADDRESS + STATUS */}
            <div className="flex gap-2">
              <select
                className="flex-1 bg-gray-100 rounded-xl p-2"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              >
                <option value="">Select City</option>
                <option value="lucknow">Lucknow</option>
                <option value="delhi">Delhi</option>
                <option value="mumbai">Mumbai</option>
              </select>

              <select
                className="flex-1 bg-gray-100 rounded-xl p-2"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="">Room Type</option>
                <option value="private">Private</option>
                <option value="sharing">Sharing</option>
              </select>
            </div>

            {/* BUTTON */}
            <button
              onClick={handleSearch}
              className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-xl transition duration-200"
            >
              <Search size={18} /> Search Rooms
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1">
          <img
            src={room}
            alt="room"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="text-center py-12 px-4">
        <h2 className="text-3xl font-semibold">
          Ready to Find Your Perfect Match?
        </h2>
        <p className="text-gray-600 mt-2">
          Join thousands of happy users
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={() => navigate("/post-room")}
            className="bg-blue-500 text-white px-6 py-2 rounded-xl hover:scale-105 transition"
          >
            Post Room
          </button>

          <button
            onClick={() => navigate("/find-room")}
            className="bg-gray-200 px-6 py-2 rounded-xl hover:bg-blue-500 hover:text-white transition"
          >
            Browse Listings
          </button>
        </div>
      </div>

      {/* 🌟 FEATURED ROOMS */}
      <div className="max-w-7xl w-full px-6 py-12">
        <h2 className="text-3xl font-bold mb-2 text-gray-900">
          Featured Rooms
        </h2>
        <p className="text-gray-500 mb-8">
          Handpicked rooms just for you
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {Rooms.map((r, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={r.image}
                  alt="room"
                  className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                <span className="absolute top-3 left-3 bg-yellow-400 text-xs px-3 py-1 rounded-full font-semibold">
                  ⭐ Featured
                </span>

                <div className="absolute bottom-3 right-3 bg-white px-3 py-1 rounded-xl shadow text-sm font-bold">
                  ₹{r.price}/month
                </div>
              </div>

              <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  {r.title}
                </h3>

                <p className="text-yellow-500 text-sm">
                  ⭐ {r.rating} Rating
                </p>

                <p className="text-sm text-gray-500">
                  {r.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {r.services.map((s, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-100 px-2 py-1 rounded-lg"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => navigate("/find-room")}
                  className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-xl transition"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => navigate("/find-room")}
            className="text-blue-600 font-semibold hover:underline"
          >
            View All Rooms →
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;