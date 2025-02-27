import { useState } from "react";
import EyeIcon from "../assets/eye-solid.svg";
import EyeOffIcon from "../assets/eye-slash-solid.svg";
import googleIcon from "../assets/google-brands.svg";
import linkedinIcon from "../assets/linkedin-brands.svg";
import facebookIcon from "../assets/square-facebook-brands.svg";

export default function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="relative w-full max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden min-h-[400px]">
        <div className="flex flex-row md:flex-row relative w-full min-h-[400px]">
          {/* Sign In Form */}
          <div className={`w-full md:w-1/2 p-8  flex flex-col justify-center ${isSignUp ? "hidden" : "flex"}`}>
            <h1 className="text-2xl font-bold mb-4">Sign In</h1>
            <form className="mt-4">
              <div className="flex space-x-3 mb-4">
                <IconButton src={googleIcon} alt="Google"/>
                <IconButton src={facebookIcon} alt="Facebook"/>
                <IconButton src={linkedinIcon} alt="LinkedIn"/>
              </div>
              <span className="text-sm text-gray-600">or use your email</span>
              <input type="email" placeholder="Email" className="w-full p-2 border rounded mb-2" />
              {/* <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full p-2 border rounded mb-4 pr-10"
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <img src={EyeOffIcon} alt="Hide" className="w-5 h-5" /> : <img src={EyeIcon} alt="Show" className="w-5 h-5" />}
                </button>
              </div> */}
              <PasswordField/>
              {/* <a href="#" className="text-sm text-blue-500 block mb-2">Forgot your password?</a> */}
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg">Sign In</button>
            </form>
          </div>

          {/* Sign Up Form */}
          <div className={`w-full md:w-1/2 p-8  flex flex-col justify-center ${isSignUp ? "flex" : "hidden"}`}>
            <h1 className="text-2xl font-bold mb-4">Create Account</h1>
            <form className="mt-4">
              <div className="flex space-x-3 mb-4">
                {/* <a href="#" className="p-2 border border-black text-white rounded-full">
                  <img src={googleIcon} alt="Facebook" className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 border border-black text-white rounded-full">
                  <img src={facebookIcon} alt="Google" className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 border border-black text-white rounded-full">
                  <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5" />
                </a> */}
                <IconButton src={googleIcon} alt="Google"/>
                <IconButton src={facebookIcon} alt="Facebook"/>
                <IconButton src={linkedinIcon} alt="LinkedIn"/>
              </div>
              <span className="text-sm text-gray-600">or use your email</span>
              <input type="text" placeholder="Name" className="w-full p-2 border rounded mb-2" />
              <input type="email" placeholder="Email" className="w-full p-2 border rounded mb-2" />
              <PasswordField/>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg">Sign Up</button>
            </form>
          </div>

          {/* Overlay Container */}
          <div className="w-full md:w-1/2 flex items-center justify-center text-white text-center bg-gradient-to-r from-blue-700 to-blue-500 p-8 min-h-[400px]">
            <div>
              <h1 className="text-2xl font-bold mb-2">{isSignUp ? "Welcome Back!" : "Hello, Friend!"}</h1>
              <p className="text-sm mb-4">{isSignUp ? "To keep connected with us please login" : "Enter your details and start your journey with us"}</p>
              <button 
                onClick={() => setIsSignUp(!isSignUp)} 
                className="bg-white text-blue-600 px-4 py-2 rounded-lg"
              >
                {isSignUp ? "Sign In" : "Sign Up"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  function IconButton({ src, alt }) {
    return (
      <a href="#" className="p-2 border border-black rounded-full">
        <img src={src} alt={alt} className="w-5 h-5" />
      </a>
    );
  }
  function PasswordField() {
    const [showPassword, setShowPassword] = useState(false);
  
    return (
      <div className="relative w-full">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="w-full p-2 border rounded mb-4 pr-10"
        />
        <button
          type="button"
          className="absolute right-3 top-3 text-gray-600"
          onClick={() => setShowPassword(!showPassword)}
        >
          <img src={showPassword ? EyeOffIcon : EyeIcon} alt="Toggle Password" className="w-5 h-5" />
        </button>
        <a href="#" className="text-sm text-blue-500 block mb-2">Forgot your password?</a>
      </div>
      
    );
  }
}