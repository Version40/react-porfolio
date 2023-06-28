import {
  pyth,
  backend,
  creator,
  web,
  itproger,
  shortener,
  django,
  telegram,
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Python Developer",
    icon: pyth,

  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];


const experiences = [
  {
    title: "Work on Freelance",
    company_name: "Freelance",
    icon: itproger,
    iconBg: "#383E56",
    date: "Sep 2022 - Present",
    points: [
      "Website parsing",
      "Development of telegram bots (aiogram lib.)",
      "Adaptive layout of the site according to the model",
      "Website development on such frameworks like Django and React.js",
      "Testing and QA",
    ],
  },
];


const projects = [
  {
    name: "Link Shortener",
    description:
      "Web-based platform that allows users to create and save shortened links from any valid long links in their personal account.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: shortener,
    source_code_link: "https://github.com/Version40/project_shortener",
  },
  {
    name: "Films/Serials Website",
    description:
      "A website that allows users to view all available movies and TV series that are posted on the resource.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "react.js",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: django,
    source_code_link: "https://github.com/Version40/django-react-web",
  },
  {
    name: "Sender Bot",
    description:
      "Telegram bot that allows the administrator to send promotional materials, news and other content to all available users from the database.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "telegram",
        color: "green-text-gradient",
      },
      {
        name: "aiogram",
        color: "pink-text-gradient",
      },
    ],
    image: telegram,
    source_code_link: "https://github.com/Version40/aiogram-sender",
  },
];

export { services, experiences, projects };