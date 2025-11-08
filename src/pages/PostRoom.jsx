import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Footer from "../Components/footer";
import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";



const PostRoom = () => {
  const [previewImages, setPreviewImages] = useState([]);
   const query=useQueryClient();

  const navigate=useNavigate();
  const postMutationfn=async(data)=>{
    console.log("x",data);
    
  
      // Create FormData
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("rent", data.rent);
      formData.append("type", data.type);
      formData.append("lat", data.lat);
      formData.append("lng", data.lng);
      formData.append("address", data.address);
       

      // Append multiple images
      for (let i = 0; i < data.pics.length; i++) {
        formData.append("images", data.pics[i]); // 'images' key matches backend
      }
      const response = await axios.post(
        "https://room-sathi-backend.onrender.com/api/room",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      
      

      return response.data
}


  const { register,handleSubmit, formState: { errors,isSubmitting }, watch } = useForm();


  const selectedFiles = watch("pics");

  // Handle image previews
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setPreviewImages(files.map((file) => URL.createObjectURL(file)));
  };
    const allData=watch();

   const postMutation = useMutation(
  
    {
          

    mutationFn: (data) => postMutationfn(data),
    onSuccess: (data) => {
      query.invalidateQueries({queryKey:["rooms"]})
  
    navigate("/");
   
    },
    onError: (error) => {
      setErrorMsg(error.response?.data?.message || error.message);
    },
  });


const onSubmit = (data) => {
  postMutation.mutate(data);
};

 

  return (
    <div className="bg-Secondary min-h-auto w-full pt-30">
      <div className="w-full max-w-3xl  mx-auto bg-Secondary rounded-2xl pb-10 shadow-md hover:shadow-xl transition duration-300">
        <h1 className="text-Font-dark w-full text-center text-5xl font-serif font-semibold pb-4">
          Post your <span className="text-purple-800">Room</span>
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center gap-4 px-6 py-4 mx-auto bg-Secondary shadow-2xl rounded-xl"
        >
          <input
            type="text"
            placeholder="Title"
            {...register("title", { required: true, maxLength: 50 })}
            className="border rounded-xl p-3 focus:outline-none focus:border-fuchsia-500 shadow"
          />
          {errors.title && <p className="text-red-500 text-sm">Title is required</p>}

          <input
            type="text"
            placeholder="Description"
            {...register("description", { required: true })}
            className="border rounded-xl p-3 focus:outline-none focus:border-fuchsia-500 shadow"
          />
          {errors.description && <p className="text-red-500 text-sm">Description is required</p>}

          <input
            type="text"
            placeholder="Rent"
            {...register("rent", { required: true })}
            className="border rounded-xl p-3 focus:outline-none focus:border-fuchsia-500 shadow"
          />
          {errors.rent && <p className="text-red-500 text-sm">Rent is required</p>}

          <select
            {...register("type", { required: true })}
            className="border rounded-xl p-3 focus:outline-none focus:border-fuchsia-500 shadow"
          >
            <option value="room_available">room_available</option>
            <option value="room_needed">room_needed</option>
          </select>
          {errors.type && <p className="text-red-500 text-sm">Type is required</p>}

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
          {errors.address && <p className="text-red-500 text-sm">Address is required</p>}

          <input
            type="file"
            multiple
            accept="image/*"
            {...register("pics", { required: true })}
            onChange={handleImageChange}
            className="border rounded-xl p-3 focus:outline-none focus:border-fuchsia-500"
          />
          {errors.pics && <p className="text-red-500 text-sm">Please upload room images</p>}

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
