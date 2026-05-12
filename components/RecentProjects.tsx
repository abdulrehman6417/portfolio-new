"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";

import { n8nProjects, projects } from "@/data";

const projectImageAspectRatios: Record<string, string> = {
  "/web-apps/shopxr-banner.png": "1904 / 861",
  "/web-apps/gamification-marketing.png": "1894 / 872",
  "/web-apps/portfolio.png": "1891 / 878",
  "/web-apps/bean-bag.png": "1889 / 871",
  "/web-apps/room.png": "1910 / 866",
  "/web-apps/shopify-gamification.png": "1916 / 856",
  "/web-apps/particle_effect.png": "1918 / 875",
  "/web-apps/talkify.png": "1906 / 869",
  "/web-apps/newsly.png": "1895 / 877",
  "/web-apps/gemini.png": "1915 / 871",
  "/web-apps/tms.png": "1904 / 861",
  "/web-apps/todo.png": "1904 / 861",
  "/n8n/resume-n8n.png": "1792 / 847",
};

const ProjectImageFrame = ({
  href,
  img,
  title,
}: {
  href?: string;
  img: string;
  title: string;
}) => {
  const [aspectRatio, setAspectRatio] = useState(
    projectImageAspectRatios[img] ?? "16 / 9",
  );

  useEffect(() => {
    setAspectRatio(projectImageAspectRatios[img] ?? "16 / 9");
  }, [img]);

  const className =
    "relative mb-10 block w-full overflow-hidden rounded-2xl border border-white/[0.1] bg-[#13162D]";

  const content = (
    <>
      <div
        className="absolute inset-0 opacity-40"
        style={{ backgroundColor: "#13162D" }}
      >
        <Image
          src="/bg.png"
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      <Image
        src={img}
        alt={title}
        fill
        className="z-10 object-contain object-center"
        sizes="(max-width: 1024px) 100vw, 50vw"
        onLoad={(event) => {
          const image = event.currentTarget;

          if (image.naturalWidth && image.naturalHeight) {
            setAspectRatio(`${image.naturalWidth} / ${image.naturalHeight}`);
          }
        }}
      />
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`${className} cursor-pointer`}
        style={{ aspectRatio }}
        aria-label={`Open ${title}`}
      >
        {content}
      </a>
    );
  }

  return (
    <div className={className} style={{ aspectRatio }}>
      {content}
    </div>
  );
};

const RecentProjects = () => {
  const [activeTab, setActiveTab] = useState<"web-apps" | "n8n">("web-apps");
  const visibleProjects = activeTab === "web-apps" ? projects : n8nProjects;
  const liveLinkLabel =
    activeTab === "n8n" ? "Live Preview" : "Check Live Site";

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
        {visibleProjects.map((item) => {
          const hasLiveLink = item.link.trim().length > 0;
          const githubLink =
            "githubLink" in item && typeof item.githubLink === "string"
              ? item.githubLink.trim()
              : "";

          return (
            <div className="flex w-full min-w-0" key={item.id}>
              <article className="flex h-full w-full flex-col rounded-2xl border border-white/[0.1] p-4 shadow-[0_8px_16px_rgb(0_0_0/0.4)] transition duration-200 hover:border-white/[0.2]">
                {hasLiveLink ? (
                  <ProjectImageFrame
                    href={item.link}
                    img={item.img}
                    title={item.title}
                  />
                ) : (
                  <ProjectImageFrame img={item.img} title={item.title} />
                )}

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="text-sm font-light leading-relaxed text-white-100 lg:text-lg lg:font-normal"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="mt-auto flex items-center justify-between gap-4 pt-7">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <Image
                          src={icon.startsWith("/") ? icon : `/${icon}`}
                          alt=""
                          width={40}
                          height={40}
                          className="h-full w-full p-2 object-contain"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    {hasLiveLink ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex cursor-pointer items-center text-purple transition-colors duration-200 hover:text-white lg:text-xl md:text-xs text-sm"
                      >
                        {liveLinkLabel}
                        <FaLocationArrow className="ms-3" />
                      </a>
                    ) : null}
                    {githubLink ? (
                      <a
                        href={githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex cursor-pointer items-center text-purple transition-colors duration-200 hover:text-white lg:text-xl md:text-xs text-sm"
                      >
                        View Source Code
                        <FaLocationArrow className="ms-3" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentProjects;
