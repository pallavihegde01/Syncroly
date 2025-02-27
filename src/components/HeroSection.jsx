import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-pink-200 min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-pink-300 border-b-2 border-black ">
        <img
          src="https://storage.googleapis.com/a1aa/image/sJ6jF-hl1B15okdDzqqlSLoBo1vmR_zyle-CmyBzzMg.jpg"//replace syncroly logo
          alt="Logo with text 'Sycroly'"
          className="rounded-full"
          width={50}
          height={50}
        />
        <nav className="flex space-x-4">
          <a href="#" className="text-black pt-2">
            Home
          </a>
          <a href="#" className="text-black pt-2">
            Features
          </a>
          <button
            onClick={() => navigate("/AuthForm")}
            className="px-4 py-2 bg-pink-200 border-2 border-black rounded-full text-black"
          >
            Get Started
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-col mt-12">
        <div className="relative flex justify-start h-75 bg-pink-200 overflow-hidden">
        {/* Oval Shape (Half Hidden on the Left) */}
          <div className="w-3xl h-75 bg-black rounded-full absolute left-[-250px] flex items-center pl-65">
            <p className="text-pink-100 text-3xl ">
              CAPTURE YOUR MEMORIES AND THOUGHTS IN ONE PLACE—THROUGH WRITING, PHOTOS, AND MORE!
            </p>
          </div>
        </div>
          <div className="relative flex justify-start h-75 bg-pink-200 overflow-hidden">
            <div className="w-3xl h-75 bg-black rounded-full absolute right-[-250px] flex flex-col justify-center items-center text-center pr-65 mt-3">
              <p className="mb-4 text-white text-3xl">
                  START <span className="font-bold">PRESERVING</span> YOUR MOMENTS TODAY.
              </p>
              <p className="mb-4 text-white text-2xl">
                JOIN US AND CREATE YOUR <span className="font-bold">EVERLASTING, PERSONAL</span> MEMORY VAULT.
              </p>
              <a
                href="#"
                className="px-6 py-2 bg-white text-black border-2 border-black rounded-full"
              >
                START HERE
              </a>
            </div>
          </div>
      </main>
  </div>
  );
};

export default HeroSection;
