import Image from "next/image";
import React, { FC } from "react";
import menuBurger from "../../../public/icons/menu-burger.svg";
import cancelIcon from "../../../public/cancelIcon.svg";

type NavbarProps = {
  setIsMenuClicked: (value: boolean) => void;
  isMenuClicked: boolean;
};

const Navbar: FC<NavbarProps> = ({ setIsMenuClicked, isMenuClicked }) => {
  return (
    <div
      className="mt-[3rem] flex justify-between"
      style={{
        fontFamily: "Neue Montreal",
        fontWeight: "500",
        color: "#D9D9D9",
      }}
    >
      <div className="md:flex gap-8">
        <p className="text-[24px]">Oluwanifemi</p>
        <div className="hidden md:flex bg-black text-white text-[16px] rounded-[60px] flex items-center px-5">
          Product Designer | Software Designer
        </div>
      </div>
      <div>
        {isMenuClicked ? (
          <Image
            src={cancelIcon}
            width={30}
            height={30}
            alt="Cancel"
            className="cursor-pointer"
            onClick={() => setIsMenuClicked(false)}
          />
        ) : (
          <Image
            src={menuBurger}
            width={30}
            height={30}
            alt="Menu"
            className="cursor-pointer"
            onClick={() => setIsMenuClicked(true)}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
