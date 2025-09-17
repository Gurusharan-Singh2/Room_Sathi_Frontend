import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import PostRoom from "../pages/PostRoom";
import SearchRoom from "../pages/SearchRoom";
import RoomDetails from "../pages/RoomDetails";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/post-room" element={<PostRoom />} />
      <Route path="/search-room" element={<SearchRoom />} />
      <Route path="/room/:id" element={<RoomDetails />} />
    </Routes>
  );
}
