"use client";

import React, { useState } from "react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // logic
    console.log(isLogin ? "Вход" : "Регистрация", formData);
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
    });
  };

  return (
    <main className="container mx-auto px-4 lg:px-10 py-6 lg:py-10">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-lg shadow-sm border border-zinc-200 p-8">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-serif text-zinc-900">
              {isLogin ? "Log in" : "Sign Up"}
            </h1>
            <p className="text-sm text-zinc-500 mt-2">
              {isLogin
                ? "Log in to your account to continue shopping"
                : "Register to place orders"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-zinc-700 mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full h-11 px-3 rounded border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#c2a592] focus:border-transparent"
                  required={!isLogin}
                />
              </div>
            )}

            <div>
              <label
                htmlFor="email"
                className="block text-sm text-zinc-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full h-11 px-3 rounded border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#c2a592] focus:border-transparent"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm text-zinc-700 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full h-11 px-3 rounded border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#c2a592] focus:border-transparent"
                required
              />
            </div>

            {!isLogin && (
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm text-zinc-700 mb-2"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full h-11 px-3 rounded border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#c2a592] focus:border-transparent"
                  required={!isLogin}
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full h-11 rounded cursor-pointer bg-[#c2a592] hover:bg-[#be9b84] text-white font-medium transition-colors"
            >
              {isLogin ? "Log in" : "Sign Up"}
            </button>
          </form>

          {isLogin && (
            <div className="text-center mt-4">
              <button className="text-sm text-[#c2a592] hover:underline">
                Forgot your password?
              </button>
            </div>
          )}

          <div className="text-center mt-6 pt-6 border-t border-zinc-200">
            <p className="text-sm text-zinc-600">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                onClick={toggleAuthMode}
                className="ml-1 text-[#c2a592] hover:underline font-medium cursor-pointer"
              >
                {isLogin ? "Sign Up" : "Log in"}
              </button>
            </p>
          </div>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-zinc-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-zinc-500">or</span>
              </div>
            </div>

            <div className="mt-4 space-y-3">
              <button className="w-full h-11 rounded border cursor-pointer border-zinc-200 hover:bg-zinc-50 flex items-center justify-center gap-3 text-sm">
                <span className="w-5 h-5 rounded-full">
                  <svg
                    viewBox="-3 0 262 262"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                        fill="#4285F4"
                      ></path>
                      <path
                        d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                        fill="#34A853"
                      ></path>
                      <path
                        d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                        fill="#FBBC05"
                      ></path>
                      <path
                        d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                        fill="#EB4335"
                      ></path>
                    </g>
                  </svg>
                </span>
                Continue with Google
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-xs text-zinc-500">
            By registering, you agree to{" "}
            <button className="text-[#c2a592] hover:underline">
              the terms of use
            </button>{" "}
            and{" "}
            <button className="text-[#c2a592] hover:underline">
              privacy policy
            </button>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Auth;
