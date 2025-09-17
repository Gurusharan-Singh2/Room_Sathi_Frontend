import React, { useState } from "react";

export default function PostRoom() {
  const [roomData, setRoomData] = useState({
    location: "",
    rent: "",
    description: "",
  });

  const handleChange = (e) => {
    setRoomData({ ...roomData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Room posted:", roomData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md p-6 rounded w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Post a Room</h2>
        <input
          type="text"
          name="location"
          placeholder="Location"
          className="border p-2 w-full mb-3"
          value={roomData.location}
          onChange={handleChange}
        />
        <input
          type="number"
          name="rent"
          placeholder="Monthly Rent"
          className="border p-2 w-full mb-3"
          value={roomData.rent}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Room Description"
          className="border p-2 w-full mb-3"
          value={roomData.description}
          onChange={handleChange}
        />
        <button className="bg-blue-600 text-white w-full py-2 rounded">
          Post Room
        </button>
      </form>
    </div>
  );
}
