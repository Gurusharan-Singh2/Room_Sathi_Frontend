import React, { createContext, useState, useContext } from "react";

// Create Context
const RoomContext = createContext();

// Provider Component
export const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState([
    { id: 1, location: "Delhi", rent: 5000, description: "Near Metro Station" },
    { id: 2, location: "Mumbai", rent: 8000, description: "Sea view flat" },
  ]);

  // Add new room
  const addRoom = (roomData) => {
    const newRoom = { id: Date.now(), ...roomData };
    setRooms((prevRooms) => [...prevRooms, newRoom]);
    console.log("Room added:", newRoom);
  };

  // Get single room by ID
  const getRoomById = (id) => rooms.find((room) => room.id === parseInt(id));

  return (
    <RoomContext.Provider value={{ rooms, addRoom, getRoomById }}>
      {children}
    </RoomContext.Provider>
  );
};

// Custom hook for easy usage
export const useRooms = () => useContext(RoomContext);
