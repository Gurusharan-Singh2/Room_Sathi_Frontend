import React from "react";

const RoomCard = ({ room, toggleWishlist, isSaved, handleWhatsApp }) => {
  if (!room || typeof room !== "object") {
    console.warn("Invalid room:", room);
    return null;
  }
  const image =
    Array.isArray(room.image) && room.image.length > 0
      ? room.image[0]
      : room.image || "/fallback.jpg";
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
      <div className="relative">
        <img src={image} alt={room.title || "Room"} className="w-full h-52 object-cover"/>
        <button onClick={() => toggleWishlist(room)} className="absolute top-3 right-3 text-2xl" >
          {isSaved(room._id) ? "❤️" : "🤍"} </button>
        <span className="absolute bottom-3 left-3 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
          {room.status || "Available"} </span>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold"> {room.title || "No Title"} </h2>
        <p className="text-gray-600 text-sm mt-1"> {room.description || "No description"} </p>
        <p className="mt-3 text-lg font-semibold text-green-600">
          ₹{room.price || room.rent || 0} / month
        </p>
        <p className="text-sm text-gray-500 mt-1">
          📍 {room.address || "No address"}
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
          {room.services?.length > 0 ? (
            room.services.map((service, i) => (
              <span key={i}
                className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs">
                {service}
              </span>
            ))
          ) : (
            <span className="text-gray-400 text-xs">
              No services
            </span>
          )}
        </div>
        <div className="flex gap-2 mt-4">
          <button
            onClick={() => handleWhatsApp(room)}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg text-sm font-medium"
          >
            📲 WhatsApp
          </button>
          {room.phone && (
         <a href={`tel:${room.phone}`}
              className="flex-1 text-center bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg text-sm font-medium" >📞 Call  </a> )}
        </div>
      </div>
    </div>
  );
};
export default RoomCard;