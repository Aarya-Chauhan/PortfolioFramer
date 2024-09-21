import Photo from "@/components/Photo";
import Socials from "@/public/Socials";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <section className="h-full ">
      <div className="container mx-auto ">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="flex flex-col justify-center items-center text-center xl:text-left order-2 xl:order-none xl:block xl:justify-items-start xl:justify-start xl:pl-0">
            <span className="text-xl ">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />
              <span className="text-accent">Aarya Chauhan</span>
            </h1>
            <p className="max-w-[500px] mb-7 items-center justify-center text-white/80">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum,
              eum?
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8 mb-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-5 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6 "
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
            <Stats/>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0 ">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}
