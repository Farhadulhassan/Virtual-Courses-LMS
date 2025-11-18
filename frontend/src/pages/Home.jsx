// src/pages/Home.jsx
import React from "react";
import Nav from "../component/Nav";
import home from "../assets/home1.jpg";
import ai from "../assets/ai.png";
import ai1 from "../assets/SearchAi.png";
import Logos from "../component/Logos";
import { SiViaplay } from "react-icons/si";   // SAHI IMPORT
import { ExploreCourses } from "../component/ExploreCourses";
import CardPage from "../component/CardPage";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate()
  return (
    <div className="w-full overflow-hidden">
      <div className="w-full lg:h-[140vh] h-[70vh] relative">
        <Nav />
        <img
          src={home}
          alt="home img"
          className="object-cover md:object-fill w-[100%] lg:h-[100%] h-[50vh]"
        />

        {/* MAIN HEADING */}
        <span className="lg:text-[70px] absolute md:text-[40px] lg:top-[10%] top-[15%] w-[100%] flex items-center justify-center text-white font-bold text-[20px]">
          Grow Your Skills to Advance
        </span>

        <span className="lg:text-[70px] text-[20px] md:text-[40px] absolute lg:top-[18%] top-[20%] w-[100%] flex items-center justify-center text-white font-bold">
          Your Career path
        </span>

        {/* BUTTONS */}
        <div className="absolute lg:top-[30%] top-[75%] md:top-[80%] w-[100%] flex items-center justify-center gap-3 flex-wrap px-4">
          {/* View All Courses */}
          <button className="px-[20px] py-[10px] border-2 lg:border-white border-black lg:text-white text-black rounded-[10px] text-[18px] font-light flex gap-2 cursor-pointer items-center"onClick={()=>navigate("/allcourses")}>
            View All Courses
            <SiViaplay
              className="w-[30px] h-[30px]"
              style={{ fill: "currentColor" }}   // YE SAHI HAI
            />
          </button>

          {/* Search with AI */}
          <button className="px-[20px] py-[10px] lg:bg-white bg-black lg:text-black text-white rounded-[10px] text-[18px] font-light flex gap-2 cursor-pointer items-center justify-center">
            Search with Ai
            <img
              src={ai}
              alt="Ai"
              className="w-[30px] h-[30px] rounded-full hidden lg:block"
            />
            <img
              src={ai1}
              alt="Gemini"
              className="w-[30px] h-[35px] rounded-full lg:hidden"
            />
          </button>
        </div>

      </div>
       {/* LOGOS COMPONENT */}
      <Logos />
      <ExploreCourses/>
      <CardPage/>
    </div>
  );
}

export default Home;