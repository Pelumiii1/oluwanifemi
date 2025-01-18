import Image from "next/image";
import Marquee from "react-fast-marquee";
import crownIcon from "../../../public/icons/crownIcon.svg";

export default function FooterScroll({
  isMenuClicked,
}: {
  isMenuClicked: boolean;
}) {
  return (
    <div className={`h-[5vh] ${isMenuClicked ? "opacity-20" : ""}`}>
      <Marquee
        gradient={false}
        speed={100}
        style={{
          fontFamily: "Neue Montreal",
          fontWeight: "500",
          fontStyle: "italic",
          fontSize: "150px",
          color: "#A2A3A2",
        }}
      >
        <Image src={crownIcon} alt="" width={90} height={90} />
        <h1 className="px-2">OLUWANIFEMI OSUNSANYA</h1>
      </Marquee>
    </div>
  );
}
