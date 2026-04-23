import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const FindRoom = () => {
  const location = useLocation();

  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  const queryParams = new URLSearchParams(location.search);

  const address = queryParams.get("address") || "";
  const area = queryParams.get("area") || "";
  const status = queryParams.get("status") || "";

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        setLoading(true);

        console.log("Sending Query:", { address, area, status }); // 🔍 DEBUG

        const res = await axios.get(
          `http://localhost:3005/api/rooms?address=${address}&area=${area}&status=${status}`
        );

        console.log("Response:", res.data);

        setRooms(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, [address, area, status]);

  return (
  <div className="min-h-screen bg-gradient-to-br mt-20 w-full from-gray-100 to-gray-200 p-6">
  
  <h1 className="text-3xl font-bold mb-6 text-center">
    🏠 Available Rooms in Ypur Area
  </h1>

  {/* 🔄 Loading */}
  {loading && <p className="text-center">Loading...</p>}

  {/* ❌ No Rooms */}
  {!loading && rooms.length === 0 && (
    <p className="text-center text-red-500 font-semibold">
      ❌ No rooms found
    </p>
  )}

  {/* ✅ Rooms Grid */}
  {!loading && rooms.length > 0 && (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {rooms.map((room) => {
        const image = room.image || "/fallback.jpg";

        return (
          <div
            key={room._id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
          >
            {/* 🖼 Image */}
            <div className="relative">
              <img
                src={image}
                alt={room.title}
                className="w-full h-52 object-cover"
              />
{/* 
              ❤️ Wishlist button
              <button
                onClick={() => toggleWishlist(room)}
                className="absolute top-3 right-3 text-2xl"
              >
                {isSaved(room._id) ? "❤️" : "🤍"}
              </button> */}

              {/* 🏷 Status */}
              <span className="absolute bottom-3 left-3 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                {room.status}
              </span>
            </div>

            {/* 📄 Content */}
            <div className="p-4">
              <h2 className="text-xl font-bold">{room.title}</h2>

              <p className="text-gray-600 text-sm mt-1">
                {room.description || "No description"}
              </p>

              {/* 💰 Price */}
              <p className="mt-3 text-lg font-semibold text-green-600">
                ₹{room.price} / month
              </p>

              {/* 📍 Address */}
              <p className="text-sm text-gray-500 mt-1">
                📍 {room.address || "Location not available"}
              </p>

              {/* 🧩 Services */}
              <div className="flex flex-wrap gap-2 mt-3">
                {room.services?.length > 0 ? (
                  room.services.map((service, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs"
                    >
                      {service}
                    </span>
                  ))
                ) : (
                  <span className="text-gray-400 text-xs">
                    No services
                  </span>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  )}

  {/* ❤️ Wishlist Count */}
  {/* <div className="fixed bottom-5 right-5 bg-black text-white px-4 py-2 rounded-full shadow-lg">
    ❤️ {wishlist.length}
  </div> */}
</div>
  );
};

export default FindRoom;