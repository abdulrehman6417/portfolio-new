export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I prioritize clean, maintainable code and seamless user experience.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Flexible with time zone communications & remote setups.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I'm constantly improving",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Frontend developer exploring the edge of AI automation.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title:
      "Currently building AI-powered n8n automation workflows for real business use cases.",
    description: "Automating processes",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "ShopXR Marketing Website",
    des: "Professional marketing website built for a Shopify SaaS product at ShopXR Pte Ltd. Developed from scratch using Next.js and Tailwind CSS. Currently under NDA.",
    img: "/web-apps/shopxr-banner.png",
    iconLists: [
      "/tools_frameworks/next.svg",
      "/tools_frameworks/tail.svg",
      "/tools_frameworks/ts.svg",
    ],
    link: "",
  },
  {
    id: 2,
    title: "Personal Developer Portfolio",
    des: "My own portfolio website, built with Next.js, Three.js, and Framer Motion. Features a 3D interactive globe, animated UI components, Lottie animations.",
    img: "/web-apps/portfolio.png",
    iconLists: [
      "/tools_frameworks/next.svg",
      "/tools_frameworks/three.svg",
      "/tools_frameworks/ts.svg",
      "/tools_frameworks/fm.svg",
      "/tools_frameworks/lottie.svg",
      "/tools_frameworks/tail.svg",
    ],
    link: "",
    githubLink: "https://github.com/abdulrehman6417/portfolio-new",
  },
  {
    id: 3,
    title: "3D Bean Bag Configurator",
    des: "A real-time 3D product configurator with AR view that lets customers visualize and customize a bean bag in their own space before purchasing.",
    img: "/web-apps/bean-bag.png",
    iconLists: [
      "/tools_frameworks/re.svg",
      "/tools_frameworks/three.svg",
      "/tools_frameworks/js.svg",
    ],
    link: "https://doob.shopxr.org/",
  },
  {
    id: 4,
    title: "3D Virtual Room Showcase",
    des: "An interactive 3D room experience with 360-degree navigation and real-time flooring texture swapping.",
    img: "/web-apps/room.png",
    iconLists: [
      "/tools_frameworks/re.svg",
      "/tools_frameworks/three.svg",
      "/tools_frameworks/js.svg",
    ],
    link: "https://showcases.shopxr.org/",
  },
  {
    id: 5,
    title: "Shopify App Frontend — ShopXR",
    des: "Frontend development for a Shopify app built at ShopXR Pte Ltd. Developed using React, TypeScript, and Shopify Polaris. Currently under NDA",
    img: "/web-apps/shopxr-banner.png",
    iconLists: [
      "/tools_frameworks/re.svg",
      "/tools_frameworks/ts.svg",
      "/tools_frameworks/shopify.svg",
    ],
    link: "",
  },
  {
    id: 6,
    title: "3D Particle Effects Library",
    des: "A reusable library of 11 configurable 3D particle effects: bubbles, fire, confetti, matrix rain, fireworks, and more, used across multiple ShopXR products.",
    img: "/web-apps/particle_effect.png",
    iconLists: [
      "/tools_frameworks/re.svg",
      "/tools_frameworks/three.svg",
      "/tools_frameworks/js.svg",
    ],
    link: "",
  },
  {
    id: 7,
    title: "Talkify — Real-Time Chat App",
    des: "A real-time messaging app where you can add friends and chat instantly, with Firebase-backed live sync and authentication.",
    img: "/web-apps/talkify.png",
    iconLists: [
      "/tools_frameworks/re.svg",
      "/tools_frameworks/firebase.svg",
      "/tools_frameworks/js.svg",
      "/tools_frameworks/tail.svg",
    ],
    link: "https://abdulrehman-talkify.netlify.app/",
    githubLink: "https://github.com/abdulrehman6417/talkify",
  },
  {
    id: 8,
    title: "Newsly - Global News App",
    des: "A news aggregator with live global coverage, category filtering, search, and comment features powered by NewsAPI and Firebase.",
    img: "/web-apps/newsly.png",
    iconLists: [
      "/tools_frameworks/re.svg",
      "/tools_frameworks/firebase.svg",
      "/tools_frameworks/js.svg",
      "/tools_frameworks/tail.svg",
    ],
    link: "https://abdulrehman-newsly.netlify.app/",
    githubLink: "https://github.com/abdulrehman6417/newsly",
  },
  {
    id: 9,
    title: "Gemini Clone",
    des: "A functional Google Gemini UI clone with live API integration, replicating the core chat experience with real AI responses.",
    img: "/web-apps/gemini.png",
    iconLists: [
      "/tools_frameworks/re.svg",
      "/tools_frameworks/gemini.svg",
      "/tools_frameworks/js.svg",
      "/tools_frameworks/tail.svg",
    ],
    link: "https://abdulrehman-gemini-clone.netlify.app/",
    githubLink: "https://github.com/abdulrehman6417/gemini-clone",
  },
  {
    id: 10,
    title: "Ticket Management System",
    des: "Internal frontend for LineSquare Technologies. A full ticket management system built and delivered during my internship for real company use.",
    img: "/web-apps/tms.png",
    iconLists: [
      "/tools_frameworks/re.svg",
      "/tools_frameworks/js.svg",
      "/tools_frameworks/tail.svg",
    ],
    link: "",
  },
  {
    id: 11,
    title: "To-Do List App",
    des: "A clean, functional task manager for daily to-dos with full CRUD operations using React Context API for state management.",
    img: "/web-apps/todo.png",
    iconLists: [
      "/tools_frameworks/re.svg",
      "/tools_frameworks/js.svg",
      "/tools_frameworks/tail.svg",
    ],
    link: "https://abdulrehman-todo-list.netlify.app/",
    githubLink: "https://github.com/abdulrehman6417/todo-list",
  },
];

