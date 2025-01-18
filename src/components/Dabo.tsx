import React from "react";
import daboImg from "../../public/projectCardImg.svg";
import Image from "next/image";
import number1 from "../../public/number1.svg";

const Dabo = () => {
  return (
    <div className="flex gap-[10rem] min-w-[1500px] mx-[4rem] relative">
      <Image
        src={number1}
        alt="number"
        width={320}
        height={1040}
        className="max-w-[20rem]"
      />
      <Image src={daboImg} alt="project" width={1000} height={550} />
      <div className="absolute mt-[5rem] left-[15rem] flex h-full font-normal text-[24px] tracking-[-1px] w-[550px]">
        <div className=" mt-[5rem]">
          <h3 className="text-gray-200 text-[96px] font-[500] tracking-[-1px]">
            Dabo
          </h3>
          <p className="text-[#1E1E1E] leading-[36px] ">
            I aimed to craft a digital platform that bridges the gap between
            access control providers and consumers by merging functionality with
            visual appeal.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dabo;
