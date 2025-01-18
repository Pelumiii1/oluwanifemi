import React from "react";
import creativePayImg from "../../public/creativePayImg.svg";
import Image from "next/image";
import number2 from "../../public/number2.svg";

const CreativePay = () => {
  return (
    <div className="flex mx-[4rem] min-w-[1300px] relative">
      <Image
        src={number2}
        alt="number"
        width={700}
        height={700}
        className="z-50 max-w-[30rem]"
      />
      <Image
        src={creativePayImg}
        alt="project"
        width={1000}
        height={550}
        className="ml-[-15rem]"
      />
    </div>
  );
};

export default CreativePay;
