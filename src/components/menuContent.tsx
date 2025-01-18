import React, { useState } from "react";
import image1 from "../../public/projectsHeroBg.svg";
import needHelp from "../../public/needHelpBgImg.svg";
import playgroundImg from "../../public/playgroundImg.svg";
import whoAmI from "../../public/whoAmI.svg";
import Link from "next/link";

const MenuContent = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoveredText, setHoveredText] = useState<null | string>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const links = [
    {
      text: "What have I done",
      href: "/projects",
      image: image1.src,
    },
    { text: "Who am I", href: "/who-am-i", image: whoAmI.src },
    {
      text: "My playground",
      href: "/my-playground",
      image: playgroundImg.src,
    },
    { text: "Need help?", href: "/need-help", image: needHelp.src },
  ];

  return (
    <div
      className="uppercase text-[#C4C4C4] relative"
      style={{
        fontFamily: "Neue Montreal",
        fontWeight: "500",
        fontSize: "120px",
      }}
    >
      {links.map(({ text, href, image }, index) => (
        <div
          key={index}
          className="cursor-pointer relative"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setHoveredText(text)}
          onMouseLeave={() => setHoveredText(null)}
        >
          <Link href={href} className="relative z-10">
            <p>{text}</p>
          </Link>
          {hoveredText === text && image && (
            <div
              className={`absolute w-[300px] h-[300px] bg-no-repeat bg-center bg-cover rotate-11 transition-opacity duration-[4000ms]`}
              style={{
                backgroundImage: `url(${image})`,
                top: position.y - 150,
                left: position.x - 100,
                pointerEvents: "none",
                zIndex: 1,
              }}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MenuContent;
