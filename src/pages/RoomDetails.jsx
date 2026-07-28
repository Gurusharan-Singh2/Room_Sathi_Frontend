import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchRoomById } from "../../utils/apis";

const RoomDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: room,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["room", id],
    queryFn: () => fetchRoomById(id),
    enabled: !!id,
  });

  const handleWhatsApp = () => {
    if (!room?.phone) {
      alert("Owner contact not available");
      return;
    }

    const message = encodeURIComponent(
      `Hi, I'm interested in your room: ${room.title} located at ${room.address}. Is it still available?`
    );

    window.open(`https://wa.me/${room.phone}?text=${message}`, "_blank");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen mt-20 flex items-center justify-center">
        <p className="text-gray-500">Loading room details...</p>
      </div>
    );
  }

  if (isError || !room) {
    return (
      <div className="min-h-screen mt-20 flex flex-col items-center justify-center gap-4">
        <p className="text-gray-500">Room not found.</p>
        <button
          onClick={() => navigate("/find-room")}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Back to listings
        </button>
      </div>
    );
  }

  const image =
    Array.isArray(room.image) && room.image.length > 0
      ? room.image[0]
      : room.image || "/fallback.jpg";

  return (
    <div className="min-h-screen mt-20 w-full bg-gradient-to-br from-gray-100 to-gray-200 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="relative">
          <img src={image} alt={room.title} className="w-full h-80 object-cover" />
          <span className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
            {room.status}
          </span>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <h1 className="text-3xl font-bold">{room.title}</h1>
            <p className="text-2xl font-semibold text-green-600 whitespace-nowrap">
              ₹{room.price} / month
            </p>
          </div>

          <p className="text-gray-500">📍 {room.address}</p>

          <p className="text-gray-700 leading-relaxed">{room.description}</p>

          {/* Services */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Services</h2>
            <div className="flex flex-wrap gap-2">
              {room.services?.length > 0 ? (
                room.services.map((service, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
                  >
                    {service}
                  </span>
                ))
              ) : (
                <span className="text-gray-400 text-sm">No services listed</span>
              )}
            </div>
          </div>

          {/* Contact */}
          <div className="flex gap-3 pt-4 border-t">
            <button
              onClick={handleWhatsApp}
              className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-medium"
            >
              📲 WhatsApp Owner
            </button>

            {room.phone && (
              <a
                href={`tel:${room.phone}`}
                className="flex-1 text-center bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium"
              >
                📞 Call Owner
              </a>
            )}
          </div>

          <button
            onClick={() => navigate("/find-room")}
            className="text-blue-600 hover:underline text-sm"
          >
            ← Back to listings
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