export const n8nProjects = [
  {
    id: 1,
    title: "AI Telegram Smart Assisstant.",
    des: "A fully conversational Telegram assistant that accepts text or voice messages, transcribes audio via Gemini 2.5 Flash, and routes requests to dedicated sub-agents for Google Tasks and Google Calendar management. Remembers context across the conversation.",
    img: "/n8n/resume-n8n.png",
    iconLists: [
      "/tools_frameworks/n8n.svg",
      "/tools_frameworks/open-ai.svg",
      "/tools_frameworks/gemini.svg",
      "/tools_frameworks/google-cal.svg",
      "/tools_frameworks/google-tasks.svg",
    ],
    link: "https://www.linkedin.com/posts/abdulrehman-rana_n8n-aiautomation-nocode-activity-7454427224419569664-jzAD",
  },
  {
    id: 2,
    title: "Google Calendar Sub-Agent",
    des: "A dedicated calendar workflow triggered by the main Telegram assistant. Handles creating, updating, and fetching Google Calendar events via its own AI agent, keeping calendar logic isolated and clean.",
    img: "/n8n/google-calendar-n8n.png",
    iconLists: [
      "/tools_frameworks/n8n.svg",
      "/tools_frameworks/open-ai.svg",
      "/tools_frameworks/google-cal.svg",
    ],
    link: "https://www.linkedin.com/posts/abdulrehman-rana_n8n-aiautomation-nocode-activity-7454427224419569664-jzAD",
  },
  {
    id: 3,
    title: "AI Resume Screener & Analysis",
    des: "End-to-end hiring automation. Triggered by Gmail when a candidate emails their resume, saves to Google Drive, detects file type (PDF, Word, or text), extracts content, cross-references against the job description using GPT, and logs a full suitability report to Google Sheets. Zero manual effort.",
    img: "/n8n/resume-n8n.png",
    iconLists: [
      "/tools_frameworks/n8n.svg",
      "/tools_frameworks/open-ai.svg",
      "/tools_frameworks/gmail.svg",
      "/tools_frameworks/google-drive.svg",
      "/tools_frameworks/google-sheets.svg",
    ],
    link: "https://www.linkedin.com/posts/abdulrehman-rana_n8n-aiautomation-workflowautomation-activity-7455550958190727168-wr_K",
  },
  {
    id: 4,
    title: "Gmail AI Drafter",
    des: "Reads incoming Gmail messages and automatically generates context-aware reply drafts using OpenAI, ready for one-click send. Eliminates the blank-page problem for repetitive email responses.",
    img: "/n8n/gmail-respond-n8n.png",
    iconLists: [
      "/tools_frameworks/n8n.svg",
      "/tools_frameworks/open-ai.svg",
      "/tools_frameworks/gmail.svg",
    ],
    link: "",
  },
  {
    id: 5,
    title: "RAG AI File Chat Agent",
    des: "Upload any document and chat with it in natural language. The workflow vectorizes the file into Pinecone and enables accurate Q&A over its contents using an OpenAI-powered agent.",
    img: "/n8n/rag-n8n.png",
    iconLists: [
      "/tools_frameworks/n8n.svg",
      "/tools_frameworks/open-ai.svg",
      "/tools_frameworks/pinecone.svg",
    ],
    link: "",
  },
  {
    id: 6,
    title: "Lead Scoring Bot",
    des: "Grades incoming leads as hot or cold in real time using AI, then routes structured results to a Google Sheets tracker automatically. Replaces manual lead qualification entirely.",
    img: "/n8n/lead-validate-n8n.png",
    iconLists: [
      "/tools_frameworks/n8n.svg",
      "/tools_frameworks/open-ai.svg",
      "/tools_frameworks/google-sheets.svg",
    ],
    link: "",
  },
];

