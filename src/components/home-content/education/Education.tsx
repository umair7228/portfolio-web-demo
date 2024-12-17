import { CalendarDays } from "lucide-react";
import { FaUserGraduate } from "react-icons/fa";

export default function Education() {
  return (
    <section className="text-white py-16 w-[80%]">
      {/* Education Section */}
      <div>
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-12">
          <span className="text-yellow-500">Education</span>
        </h2>

        {/* Education Cards */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 justify-center">
          {/* Bachelor's Degree */}
          <div className="relative bg-[#FFFFFFB3] bg-opacity-70 rounded-3xl p-6 md:p-8 shadow-lg w-full">
            {/* Header */}
            <div className=" flex flex-col md:flex-row lg:flex-col xl:flex-row items-start xl:items-center justify-between gap-4 mb-4">
              <span className="bg-black text-yellow-500 font-semibold px-4 sm:px-6 py-2 text-lg md:text-xl rounded-full flex items-center gap-3">
                <CalendarDays className="w-5 md:w-6 h-5 md:h-6" />
                2017 - 2020
              </span>
              <span className="bg-gray-100 text-black font-semibold px-4 sm:px-6 py-2 text-lg sm:text-xl rounded-full flex items-center">
                <FaUserGraduate className="w-5 sm:w-6 h-5 sm:h-6 text-slate-600" />
                Graduation
              </span>
            </div>
            {/* Content */}
            <div>
              <h3 className="text-lg md:text-lg xl:text-xl bg-white inline-block px-3 sm:px-4 py-2 rounded-full text-black font-bold mb-2">
                Bachelor&apos;s Degree
              </h3>
              <span className="text-lg md:text-lg xl:text-xl bg-white inline-block px-3 sm:px-4 py-2 rounded-full text-black font-bold mb-2 ml-2">
                BCA
              </span>
              <h4 className="text-2xl xl:text-3xl text-black font-bold mt-3 mb-3">
                Bachelor of Computer Applications
              </h4>
              <p className="text-black mt-2 flex items-center gap-2 font-semibold text-base md:text-lg xl:text-xl">
                <span className="bg-white rounded-full p-2 w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center">
                  🏫
                </span>
                Veer Narmad South Gujarat University
              </p>
              <p className="text-black flex items-center text-base md:text-lg xl:text-xl gap-2 mt-2 font-semibold">
                <span className="bg-white rounded-full p-2 w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center">
                  📍
                </span>
                Surat, Gujarat, India
              </p>
            </div>

            {/* Circle Shadow */}
            <div className="bg-yellow-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] sm:w-[30%] aspect-square rounded-full blur-lg -z-10"></div>
          </div>

          {/* Master's Degree */}
          <div className="relative bg-[#FFFFFFB3] bg-opacity-70 rounded-3xl p-6 md:p-8 shadow-lg w-full">
            {/* Header */}
            <div className=" flex flex-col md:flex-row lg:flex-col xl:flex-row items-start xl:items-center justify-between gap-4 mb-4">
              <span className="bg-black text-yellow-500 font-semibold px-4 sm:px-6 py-2 text-lg md:text-xl rounded-full flex items-center gap-3">
                <CalendarDays className="w-5 md:w-6 h-5 md:h-6" />
                2017 - 2020
              </span>
              <span className="bg-gray-100 text-black font-semibold px-4 sm:px-6 py-2 text-lg sm:text-xl rounded-full flex items-center">
                <FaUserGraduate className="w-5 sm:w-6 h-5 sm:h-6 text-slate-600" />
                Graduation
              </span>
            </div>
            {/* Content */}
            <div>
              <h3 className="text-lg md:text-lg xl:text-xl bg-white inline-block px-3 sm:px-4 py-2 rounded-full text-black font-bold mb-2">
                Bachelor&apos;s Degree
              </h3>
              <span className="text-lg md:text-lg xl:text-xl bg-white inline-block px-3 sm:px-4 py-2 rounded-full text-black font-bold mb-2 ml-2">
                BCA
              </span>
              <h4 className="text-2xl xl:text-3xl text-black font-bold mt-3 mb-3">
                Bachelor of Computer Applications
              </h4>
              <p className="text-black mt-2 flex items-center gap-2 font-semibold text-base md:text-lg xl:text-xl">
                <span className="bg-white rounded-full p-2 w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center">
                  🏫
                </span>
                Veer Narmad South Gujarat University
              </p>
              <p className="text-black flex items-center text-base md:text-lg xl:text-xl gap-2 mt-2 font-semibold">
                <span className="bg-white rounded-full p-2 w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center">
                  📍
                </span>
                Surat, Gujarat, India
              </p>
            </div>

            {/* Circle Shadow */}
            <div className="bg-yellow-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] sm:w-[30%] aspect-square rounded-full blur-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
