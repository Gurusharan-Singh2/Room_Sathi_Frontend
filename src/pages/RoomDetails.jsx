import React from "react";
import { useParams } from "react-router-dom";

export default function RoomDetails() {
  const { id } = useParams();

  // Temporary dummy data (later replace with API call)
  const room = {
    id,
    location: "Delhi",
    rent: 5000,
    description: "Spacious room with balcony and Wi-Fi.",
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-2">Room Details</h2>
      <p><strong>Location:</strong> {room.location}</p>
      <p><strong>Rent:</strong> ₹{room.rent}</p>
      <p><strong>Description:</strong> {room.description}</p>
    </div>
  );
}
