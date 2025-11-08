import React, { useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const FindRoom = () => {

  const [params, setParams] = useState({ lat: "", lng: "", radius: "" });

 

      const{data:rooms,isFetching:loading,isError}=useQuery({
        queryKey:["rooms"],
        queryFn:async()=>{
 const response = await axios.get("https://room-sathi-backend.onrender.com/api/room/", {
        params: {
          lat: params.lat,
          lng: params.lng,
          radius: params.radius,
        },
      });
      console.log("Response",response);
      
      return response.data;
        },
          staleTime: 10 * 60 * 1000,
      })

      


  return (
    <div className="h-auto mt-5  bg-gray-100 p-16">
      <h1 className="text-3xl font-bold mb-4">Available Rooms</h1>

      {/* Input for query params */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Latitude"
          value={params.lat}
          onChange={(e) => setParams({ ...params, lat: e.target.value })}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Longitude"
          value={params.lng}
          onChange={(e) => setParams({ ...params, lng: e.target.value })}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Radius"
          value={params.radius}
          onChange={(e) => setParams({ ...params, radius: e.target.value })}
          className="border p-2 rounded"
        />
        
      </div>

      {/* Loading & Error */}
      {loading && <p>Loading rooms...</p>}
      {isError && <p className="text-red-500">Something went wrong ..... </p>}

      {/* Rooms List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {rooms?.map((room, index) => (
          <div
            key={index}
            className=" rounded-lg shadow p-4 flex flex-col gap-2"
          >
            <h2 className="font-bold text-xl">{room.title}</h2>
            <p>{room.description}</p>
            <p>
              Rent: <span className="font-semibold">{room.rent}</span>
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
    </div>
  );
};

export default FindRoom;
