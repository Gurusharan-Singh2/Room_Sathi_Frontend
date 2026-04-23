
import React, { useState, useEffect } from "react";
import axios from "axios";

const PostRoom = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    status: "",
    address: "",
    services: [],
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const servicesList = [
    "Wifi",
    "Gym",
    "Parking",
    "AC",
    "Security",
    "Laundry",
  ];

  // input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // services toggle
  const handleServiceChange = (service) => {
    setFormData((prev) => {
      const exists = prev.services.includes(service);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== service)
          : [...prev.services, service],
      };
    });
  };

  // image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  // cleanup
  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  // submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setMessage("");

      const data = new FormData();

      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("price", formData.price);
      data.append("status", formData.status);
      data.append("address", formData.address);

      // ✅ FIXED SERVICES
      data.append("services", JSON.stringify(formData.services));

      // image
      data.append("image", image);

      const res = await axios.post(
        "http://localhost:3005/api/room",
        data
      );

      setMessage("✅ Room posted successfully");

      // reset
      setFormData({
        title: "",
        description: "",
        price: "",
        status: "",
        address: "",
        services: [],
      });
      setImage(null);
      setPreview(null);

    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || "❌ Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br mt-20 from-blue-50 to-gray-100 flex justify-center items-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-2xl p-6 w-full max-w-xl space-y-5"
      >
        <h2 className="text-2xl font-bold text-center">
          🏠 Post Your Room
        </h2>

        {/* Title */}
        <input
          type="text"
          name="title"
          placeholder="Room Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
          required
        />

        {/* Description */}
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
          required
        />

        {/* Price */}
        <input
          type="number"
          name="price"
          placeholder="Price (₹)"
          value={formData.price}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
          required
        />

        {/* Status */}
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
          required
        >
          <option value="">Select Type</option>
          <option value="Private">Private</option>
          <option value="Shared">Shared</option>
        </select>

        {/* Address */}
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
          required
        />

        {/* Services */}
        <div>
          <p className="font-semibold mb-2">✨ Services</p>
          <div className="grid grid-cols-2 gap-2">
            {servicesList.map((service) => (
              <label
                key={service}
                className="flex items-center gap-2 bg-gray-100 p-2 rounded-lg cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={formData.services.includes(service)}
                  onChange={() => handleServiceChange(service)}
                />
                {service}
              </label>
            ))}
          </div>
        </div>

        {/* Image */}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
        />

        {/* Preview */}
        {preview && (
          <img
            src={preview}
            alt="preview"
            className="w-full h-40 object-cover rounded-lg"
          />
        )}

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          {loading ? "Posting..." : "🚀 Post Room"}
        </button>

        {/* Message */}
        {message && (
          <p className="text-center text-sm mt-2">{message}</p>
        )}
      </form>
    </div>
  );
};

export default PostRoom;
