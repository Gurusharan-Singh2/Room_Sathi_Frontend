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
      Object.entries(userInfo).forEach(([key, val]) => {
        if (val) formData.append(key, val);
      });
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
    mutationFn: () =>
      loginWithPasswordApi({ email: userInfo.email, password: userInfo.password }),
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
    if (isLogin) loginMutation.mutate();
    else if (isOtp) otpMutation.mutate();
    else registerMutation.mutate();
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          {isLogin ? "Welcome Back" : isOtp ? "Verify OTP" : "Create Account"}
        </h2>

        {!isOtp && (
          <div className="flex mb-6 bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setIsLogin(true)}
              className={`w-1/2 py-2 rounded-full transition-all ${
                isLogin ? "bg-blue-600 text-white shadow" : "text-gray-600"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`w-1/2 py-2 rounded-full transition-all ${
                !isLogin ? "bg-blue-600 text-white shadow" : "text-gray-600"
              }`}
            >
              Signup
            </button>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && !isOtp && (
            <>
              <input
                name="username"
                value={userInfo.username}
                onChange={handleInputChange}
                placeholder="Username"
                className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                name="image"
                type="file"
                onChange={handleInputChange}
                className="text-sm"
              />

              {imagePreview && (
                <img
                  src={imagePreview}
                  className="w-16 h-16 rounded-full object-cover mx-auto"
                />
              )}
            </>
          )}

          <input
            name="email"
            value={userInfo.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            name="password"
            type="password"
            value={userInfo.password}
            onChange={handleInputChange}
            placeholder="Password"
            className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          {isOtp && (
            <>
              <input
                name="otp"
                value={userInfo.otp}
                onChange={handleInputChange}
                placeholder="Enter OTP"
                className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <button
                type="button"
                onClick={resendOtp}
                disabled={otpCountdown > 0}
                className="text-sm text-blue-600 hover:underline"
              >
                {otpCountdown > 0
                  ? `Resend OTP in ${otpCountdown}s`
                  : "Resend OTP"}
              </button>
            </>
          )}

          {errorMsg && (
            <p className="text-red-500 text-sm text-center">{errorMsg}</p>
          )}

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
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
    </div>
  );
}

export default Login_Signup;