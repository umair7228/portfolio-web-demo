"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import umair from '../../../public/logo/trans-bg-hd.png';
import Hand from '../../../public/home-images/hand.png';
import { Download } from "lucide-react";
import { FaAws, FaReact, FaSnowflake } from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";
import { SiApachekafka, SiNextdotjs } from "react-icons/si";

export default function HomePage() {
  return (
    <section className="relative z-50 flex flex-col items-center justify-center w-full mt-10 lg:mt-12 2xl:mt-20 gap-3 overflow-x-hidden overflow-y-hidden">

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-center flex items-center justify-center gap-4 sm:gap-6 animate-hidden">
        <Image src={Hand} alt="Hand Emoji" className="w-8 sm:w-10 md:w-12 hidden md:block" />
        <div>
          Hello! I&#39;m 
          <span className="text-yellow-500"> Umair Nawaz</span>
        </div>
      </h1>

      {/* Subheading */}
      <h2 className="text-xl sm:text-2xl font-semibold animate-hidden text-center md:text-start">
        A Cloud Data Engineer | Frontend Developer
      </h2>

      {/* Description */}
      <p className="text-base sm:text-lg md:text-xl max-w-6xl tracking-wide text-center text-gray-300 leading-relaxed animate-hidden">
        With <span className="font-bold text-yellow-500 border border-yellow-800 bg-yellow-800/20 rounded-full px-4"> 1+ Year</span> Experience
      </p>

      {/* Buttons */}
      <div className="mt-6 sm:mt-8 flex gap-3 sm:gap-4">
        <Button className="bg-transparent text-yellow-500 hover:bg-yellow-500 hover:text-black text-lg sm:text-2xl px-4 sm:px-6 py-4 md:py-6 2xl:py-8 rounded-full border border-yellow-500 animate-left-to-right">
          <span className="flex items-center justify-center"><Download className="!w-5 !h-5 sm:!w-8 sm:!h-8" /></span>
          Resume
        </Button>
        <Button className="bg-yellow-500 text-black hover:bg-transparent hover:text-yellow-500 hover:border hover:border-yellow-500 text-lg sm:text-2xl px-4 sm:px-6 py-4 md:py-6 2xl:py-8 rounded-full animate-right-to-left">
          Hire Me
        </Button>
      </div>

      {/* Profile Image */}
      <div className="mt-16 sm:mt-20 animate-bottom-to-top">
        <div className="w-[200px] sm:w-[400px] md:w-[500px] h-auto overflow-hidden">
          <Image
            src={umair}
            alt="Umair"
            className="object-cover w-full"
          />
        </div>
      </div>

      {/* Tech Stack */}
      <div className="absolute top-[68%] sm:top-[60%] left-[3%] lg:left-[15%] 2xl:left-[25%] bg-white text-black flex justify-center items-center gap-1 md:gap-4 flex-wrap pl-2 sm:pl-3 pr-4 sm:pr-6 py-1 md:py-2 rounded-full animate-left-to-right">
        <FaAws className="text-yellow-500 w-6 h-6 md:w-10 sm:h-10" />
        <span className="text-sm sm:text-2xl font-semibold">AWS</span>
      </div>

      <div className="absolute top-[68%] sm:top-[60%] left-[55%] lg:left-[70%] 2xl:left-[60%] bg-white text-black flex justify-center items-center gap-1 md:gap-4 flex-wrap pl-2 sm:pl-3 pr-4 sm:pr-6 py-1 md:py-2 rounded-full animate-right-to-left">
        <FaSnowflake className="text-cyan-400 w-6 h-6 md:w-10 sm:h-10" />
        <span className="text-sm sm:text-2xl font-semibold">Snowflake</span>
      </div>

      <div className="absolute top-[80%] sm:top-[75%] left-[0%] lg:left-[8%] 2xl:left-[17%] bg-white text-black flex justify-center items-center gap-1 md:gap-4 flex-wrap pl-2 sm:pl-3 pr-4 sm:pr-6 py-1 md:py-2 rounded-full animate-left-to-right">
        <DiMsqlServer className="text-orange-700 w-6 h-6 md:w-10 sm:h-10" />
        <span className="text-sm sm:text-2xl font-semibold">SQL</span>
      </div>

      <div className="absolute top-[80%] sm:top-[75%] left-[67%] lg:left-[80%] 2xl:left-[70%] bg-white text-black flex justify-center items-center gap-1 md:gap-4 flex-wrap pl-2 sm:pl-3 pr-4 sm:pr-6 py-1 md:py-2 rounded-full animate-right-to-left">
        <SiApachekafka className="text-black w-6 h-6 md:w-10 sm:h-10" />
        <span className="text-sm sm:text-2xl font-semibold">Kafka</span>
      </div>

      <div className="absolute top-[93%] sm:top-[90%] left-[4%] lg:left-[10%] 2xl:left-[22%] bg-white text-black flex justify-center items-center gap-1 md:gap-4 flex-wrap pl-2 sm:pl-3 pr-4 sm:pr-6 py-1 md:py-2 rounded-full animate-left-to-right">
        <SiNextdotjs className="text-black w-6 h-6 md:w-10 sm:h-10" />
        <span className="text-sm sm:text-2xl font-semibold">Next.js</span>
      </div>

      <div className="absolute top-[93%] sm:top-[90%] left-[62%] lg:left-[77%] 2xl:left-[67%] bg-white text-black flex justify-center items-center gap-1 md:gap-4 flex-wrap pl-2 sm:pl-3 pr-4 sm:pr-6 py-1 md:py-2 rounded-full animate-right-to-left">
        <FaReact className="text-cyan-400 w-6 h-6 md:w-10 sm:h-10" />
        <span className="text-sm md:text-2xl font-semibold">React.js</span>
      </div>
    </section>
  );
}
