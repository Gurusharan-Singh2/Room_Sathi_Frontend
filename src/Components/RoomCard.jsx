import React from "react";

const RoomCard = ({ room }) => {
  // ✅ HARD SAFETY CHECK (prevents crash 100%)
  if (!room || typeof room !== "object") {
    console.warn("RoomCard received invalid room:", room);
    return null;
  }

 const image =
  Array.isArray(room.image) && room.image.length > 0
    ? room.image[0]
    : "/fallback.jpg";  
    
  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-80">
      <img
        src={image}
        alt={room.title || "Room"}
        className="w-full h-48 object-cover rounded-lg"
      />

      <h2 className="font-bold text-xl mt-2">
        {room.title || "No Title"}
      </h2>

      <p className="text-gray-600">
        {room.description || "No description"}
      </p>

      <p className="mt-1 font-semibold">
        ₹{room.price || room.rent || 0} / month
      </p>

      <p className="text-sm text-gray-500">
        {room.type || "Unknown"}
      </p>

      {/* Services */}
      {Array.isArray(room.services) && room.services.length > 0 && (
        <div className="flex gap-2 mt-2 flex-wrap">
          {room.services.map((service, i) => (
            <span
              key={i}
              className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded-full"
            >
              {service}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default RoomCard;