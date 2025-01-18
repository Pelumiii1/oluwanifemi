"use client";

import HomeBody from "@/components/homeBody";
import FooterScroll from "@/components/layout/footerScroll";
import Navbar from "@/components/layout/navbar";
import { useState } from "react";

export default function Home() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  return (
    <>
      <div className="px-[4rem] relative">
        <Navbar
          setIsMenuClicked={setIsMenuClicked}
          isMenuClicked={isMenuClicked}
        />
        <HomeBody isMenuClicked={isMenuClicked} />
      </div>
      <FooterScroll isMenuClicked={isMenuClicked} />
    </>
  );
}
