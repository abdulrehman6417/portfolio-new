"use client";

import Image from "next/image";

import { toolsAndFrameworks } from "@/data";

const ToolsFrameworks = () => {
  return (
    <section className="w-full py-20" id="tools">
      <h1 className="heading">
        A list of <span className="text-purple">Tools & Frameworks</span> I use
      </h1>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {toolsAndFrameworks.map((tool) => (
          <article
            key={tool.id}
            className="flex min-h-36 flex-col items-center justify-center rounded-2xl border border-white/[0.1] bg-[#13162D] p-5 text-center shadow-[0_8px_16px_rgb(0_0_0/0.4)] transition duration-200 hover:border-white/[0.2]"
          >
            <div className="relative h-14 w-14 md:h-16 md:w-16">
              <Image
                src={tool.img}
                alt={tool.name}
                fill
                className="object-contain"
                sizes="64px"
              />
            </div>
            <h2 className="mt-4 text-xs font-medium text-white-200 md:text-sm">
              {tool.name}
            </h2>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ToolsFrameworks;
