"use client";

import { useState } from "react";

import Image from "next/image";
import React from "react";
import oluwanifemiPhoto from "../../public/photo1.svg";
import crownIcon from "../../public/icons/crownIcon.svg";
import MenuContent from "./menuContent";

const HomeBody = ({ isMenuClicked, setIsMenuClicked }: any) => {
  const [isFocused, setIsFocused] = useState(false);

  if (isMenuClicked) {
    return (
      <div>
        <MenuContent />
      </div>
    );
  }
  return (
    <div>
      <div className="flex items-end">
        <div className="w-1/2">
          <h1
            style={{
              fontFamily: "Neue Montreal",
              fontWeight: "500",
              fontSize: "100px",
              fontStyle: "italic",
              lineHeight: "141px",
            }}
            className="tracking-[-5px]"
          >
            OLUWANIFEMI OSUNSANYA
          </h1>
        </div>
        <div className="w-1/2 flex justify-center items-center relative cursor-pointer">
          <div className="absolute top-0 flex items-center justify-center mt-[-4rem] ml-[-12rem] z-50 rotate-41">
            <Image src={crownIcon} alt="" width={90} height={90} />
          </div>
          <Image
            src={oluwanifemiPhoto}
            alt="Oluwanifemi Osunsanya"
            width={300}
            height={300}
            onMouseEnter={() => setIsFocused(true)}
            onMouseOut={() => setIsFocused(false)}
            className={`${isFocused ? "scale-105" : "grayscale "} rotate-11`}
          />
        </div>
      </div>
      <p
        className="mt-6"
        style={{
          fontFamily: "Neue Montreal",
          fontWeight: "400",
          fontSize: "32px",
          lineHeight: "48px",
          color: "#A2A3A2",
        }}
      >
        Crafting digital experiences that deeply connect with users, I
        specialise in transforming complex challenges into intuitive and
        impactful solutions. The approach I employ seamlessly blends
        functionality with aesthetics, ensuring each design is both visually
        appealing and purpose-driven.
      </p>
    </div>
  );
};

export default HomeBody;
