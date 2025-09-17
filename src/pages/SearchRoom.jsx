import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SearchRoom() {
  const [search, setSearch] = useState("");
  const [maxRent, setMaxRent] = useState("");
  const [city, setCity] = useState("");

  const dummyRooms = [
    { id: 1, location: "Delhi", rent: 5000, description: "1BHK near Metro" },
    { id: 2, location: "Mumbai", rent: 8000, description: "PG in Bandra" },
    { id: 3, location: "Bangalore", rent: 7000, description: "2BHK near IT Park" },
    { id: 4, location: "Pune", rent: 6000, description: "Flat near college" },
    { id: 5, location: "Chennai", rent: 5500, description: "Shared room" },
    { id: 6, location: "Lucknow", rent: 4000, description: "Shared room" },

  ];
  

  const filteredRooms = dummyRooms.filter((room) => {
    return (
      room.location.toLowerCase().includes(search.toLowerCase()) &&
      (maxRent ? room.rent <= parseInt(maxRent) : true) &&
      (city ? room.location.toLowerCase() === city.toLowerCase() : true)
    );
  });

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">🔍 Search Rooms</h2>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <input
          type="text"
          placeholder="Search by location..."
          className="border p-3 rounded w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="border p-3 rounded w-full"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        >
          <option value="">All Cities</option>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Pune">Pune</option>
          <option value="Chennai">Chennai</option>
        </select>
        <input
          type="number"
          placeholder="Max Rent (₹)"
          className="border p-3 rounded w-full"
          value={maxRent}
          onChange={(e) => setMaxRent(e.target.value)}
        />
      </div>

      {/* Results */}
      {filteredRooms.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {room.location}
              </h3>
              <p className="text-gray-600 mb-2">{room.description}</p>
              <p className="text-green-600 font-bold mb-4">₹{room.rent} / month</p>
              <Link
                to={`/room/${room.id}`}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 text-center mt-10">No rooms found 🚫</p>
      )}
    </div>
  );
}
