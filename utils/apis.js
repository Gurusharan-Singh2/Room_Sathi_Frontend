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
  const response = await api.post("/user/get-profile-url", { userId });
  
  return response.data.user;
};

export const loginWithPasswordApi = async (data) => {
  const res = await api.post("/user/login", data);
  return res.data;
};