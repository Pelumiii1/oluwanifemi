import React from "react";
import motobillsImg from "../../public/motobillsImg.svg";
import Image from "next/image";
import number4 from "../../public/number4.svg";

const Motobills = () => {
  return (
    <div className="flex gap-[10rem] mx-[4rem] min-w-[1500px] relative">
      <Image
        src={number4}
        alt="number"
        width={700}
        height={700}
        className="max-w-[30rem]"
      />
      <Image src={motobillsImg} alt="project" width={1000} height={550} />
      <div className="absolute left-[14rem] top-[5rem] flex h-full font-normal text-[24px] tracking-[-1px] w-[550px]">
        <div className=" mt-[5rem]">
          <h3 className="text-gray-200 text-[96px] font-[500] tracking-[-1px]">
            Moto Bills
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

export default Motobills;
