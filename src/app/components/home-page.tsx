import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-[1200px] w-full">
      <div className="flex justify-center items-center py-6">
        <Image
          src="/images/logo1.jpg"
          alt="amazom-logo"
          width={400}
          height={400}
          className="w-300 h-300"
        />
      </div>
      <div className="flex flex-row justify-center items-center py-14 gap-20">
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/images/iphon14.jpeg"
            alt=""
            width={400}
            height={400}
            className="w-[200px] h-[100px]"
          />
          <Link href="" className="text-3xl py-4">
            Iphone 14 Pro Max (Dubia Edition)
          </Link>
          <p className="flex items-center justify-center text-center w-full font-light ">
            Enjoy The New 14 Pro max(Dubia Version) It has all amazing crystal
            features and also comes with free Delivery.This is also the Exact
            replica of the Original 14 pro max and it is being used worldwide as
            you wont differentiate it from the original
          </p>
          <Link
            href=""
            className="text-blue-500 hover:text-blue-700 text-lg font-semibold pt-8">
            Click to Order Now
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/images/iphone15.jpeg"
            alt=""
            width={400}
            height={400}
            className="w-[200px] h-[100px]"
          />
          <Link href="" className="text-3xl py-4 ">
            Iphone 15 Pro Max (Dubia Edition)
          </Link>
          <p className="flex items-center justify-center text-center w-full font-light">
            Enjoy The New 15 Pro max(Dubia Version) It has all amazing crystal
            features and also comes with free Delivery.This is also the Exact
            replica of the Original 15 pro max and it is being used worldwide as
            you wont differentiate it from the original
          </p>
          <Link
            href=""
            className="text-blue-500 hover:text-blue-700 text-lg font-semibold pt-8">
            Click to Order Now
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/images/cash-on-delivery.jpg "
          alt=""
          width={200}
          height={200}
          className="w-72 h-72"
        />
      </div>
    </div>
  );
}
