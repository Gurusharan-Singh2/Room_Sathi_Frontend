import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import useAuthStore from "../Store/authStore";
import { registerUserApi, verifyOtpApi, loginWithPasswordApi } from "../../utils/apis";

function Login_Signup() {
  const navigate = useNavigate();
  const { login, isLoggedIn } = useAuthStore();

  const [isLogin, setIsLogin] = useState(false);
  const [isOtp, setIsOtp] = useState(false);
  const [otpCountdown, setOtpCountdown] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
    image: null,
    otp: "",
  });
  const [imagePreview, setImagePreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files) {
      const file = files[0];
      setUserInfo((prev) => ({ ...prev, image: file }));
      setImagePreview(file ? URL.createObjectURL(file) : null);
    } else {
      setUserInfo((prev) => ({ ...prev, [name]: value }));
    }
  };

  useEffect(() => {
    if (isLoggedIn()) navigate("/", { replace: true });
  }, [isLoggedIn]);

  const registerMutation = useMutation({
    mutationFn: () =>
      registerUserApi({
        username: userInfo.username,
        email: userInfo.email,
        password: userInfo.password,
      }),
    onSuccess: () => {
      setIsOtp(true);
      setOtpCountdown(60);
      setErrorMsg("");
    },
    onError: (error) => {
      setErrorMsg(error.response?.data?.message || error.message);
    },
  });

  const otpMutation = useMutation({
    mutationFn: () => {
      const formData = new FormData();
      formData.append("username", userInfo.username);
      formData.append("email", userInfo.email);
      formData.append("password", userInfo.password);
      formData.append("otp", userInfo.otp);
      if (userInfo.image) formData.append("image", userInfo.image);
      return verifyOtpApi(formData);
    },
    onSuccess: (data) => {
      login({ ...data.userInfo, token: data.token });
      navigate("/");
    },
    onError: (error) => {
      setErrorMsg(error.response?.data?.message || error.message);
    },
  });

  const loginMutation = useMutation({
    mutationFn: () => loginWithPasswordApi({ email: userInfo.email, password: userInfo.password }),
    onSuccess: (data) => {
      login({ ...data.userInfo, token: data.token });
      navigate("/");
    },
    onError: (error) => {
      setErrorMsg(error.response?.data?.message || error.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      loginMutation.mutate();
    } else if (isOtp) {
      otpMutation.mutate();
    } else {
      registerMutation.mutate();
    }
  };

  useEffect(() => {
    let timer;
    if (otpCountdown > 0) {
      timer = setInterval(() => setOtpCountdown((prev) => prev - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [otpCountdown]);

  const resendOtp = () => {
    if (otpCountdown === 0) registerMutation.mutate();
  };

  return (
    <div className="w-[430px] bg-white p-8 rounded-2xl shadow-lg">
      <div className="flex justify-center mb-4">
        <h2 className="text-3xl font-semibold">
          {isLogin ? "Login" : isOtp ? "Verify OTP" : "SignUp"}
        </h2>
      </div>

      {!isOtp && (
        <div className="relative flex h-12 mb-6 border border-gray-300 rounded-full overflow-hidden">
          <button
            onClick={() => setIsLogin(true)}
            className={`w-1/2 text-lg font-medium transition-all z-10 ${
              isLogin ? "text-white" : "text-black"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`w-1/2 text-lg font-medium transition-all z-10 ${
              !isLogin ? "text-black" : "text-black"
            }`}
          >
            Signup
          </button>
          <div className="absolute top-0 h-full w-1/2 rounded-full bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200"></div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {!isLogin && !isOtp && (
          <>
            <input
              name="username"
              value={userInfo.username}
              onChange={handleInputChange}
              className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400"
              placeholder="Enter Username"
              type="text"
            />
            <input
              name="image"
              onChange={handleInputChange}
              className="w-full p-2"
              type="file"
              accept="image/*"
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="w-20 h-20 rounded-full object-cover mt-2"
              />
            )}
          </>
        )}

        <input
          name="email"
          value={userInfo.email}
          onChange={handleInputChange}
          className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400"
          placeholder="Enter email"
          type="text"
        />
        <input
          name="password"
          value={userInfo.password}
          onChange={handleInputChange}
          className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400"
          placeholder="Enter password"
          type="password"
        />

        {isOtp && (
          <>
            <input
              name="otp"
              value={userInfo.otp}
              onChange={handleInputChange}
              className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400"
              placeholder="Enter OTP"
              type="text"
            />
            <button
              type="button"
              onClick={resendOtp}
              className="text-cyan-600 hover:underline mt-2"
              disabled={otpCountdown > 0}
            >
              {otpCountdown > 0 ? `Resend OTP in ${otpCountdown}s` : "Resend OTP"}
            </button>
          </>
        )}

        {errorMsg && (
          <p className="text-red-500 text-sm text-center">{errorMsg}</p>
        )}

        <button
          type="submit"
          className="w-full p-3 bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 text-white text-lg rounded-full hover:opacity-90 transition"
          disabled={
            registerMutation.isPending ||
            otpMutation.isPending ||
            loginMutation.isPending
          }
        >
          {registerMutation.isPending ||
          otpMutation.isPending ||
          loginMutation.isPending
            ? "Processing..."
            : isOtp
            ? "Verify OTP"
            : isLogin
            ? "Login"
            : "Signup"}
        </button>
      </form>
    </div>
  );
}

export default Login_Signup;
