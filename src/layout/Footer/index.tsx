import Twitter from "@/icons/Twitter";
import Youtube from "@/icons/Youtube";
import Instagram from "@/icons/Instagram";
import { useRouter } from "next/router";

type Props = {};

export const MENU = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "OUR SERVICE",
    path: "/nfts",
  },
  {
    name: "ABOUT US ",
    path: "/collection",
  },
  {
    name: "TESTIMONIAL",
    path: "/mint",
  },
  {
    name: "BLOG",
    path: "/blog",
  },
  {
    name: "CONTACT US",
    path: "/contact",
  },
];

const Footer = (props: Props) => {
  const { asPath } = useRouter();
  return (
    <div className="w-full h-32 border-[#FFFFFF4F] bg-[#3D054A] border-t-2 flex flex-col justify-center items-center relative">
      <div className="w-10/12 flex justify-between items-center">
        <div className="uppercase text-5xl font-bold text-white">
          NFT-<span className="text-[#E05BFF]">H Chain</span>
        </div>
        <div className="flex justify-end items-center space-x-3"></div>
        <div className="flex justify-between items-center gap-2">
          <Instagram />
          <Twitter />
          <Youtube />
        </div>
      </div>
      <div className="w-10/12 flex justify-between absolute bottom-2">
        <div className="text-white text-sm">
          Privacy Policy Terms & Conditions Shipping Policy
        </div>
        <div className="text-white text-sm">
          © BY NFT-H Chain ALL RIGHT RESERVED 2023!
        </div>
        <div className="text-white text-sm">02 8338 8690 02 8338 9063</div>
      </div>
    </div>
  );
};

export default Footer;
