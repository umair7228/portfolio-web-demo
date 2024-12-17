import Education from "@/components/home-content/education/Education";
import About from "./about/page";
import Home from "./home/page"
import Contact from "./contact/page";

export default function Page() {
  return (
    <main className=" flex flex-col items-center justify-center w-full overflow-x-hidden">
        <Home />
        <About />
        <Education />
        <Contact />
    </main>
  );
}
