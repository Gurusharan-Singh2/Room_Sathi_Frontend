
import React, { useEffect, useState } from "react";
import { getrooms } from "../../utils/fetchapis";

const Showroom = () => {
  const [rooms, setRooms] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(false);

  // ✅ Load wishlist from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(saved);
  }, []);

  // ✅ Fetch rooms
  useEffect(() => {
    const fetchRooms = async () => {
      setLoading(true);
      try {
        const data = await getrooms();
        setRooms(data?.rooms || []);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchRooms();
  }, []);

  // ❤️ Toggle wishlist
  const toggleWishlist = (room) => {
    let updated;

    const exists = wishlist.find((item) => item._id === room._id);

    if (exists) {
      updated = wishlist.filter((item) => item._id !== room._id);
    } else {
      updated = [...wishlist, room];
    }

    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  // ❤️ Check if saved
  const isSaved = (id) => {
    return wishlist.some((item) => item._id === id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br mt-20 w-full from-gray-100 to-gray-200 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        🏠 Available Rooms
      </h1>

      {loading && <p className="text-center">Loading...</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room) => {
          const image = room.image || "/fallback.jpg";

          return (
            <div
              key={room._id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={image}
                  alt={room.title}
                  className="w-full h-52 object-cover"
                />

                {/* ❤️ Wishlist button */}
                <button
                  onClick={() => toggleWishlist(room)}
                  className="absolute top-3 right-3 text-2xl"
                >
                  {isSaved(room._id) ? "❤️" : "🤍"}
                </button>

                {/* Status badge */}
                <span className="absolute bottom-3 left-3 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                  {room.status}
                </span>
              </div>

              {/* Content */}
              <div className="p-4">
                <h2 className="text-xl font-bold">{room.title}</h2>
                <p className="text-gray-600 text-sm mt-1">
                  {room.description}
                </p>

                {/* Price */}
                <p className="mt-3 text-lg font-semibold text-green-600">
                  ₹{room.price} / month
                </p>

                {/* Address */}
                <p className="text-sm text-gray-500 mt-1">
                  📍 {room.address}
                </p>

                {/* Services */}
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

      {/* Wishlist count */}
      <div className="fixed bottom-5 right-5 bg-black text-white px-4 py-2 rounded-full shadow-lg">
        ❤️ {wishlist.length}
      </div>
    </div>
  );
};

export default Showroom;

