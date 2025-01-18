import React from "react";
import twitterToAlterImg from "../../public/twitterToAlterImg.svg";
import Image from "next/image";
import number3 from "../../public/number3.svg";

const TwitterToAlter = () => {
  return (
    <div className="flex items-center gap-[3rem] mx-[4rem] min-w-[1200px] relative">
      <Image
        src={number3}
        alt="number"
        width={700}
        height={700}
        className="max-w-[30rem]"
      />
      <div>
        <Image src={twitterToAlterImg} alt="project" width={660} height={500} />
        <p className="text-[#A2A3A2] mt-8 leading-[30px] font-[600] text-[20px]">
          I had the privilege of designing a beautifully crafted wedding website
          that offered an intimate glimpse into the couple&apos;s love story,
          provided all essential wedding details, and created a space for guests
          to share and relive memories through photo sharing
        </p>
      </div>
      <div className="absolute left-[8rem] top-[4rem] flex h-full font-normal text-[24px] tracking-[-1px] w-[550px]">
        <div className=" mt-[5rem]">
          <h3 className="text-gray-200 mix-blend-difference text-[96px] font-[500] tracking-[-1px]">
            Twitter to Alter
          </h3>
        </div>
      </div>
    </div>
  );
};

export default TwitterToAlter;