export const toolsAndFrameworks = [
  {
    id: 1,
    name: "Next.js",
    img: "/tools_frameworks/next.svg",
  },
  {
    id: 2,
    name: "React",
    img: "/tools_frameworks/re.svg",
  },
  {
    id: 3,
    name: "Three.js",
    img: "/tools_frameworks/three.svg",
  },
  {
    id: 4,
    name: "n8n",
    img: "/tools_frameworks/n8n.svg",
  },
  {
    id: 5,
    name: "TypeScript",
    img: "/tools_frameworks/ts.svg",
  },
  {
    id: 6,
    name: "JavaScript",
    img: "/tools_frameworks/js.svg",
  },
  {
    id: 7,
    name: "Tailwind CSS",
    img: "/tools_frameworks/tail.svg",
  },
  {
    id: 8,
    name: "Firebase",
    img: "/tools_frameworks/firebase.svg",
  },
  {
    id: 9,
    name: "Shopify",
    img: "/tools_frameworks/shopify.svg",
  },
  {
    id: 10,
    name: "OpenAI",
    img: "/tools_frameworks/open-ai.svg",
  },
  {
    id: 11,
    name: "Gemini",
    img: "/tools_frameworks/gemini.svg",
  },
  {
    id: 12,
    name: "Pinecone",
    img: "/tools_frameworks/pinecone.svg",
  },
  {
    id: 13,
    name: "Cursor",
    img: "/tools_frameworks/cursor.png",
  },
  {
    id: 14,
    name: "Codex",
    img: "/tools_frameworks/codex.svg",
  },
  {
    id: 15,
    name: "Antigravity",
    img: "/tools_frameworks/antigravity.png",
  },
  {
    id: 16,
    name: "Figma",
    img: "/tools_frameworks/figma.svg",
  },
];

export const testimonials = [
  {
    quote:
      "Rana is a responsible and reliable team player who is always willing to step up to challenges. He is proactive, committed to delivering quality work, and consistently ensures tasks are completed on schedule based on the planned timeline. Working with him has been smooth and dependable.",
    name: "Brian Tay",
    title: "Co-Founder at ShopXR",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer",
    desc: "Led the development of web-based platforms using React.js and Next.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "n8n Automation Engineer",
    desc: "Independently designing and shipping AI automation workflows, including a multi-agent Telegram assistant, resume screener, Gmail AI drafter, and lead scoring bot.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Web Dev",
    desc: "Delivered custom React web applications for clients, handling scoping, development, and deployment independently.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Frontend Developer Intern",
    desc: "Contributed to production frontend development and built the company's internal Ticket Management System using React and Tailwind CSS.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/socials/git.svg",
    url: "https://github.com/abdulrehman6417",
  },
  {
    id: 2,
    img: "/socials/link.svg",
    url: "https://www.linkedin.com/in/abdulrehman-rana/",
  },
];
