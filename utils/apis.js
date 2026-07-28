// api.js or SignupApi.js

import api from "./AxiosInstance";



 export const registerUserApi = async (data) => {
  const res = await api.post('/user/signup', data);
  return res.data;
};


export const verifyOtpApi = async (formData) => {
  const res =await api.post(
    "/user/verify-otp",
    formData,
    { headers: { "Content-Type": "multipart/form-data" } }
  );
  return res.data;
};

export const fetchProfile = async (userId) => {
  const response = await api.get(`/user/profile/${userId}`);

  return response.data.user;
};

export const updateUserInfoApi = async (data) => {
  const res = await api.post("/user/add-info", data);
  return res.data.user;
};

export const loginWithPasswordApi = async (data) => {
  const res = await api.post("/user/login", data);
  return res.data;
};

// ================= ROOMS =================

export const fetchRooms = async () => {
  const res = await api.get("/room");
  return res.data.rooms;
};

export const fetchRoomById = async (roomId) => {
  const res = await api.get(`/room/${roomId}`);
  return res.data.room;
};

export const searchRoomsApi = async ({ address = "", area = "", status = "" }) => {
  const res = await api.get("/rooms", {
    params: { address, area, status },
  });
  return res.data;
};

export const addRoomApi = async (formData) => {
  const res = await api.post("/room", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
};

