import { Button } from "@/components/ui/button";
import logo from "../../../public/logo/circle-transpanrent.png";
import Image from "next/image";
import { CiMobile3 } from "react-icons/ci";

export default function AboutPage() {
  return (
    <section className="text-white py-16 sm:py-24 w-full overflow-x-hidden">
      {/* About Me Section */}
      <div>
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-14">
          <span className="text-yellow-500">About Me</span>
        </h2>

        {/* I Love Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 mb-12">
          <div className="flex flex-col gap-6 sm:gap-7">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-500 flex items-center gap-4 sm:gap-8">
              <Image src={logo} alt="Logo" className="w-12 h-12 sm:w-16 sm:h-16 object-cover" />
              <span className="ml-2">I Love</span>
            </h3>
            <div className="grid grid-cols-2 gap-2 md:gap-4">
              {[
                "📖 Books",
                "✈️ Travelling",
                "🏔 Mountains",
                "💰 Money",
              ].map((item) => (
                <span
                  key={item}
                  className=" bg-white text-[#549AF0] text-base lg:text-xl font-semibold px-4 xl:px-6 py-2 xl:py-4 rounded-full shadow-lg text-center"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Experience and Projects */}
          <div className="flex justify-center items-center gap-8 sm:gap-12">
            <div className="text-center">
              <h4 className="text-5xl lg:text-6xl 2xl:text-7xl font-bold bg-gradient-to-b from-yellow-500 to-slate-900 bg-clip-text text-transparent mb-2">
                1.2+
              </h4>
              <p className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold">
                Years <br /> Experience
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-5xl lg:text-6xl 2xl:text-7xl font-bold bg-gradient-to-b from-yellow-500 to-slate-900 bg-clip-text text-transparent mb-2">
                20+
              </h4>
              <p className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold">
                Project <br /> Completed
              </p>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-gray-900 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg">
          <p className="text-gray-300 leading-relaxed tracking-wide sm:tracking-wider text-base sm:text-lg md:text-xl">
            A passionate Front End Developer with a Master&apos;s in Computer Application and over{" "}
            <strong>3.9 years</strong> of experience in crafting captivating digital experiences.
            My expertise lies in leveraging cutting-edge technologies such as <strong>ReactJS</strong>,
            <strong> NextJS</strong>, Apollo GraphQL, Redux, React Query, and various UI frameworks
            including <strong>Material UI</strong>, <strong>SCSS</strong>, Tailwind CSS, Chakra UI,
            and Bootstrap. I take pride in my ability to design seamless user interfaces and
            components that align perfectly with the intended aesthetic, creating responsive websites
            that adapt gracefully to any device.
            My skill set also extends to proficient API integration, ensuring the seamless flow of
            data between the front end and back end. In addition, I am known for writing clean,
            well-structured code that not only functions flawlessly but also enhances the overall
            maintainability of projects. With a track record of contributing to well-known products
            like <strong>CricTracker</strong>, <strong>SportsBuzz</strong>, and <strong>Epiko Market</strong>,
            I am committed to pushing the boundaries of web development to deliver exceptional
            digital solutions.
          </p>
        </div>

        {/* Contact Button */}
        <div className="flex justify-center mt-8">
          <Button
            variant="outline"
            className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 bg-transparent hover:text-black text-lg sm:text-2xl font-semibold px-5 sm:px-6 py-6 sm:py-7 rounded-full flex items-center gap-2"
          >
            <CiMobile3 className="w-6 h-6 sm:!w-8 sm:!h-8" />
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
}
