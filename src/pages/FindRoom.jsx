import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Icons } from '../../utils/icon'



 import RoomCard from "../Components/RoomCard"; // Uncomment if you have this component
// import room from "../assets/room.jpg"; // Replace with your room image import

const FindRoom = () => {
  const [params, setParams] = useState({ lat: "", lng: "", radius: "" });

  // Fetch function using params
  const fetchRooms = async () => {
    const response = await axios.get("https://room-sathi-backend.onrender.com/api/room/", {
      params: {
        lat: params.lat || undefined,
        lng: params.lng || undefined,
        radius: params.radius || undefined,
      },
    });
    console.log("Response", response.data);
    return response.data;
  };

  // React Query Hook
  const {
    data: rooms,
    isFetching: loading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["rooms", params],
    queryFn: fetchRooms,
    enabled: false, // Prevent auto-fetch
    staleTime: 10 * 60 * 1000,
  });

  // Sample static data
  const sampleRooms = [
    {
      image: "/room1.jpg",
      title: "Private Room near me",
      description: "Explore listings and connect with compatible roommates",
      price: 500,
      status: "Private",
      services: ["Wifi", "Sun Deck", "Gym"],
    },
    {
      image: "/room2.jpg",
      title: "Shared Room near me",
      description: "Comfortable space with friendly roommates",
      price: 300,
      status: "Shared",
      services: ["Wifi", "Security", "Parking"],
    },
    {
      image: "/room3.jpg",
      title: "Studio Apartment near me",
      description: "Modern room setup with essential facilities",
      price: 700,
      status: "Studio",
      services: ["Wifi", "TV", "Swimming Pool"],
    },
  ];

  return (
    <div className="h-auto mt-5 bg-gray-100 p-8 md:p-16">
      <h1 className="text-3xl font-bold mb-4">Available Rooms</h1>

      {/* Input for query params */}
      <div className="flex flex-col md:flex-row gap-2 mb-4">
        <input
          type="text"
          placeholder="Latitude"
          value={params.lat}
          onChange={(e) => setParams({ ...params, lat: e.target.value })}
          className="border p-2 rounded w-full md:w-auto"
        />
        <input
          type="text"
          placeholder="Longitude"
          value={params.lng}
          onChange={(e) => setParams({ ...params, lng: e.target.value })}
          className="border p-2 rounded w-full md:w-auto"
        />
        <input
          type="text"
          placeholder="Radius (km)"
          value={params.radius}
          onChange={(e) => setParams({ ...params, radius: e.target.value })}
          className="border p-2 rounded w-full md:w-auto"
        />
        <button
          onClick={refetch}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Search
        </button>
      </div>

      {/* Loading & Error */}
      {loading && <p>Loading rooms...</p>}
      {isError && <p className="text-red-500">Something went wrong...</p>}

      {/* Static Sample Rooms */}
      <div className="flex flex-wrap justify-center gap-6 py-6">
        {sampleRooms.map((r, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow p-4 w-80 hover:scale-105 transition"
          >
            <img
              src={r.image}
              alt={r.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="font-bold text-xl mt-2">{r.title}</h2>
            <p className="text-gray-600">{r.description}</p>
            <p className="mt-1 font-semibold">₹{r.price} / month</p>
            <p className="text-sm text-gray-500">{r.status}</p>
            <div className="flex gap-2 mt-2 flex-wrap">
              {r.services.map((s, j) => (
                <span
                  key={j}
                  className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded-full"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* API Fetched Rooms */}
      {rooms && rooms.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {rooms.map((room, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4 flex flex-col gap-2">
              <h2 className="font-bold text-xl">{room.title}</h2>
              <p>{room.description}</p>
              <p>
                Rent: <span className="font-semibold">₹{room.rent}</span>
              </p>
              <p>Type: {room.type}</p>
              <p>Address: {room.address}</p>
              {room.images && room.images.length > 0 && (
                <div className="flex gap-2 overflow-x-auto mt-2">
                  {room.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`room-${i}`}
                      className="w-24 h-24 object-cover rounded"
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FindRoom;
