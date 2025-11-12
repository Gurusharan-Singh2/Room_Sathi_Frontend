import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Footer from "../Components/footer";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {
  Wifi,
  Flame,
  Dumbbell,
  Waves,
  Snowflake,
  ShieldCheck,
  Coffee,
  Bath,
} from "lucide-react";

const PostRoom = () => {
  const [previewImages, setPreviewImages] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const query = useQueryClient();
  const navigate = useNavigate();

  // ✅ React Hook Form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const selected = watch("Services") || [];
  const selectedFiles = watch("pics");

  // ✅ Services list
  const services = [
    { id: "pool", label: "Swimming Pool", icon: <Waves className="w-5 h-5" /> },
    { id: "gym", label: "Gym", icon: <Dumbbell className="w-5 h-5" /> },
    { id: "ac", label: "Air Conditioner", icon: <Snowflake className="w-5 h-5" /> },
    { id: "wifi", label: "Wi-Fi", icon: <Wifi className="w-5 h-5" /> },
    { id: "heater", label: "Heater", icon: <Flame className="w-5 h-5" /> },
    { id: "security", label: "Security", icon: <ShieldCheck className="w-5 h-5" /> },
    { id: "coffee", label: "Cafeteria", icon: <Coffee className="w-5 h-5" /> },
    { id: "bath", label: "Attached Bath", icon: <Bath className="w-5 h-5" /> },
  ];

  // ✅ Handle Image Preview
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setPreviewImages(files.map((file) => URL.createObjectURL(file)));
  };

  // ✅ Cleanup preview URLs
  useEffect(() => {
    return () => previewImages.forEach((url) => URL.revokeObjectURL(url));
  }, [previewImages]);

  // ✅ Form Submit Function
  const postMutationfn = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("rent", data.rent);
    formData.append("type", data.type);
    formData.append("lat", data.lat);
    formData.append("lng", data.lng);
    formData.append("address", data.address);

    // Append selected services
    if (data.Services) {
      data.Services.forEach((s) => formData.append("Services", s));
    }

    // Append multiple images
    for (let i = 0; i < data.pics.length; i++) {
      formData.append("images", data.pics[i]);
    }

    const response = await axios.post(
      "https://room-sathi-backend.onrender.com/api/room",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    return response.data;
  };

  // ✅ Mutation
  const postMutation = useMutation({
    mutationFn: postMutationfn,
    onSuccess: () => {
      query.invalidateQueries({ queryKey: ["rooms"] });
      navigate("/");
    },
    onError: (error) => {
      setErrorMsg(error.response?.data?.message || error.message);
    },
  });

  // ✅ Submit Handler
  const onSubmit = (data) => {
    postMutation.mutate(data);
  };

  // ✅ UI
  return (
    <div className="bg-gray-50 min-h-screen w-full pt-20">
      <div className="w-full max-w-3xl mx-auto bg-gray-100 rounded-2xl pb-10 shadow-md hover:shadow-xl transition duration-300">
        <h1 className="text-Font-dark font-semibold w-full pt-3 text-center text-5xl pb-4">
          Post your <span className="text-purple-800">Room</span> For Rent
        </h1>
        <p className="w-full text-gray-500 text-center text-base font-serif pb-4">
          Fill out the details below to find the perfect roommate for your space
        </p>

        <div className="flex gap-3 justify-center mb-3">
          <button className="bg-orange-200 text-orange-500 rounded-2xl px-3 py-2">
            1. Details
          </button>
          <button className="bg-orange-200 text-orange-500 rounded-2xl px-3 py-2">
            2. Photos
          </button>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center gap-4 px-6 py-4 mx-auto bg-gray-100 shadow-2xl rounded-xl"
        >
          {/* Title */}
          <input
            type="text"
            placeholder="Listing Title"
            {...register("title", { required: true, maxLength: 50 })}
            className="border rounded-xl p-3 focus:outline-none focus:border-fuchsia-500 shadow"
          />
          {errors.title && <p className="text-red-500 text-sm">Title is required</p>}

          {/* Description */}
          <input
            type="text"
            placeholder="Description"
            {...register("description", { required: true })}
            className="border rounded-xl p-3 focus:outline-none focus:border-fuchsia-500 shadow"
          />
          {errors.description && (
            <p className="text-red-500 text-sm">Description is required</p>
          )}

          {/* Rent */}
          <input
            type="text"
            placeholder="Rent (per month)"
            {...register("rent", { required: true })}
            className="border rounded-xl p-3 focus:outline-none focus:border-fuchsia-500 shadow"
          />
          {errors.rent && <p className="text-red-500 text-sm">Rent is required</p>}

          {/* Type */}
          <select
            {...register("type", { required: true })}
            className="border rounded-xl p-3 focus:outline-none focus:border-fuchsia-500 shadow"
          >
            <option value="">Select Type</option>
            <option value="room_available">Private</option>
            <option value="room_needed">Shared</option>
          </select>
          {errors.type && <p className="text-red-500 text-sm">Type is required</p>}

          {/* Services Section */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-5">
              Available Services
            </h2>

            <div className="flex flex-wrap  sm:grid-cols-4 gap-4 ">
              {services.map((service) => {
                const isChecked = selected.includes(service.label);
                return (
                  <label
                    key={service.id}
                    htmlFor={service.id}
                    className={`flex items-center gap-3 border rounded-xl px-4 py-2 cursor-pointer transition 
                    ${
                      isChecked
                        ? "bg-blue-100 border-blue-500 shadow-sm"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <div
                      className={`p-2 rounded-full ${
                        isChecked
                          ? "bg-blue-500 text-white"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {service.icon}
                    </div>
                    <span className="text-gray-800 font-medium text-sm sm:text-base">
                      {service.label}
                    </span>
                    <input
                      type="checkbox"
                      id={service.id}
                      value={service.label}
                      className="ml-auto w-4 h-4 accent-blue-600"
                      {...register("Services")}
                    />
                  </label>
                );
              })}
            </div>
          </div>

          {/* Location Inputs */}
          <input
            type="text"
            placeholder="Latitude"
            {...register("lat", { required: true })}
            className="border rounded-xl p-3 focus:outline-none focus:border-fuchsia-500 shadow"
          />
          {errors.lat && <p className="text-red-500 text-sm">Latitude is required</p>}

          <input
            type="text"
            placeholder="Longitude"
            {...register("lng", { required: true })}
            className="border rounded-xl p-3 focus:outline-none focus:border-fuchsia-500 shadow"
          />
          {errors.lng && <p className="text-red-500 text-sm">Longitude is required</p>}

          <input
            type="text"
            placeholder="Address"
            {...register("address", { required: true })}
            className="border rounded-xl p-3 focus:outline-none focus:border-fuchsia-500 shadow"
          />
          {errors.address && (
            <p className="text-red-500 text-sm">Address is required</p>
          )}

          {/* Image Upload */}
          <input
            type="file"
            multiple
            accept="image/*"
            {...register("pics", { required: true })}
            onChange={handleImageChange}
            className="border rounded-xl p-3 focus:outline-none focus:border-fuchsia-500"
          />
          {errors.pics && (
            <p className="text-red-500 text-sm">Please upload room images</p>
          )}

          {/* Image Previews */}
          {previewImages.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-2">
              {previewImages.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`preview-${index}`}
                  className="w-24 h-24 object-cover rounded-lg border"
                />
              ))}
            </div>
          )}

          {/* Error Message */}
          {errorMsg && <p className="text-red-600 text-center">{errorMsg}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={postMutation.isPending}
            className="flex items-center justify-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-fuchsia-600 transition duration-300 w-full"
          >
            {postMutation.isPending ? "Posting..." : "Post Room"}
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default PostRoom;
