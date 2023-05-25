import Link from "next/link";
import React from "react";
import Header from "@/components/Header";
import { RxArrowTopRight } from "react-icons/rx";

const style = {
  wrapper: `w-full h-screen`,
  ctaBanner: `flex justify-center bg-gray-100 m-20 p-20 rounded-3xl`,
  heading: `text-5xl font-bold text-left mt-10`,
  paragraph: `text-xl mt-4`,
  newDriverContainer: `relative bg-black text-white rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer w-80 m-4 h-48 text-left text-xl`,
  existingDriverContainer: `relative bg-gray-100 text-black border-2 hover:scale-105 transition-all duration-300 border-black rounded-2xl cursor-pointer w-80 m-4 h-48 text-left text-xl`,
  linkText: `absolute bottom-6 flex left-6`,
  linkIcon: `absolute left-28 text-2xl bottom-0`,
};

export default function driver() {
  return (
    <div className={style.wrapper}>
      <Header />
      <div className={style.ctaBanner}>
        <div>
          <h2 className={style.heading}>Welcome Mr. Driver</h2>
          <p className={style.paragraph}>
            We wish you have a best and safe trip.
          </p>
        </div>
        <Link target="_blank" href="https://forms.gle/THJ9cHKkvYv4fTyu6">
          <div className={style.newDriverContainer}>
            <div className={style.linkText}>
              I am a<br /> New Driver
              <RxArrowTopRight className={style.linkIcon} />
            </div>
          </div>
        </Link>
        <Link href="https://rideshare.sanity.studio/">
          <div className={style.existingDriverContainer}>
            <div className={style.linkText}>
              I am a<br /> Existing One
              <RxArrowTopRight className={style.linkIcon} />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
