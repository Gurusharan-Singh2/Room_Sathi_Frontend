import React from "react";
import { Link } from "react-router-dom";

export default function RoomCard({ room }) {
  return (
    <div className="border rounded-lg shadow-md p-4 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{room.location}</h3>
      <p className="text-gray-600 mb-1">Rent: ₹{room.rent}</p>
      <p className="text-gray-500 text-sm mb-3">
        {room.description?.slice(0, 60)}...
      </p>
      <Link
        to={`/room/${room.id}`}
        className="bg-blue-600 text-white px-4 py-2 rounded inline-block"
      >
        View Details
      </Link>
    </div>
  );
}
