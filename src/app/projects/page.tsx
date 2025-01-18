import Dabo from "@/components/Dabo";
import CreativePay from "@/components/creativePay";
import Motobills from "@/components/motobills";
import TwitterToAlter from "@/components/twitterToAlter";
import React from "react";

const Projects = () => {
  return (
    <div
      style={{
        fontFamily: "Neue Montreal",
      }}
    >
      <div className="h-[100vh] bg-[url('/projectsHeroBg.svg')] bg-cover bg-center flex items-end rounded-[22px] pb-[2rem] px-[4rem]">
        <h1 className="text-[#C4C4C4] text-[136px] uppercase leading-[163px] tracking-[-5px] font-medium">
          What <br /> have i done
        </h1>
      </div>
      <div className="mx-[4rem] mt-[5rem]">
        <div className="text-[#A2A3A2] font-normal text-[32px] text-center tracking-[-1px] leading-[48px]">
          <p>
            My work bridges creativity and purpose, delivering designs that are
            not only visually captivating but also highly functional. From
            crafting intuitive interfaces to designing systems that simplify
            complex workflows, I’ve had the privilege of solving real-world
            challenges through thoughtful, user-centered design.
          </p>

          <p className="pt-[3rem]">
            Each project I undertake reflects a deep commitment to understanding
            user needs, business goals, and aligning them to create impactful
            solutions.
          </p>
        </div>
      </div>
      <div className="flex max-h-100vh overflow-x-scroll my-[5rem] space-x-[5rem] scrollbar-hide">
        <Dabo />
        <CreativePay />
        <TwitterToAlter />
        <Motobills />
      </div>
    </div>
  );
};

export default Projects;
