import React, { useEffect, useState } from "react";
import { getrooms } from "../../utils/fetchapis";

const Showroom = () => {
  const [rooms, setRooms] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(saved);
  }, []);

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

  const isSaved = (id) => {
    return wishlist.some((item) => item._id === id);
  };

  // ✅ WhatsApp handler
  const handleWhatsApp = (room) => {
    if (!room.phone) {
      alert("Owner contact not available");
      return;
    }

    const message = encodeURIComponent(
      `Hi, I'm interested in your room: ${room.title} located at ${room.address}. Is it still available?`
    );

    window.open(`https://wa.me/${room.phone}?text=${message}`, "_blank");
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

                {/* ❤️ Wishlist */}
                <button
                  onClick={() => toggleWishlist(room)}
                  className="absolute top-3 right-3 text-2xl"
                >
                  {isSaved(room._id) ? "❤️" : "🤍"}
                </button>

                {/* Status */}
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

                <p className="mt-3 text-lg font-semibold text-green-600">
                  ₹{room.price} / month
                </p>

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

                {/* ✅ Buttons Section */}
                <div className="flex gap-2 mt-4">
                  {/* WhatsApp */}
                  <button
                    onClick={() => handleWhatsApp(room)}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg text-sm font-medium"
                  >
                    📲 WhatsApp
                  </button>

                  {/* Call Button (optional) */}
                  {room.phone && (
                    <a
                      href={`tel:${room.phone}`}
                      className="flex-1 text-center bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg text-sm font-medium"
                    >
                      📞 Call
                    </a>
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