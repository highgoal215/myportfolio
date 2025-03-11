import { Social_Icons } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer: React.FC<{}> = () => {
  return (
    <div className=" container mx-auto 2xl pt-[50px] pb-8 ">
      <p className="text-gray-300 text-center text-lg">
        Created with ❤️ using Next.js
      </p>
    </div>
  );
};

export default Footer;
