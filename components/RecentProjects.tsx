"use client";

import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";

import { n8nProjects, projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  const [activeTab, setActiveTab] = useState<"web-apps" | "n8n">("web-apps");
  const visibleProjects = activeTab === "web-apps" ? projects : n8nProjects;

  return (
    <div className="w-full py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      <div className="mt-10 flex items-center justify-center">
        <div className="flex rounded-lg border border-white/[.2] bg-black-200 p-1">
          <button
            type="button"
            onClick={() => setActiveTab("web-apps")}
            className={`rounded-lg px-5 py-2 text-sm font-medium transition duration-200 ${
              activeTab === "web-apps"
                ? "bg-[#161A31] text-purple"
                : "text-white"
            }`}
          >
            Web Apps
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("n8n")}
            className={`rounded-lg px-5 py-2 text-sm font-medium transition duration-200 ${
              activeTab === "n8n" ? "bg-[#161A31] text-purple" : "text-white"
            }`}
          >
            n8n
          </button>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-x-8 lg:gap-y-16 mt-10">
        {visibleProjects.map((item) => (
          <div
            className="h-[33rem] flex items-center justify-center w-full min-w-0"
            key={item.id}
          >
            <PinContainer
              title="/ui.aceternity.com"
              href="https://twitter.com/mannupaaji"
              containerClassName="w-full"
              className="w-full"
            >
              <div className="relative flex items-center justify-center w-full overflow-hidden h-60 lg:h-80 mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
