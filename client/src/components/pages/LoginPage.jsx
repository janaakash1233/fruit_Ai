import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [activeTab, setActiveTab] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "user@example.com" && password === "password123") {
      alert(`Logged in with Email: ${email}`);
      navigate("/home");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  const handleSignup = () => {
    if (email && password && password === confirmPassword) {
      alert(`Registered with Email: ${email}`);
      navigate("/home");
    } else if (password !== confirmPassword) {
      alert("Passwords do not match!");
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-yellow-50">
      <div className="bg-white border-2 border-gray-200 shadow-xl rounded-2xl grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center p-6 lg:p-12">
          <h2 className="text-2xl lg:text-4xl text-center mb-6">
            {activeTab === "login" ? "Login" : "Register"}
          </h2>
          <p className="text-center mb-6 text-gray-500 text-sm lg:text-base">
            {activeTab === "login"
              ? <>
                  By signing in you are agreeing to our
                  <a href="#" className="text-blue-500 hover:underline ml-1">
                    Terms and Privacy Policy
                  </a>
                </>
              : <>
                  By signing up, you agree to our
                  <a href="#" className="text-blue-500 hover:underline ml-1">
                    Terms and Privacy Policy
                  </a>
                </>}
          </p>

          <div className="flex items-center justify-center w-full">
            <div className="w-full">
              <div className="flex justify-center gap-8">
                <a
                  href="#"
                  className={`text-opacity-90 border-b-2 py-2 transition-all ${
                    activeTab === "login"
                      ? "text-blue-500 border-black font-semibold"
                      : "text-gray-400 border-transparent"
                  }`}
                  onClick={() => setActiveTab("login")}
                >
                  Login
                </a>
                <a
                  href="#"
                  className={`text-opacity-90 border-b-2 py-2 transition-all ${
                    activeTab === "register"
                      ? "text-blue-500 border-black font-semibold"
                      : "text-gray-400 border-transparent"
                  }`}
                  onClick={() => setActiveTab("register")}
                >
                  Register
                </a>
              </div>
              {activeTab === "login" && (
                <div className="flex flex-col gap-4 mt-8">
                  <input
                    placeholder="Email Address"
                    type="email"
                    className="border-b-2 focus:outline-none p-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    placeholder="Password"
                    type="password"
                    className="border-b-2 focus:outline-none p-2"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <div>
                      <input type="checkbox" className="mr-2" />
                      Remember me
                    </div>
                    <a href="#" className="text-blue-500 hover:underline">
                      Forgot Password?
                    </a>
                  </div>
                  <button
                    className="rounded p-2 bg-blue-500 text-white hover:bg-blue-600"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                  <div className="text-center mt-4">
                    <p className="text-gray-400">or connect with</p>
                    <div className="flex justify-center gap-4 mt-2">
                      <a
                        href="#"
                        className="text-gray-600 hover:text-blue-500"
                      >
                        <i className="fab fa-facebook-f fa-lg"></i>
                      </a>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-blue-500"
                      >
                        <i className="fab fa-instagram fa-lg"></i>
                      </a>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-blue-500"
                      >
                        <i className="fab fa-linkedin-in fa-lg"></i>
                      </a>
                    </div>
                    <div className="text-center mt-4">
                      <button className="rounded p-2 bg-blue-300 text-blue-700 hover:bg-gray-400">
                        <i className="fas fa-fingerprint fa-lg"></i>
                      </button>
                        <p className="text-gray-300 py-2">email-user@example.com && password-password123</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "register" && (
                <div className="flex flex-col gap-4 mt-8">
                  <input
                    placeholder="Email Address"
                    type="email"
                    className="border-b-2 focus:outline-none p-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    placeholder="Password"
                    type="password"
                    className="border-b-2 focus:outline-none p-2"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input
                    placeholder="Confirm Password"
                    type="password"
                    className="border-b-2 focus:outline-none p-2"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <button
                    className="rounded p-2 bg-blue-500 text-white hover:bg-blue-600"
                    onClick={handleSignup}
                  >
                    Register
                  </button>
                  <div className="text-center mt-4">
                    <p className="text-gray-400">or connect with</p>
                    <div className="flex justify-center gap-4 mt-2">
                      <a
                        href="#"
                        className="text-gray-600 hover:text-blue-500"
                      >
                        <i className="fab fa-facebook-f fa-lg"></i>
                      </a>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-blue-500"
                      >
                        <i className="fab fa-instagram fa-lg"></i>
                      </a>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-blue-500"
                      >
                        <i className="fab fa-linkedin-in fa-lg"></i>
                      </a>
                    </div>
                    <div className="text-center mt-4">
                      <button className="rounded p-2 bg-blue-300 text-blue-700 hover:bg-gray-400">
                        <i className="fas fa-fingerprint fa-lg"></i>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
