export type Project = {
  id: number;
  name: string;
  description: string;
  preview: string;
  link: string;
  github: string;
};

// Add new projects here
export const projects: Project[] = [
  {
    id: 14,
    name: "Learn A2A",
    description: "Agent to Agent protocol learning",
    preview: "/screenshots/a2a.jpg",
    link: "https://learn-a2a.com",
    github: "https://github.com/ajerni/a2a",
  },
  {
    id: 11,
    name: "andreaserni.com - Digital Twin",
    description: "An AI powered digital twin of myself",
    preview: "/screenshots/andreasernicom.png",
    link: "https://andreaserni.com",
    github: "https://github.com/ajerni/digital-twin/",
  },
  {
    id: 4,
    name: "Wine Cellar - www.mywine.info",
    description:
      "My wine cellar management system. Fully fledged web app using Next.js, Tailwind CSS, PostgreSQL, FastAPI and Langchain for AI features.",
    preview: "/screenshots/wine-cellar.png",
    link: "https://mywine.info",
    github: "https://github.com/ajerni/mywine",
  },
  {
    id: 10,
    name: "Synth Patch Library",
    description: "A full web app for managing and sharing synth patches.",
    preview: "/screenshots/patches.png",
    link: "https://synth-patch-library.com",
    github: "https://github.com/ajerni/patches/",
  },
  {
    id: 3,
    name: "Personal Bot",
    description:
      "My personal bot. Able to manage my tasks and calendar, sending e-mails and more. Connected to n8n to run agents",
    preview: "/screenshots/bot.png",
    link: "https://bot.andierni.ch",
    github: "https://github.com/ajerni/bot",
  },
  {
    id: 13,
    name: "Chat Room App",
    description: "Chatroom using Socket.io",
    preview: "/screenshots/chatpic.jpg",
    link: "https://chat.andierni.ch",
    github: "https://github.com/ajerni/chat",
  },
  {
    id: 12,
    name: "Status Tracker and Scoreboard",
    description: "Actix Web and PostgreSQL",
    preview: "/screenshots/actixsc.jpg",
    link: "https://statustracker.ernilabs.com",
    github: "https://github.com/ajerni/actix-psql-template",
  },
  {
    id: 7,
    name: "Rust and PostgreSQL",
    description:
      "PostgreSQL database 💾 application written in Rust 🦀 using the SQLX library and serving it with Actix webserver. Also includes a Bevy Engine 🎮 game.",
    preview: "/screenshots/rust-sqlx.png",
    link: "https://rust-sqlx.onrender.com/htmx",
    github: "https://github.com/ajerni/rust-sqlx",
  },
  {
    id: 6,
    name: "LLM's & AI Playground",
    description:
      "Langchain (Python) and LLMs (Large Language Models) AI playground. Ask Andi for password :-).",
    preview: "/screenshots/langchain-streamlit.png",
    link: "https://erni-langchain.streamlit.app/",
    github: "https://github.com/ajerni/erni-langchain",
  },
  {
    id: 5,
    name: "www.ernilabs.com",
    description: "The ultimate docker host for IoT and AI projects",
    preview: "/screenshots/ernilabs.png",
    link: "https://www.ernilabs.com",
    github: "https://github.com/ajerni",
  },
  {
    id: 1,
    name: "Personal Website",
    description:
      "My personal website built with Django. Shows some personal photos, games and stuff I did in the past.",
    preview: "/screenshots/personal-website.png",
    link: "https://www.andierni.ch",
    github: "https://github.com/ajerni/andierni",
  },
  {
    id: 2,
    name: "Personal Blog",
    description:
      "My blog. Basically used for testing and playing around with new technologies.",
    preview: "/screenshots/personal-blog.png",
    link: "https://blog.andierni.ch",
    github: "https://github.com/ajerni/andiblog",
  },
  {
    id: 8,
    name: "Mini-sites and tests",
    description: "A sample of minisites and tests I did over the years.",
    preview: "/screenshots/minisites-preview.png",
    link: "/minisites",
    github: "https://github.com/ajerni/",
  },
  {
    id: 9,
    name: "Games",
    description: "Some funny mini games. Most game ideas came from my kids :-)",
    preview: "/screenshots/games-preview.png",
    link: "/games",
    github: "https://github.com/ajerni/",
  },
];
