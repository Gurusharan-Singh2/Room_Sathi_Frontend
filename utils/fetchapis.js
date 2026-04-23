 import axios from "axios";

export const getrooms = async () => {
  try {
    const res = await axios.get("http://localhost:3005/api/room"); // ✅ no space
    return res.data;
  } catch (error) {
    console.error(
      "Error in finding room:",
      error.response?.data || error.message
    );
    throw error;
  }
};