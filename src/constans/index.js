import {
  pyth,
  backend,
  creator,
  web,
  python,
  javascript,
  react,
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
    title: "Learning and improving programming skills on Python",
    company_name: "Python",
    icon: python,
    iconBg: "#383E56",
    date: "Sep 2022 - Dec 2022",
    points: [
      "Conditions, cycles",
      "Functional programming",
      "Algorithm basics",
      "Object-Oriented Programming (OOP)",
      "Concurrency",
      "Code testing",
    ],
  },
  {
    title: "Learning and improving programming skills on JavaScript",
    company_name: "JavaScript",
    icon: javascript,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - Feb 2023",
    points: [
      "Functions, arrays, cycles",
      "Iterations in arrays",
      "Objects in JavaScript",
      "Document Object Model",
      "Object-oriented programming in JS: getters and setters, classes, modules"
    ],
  },
  {
    title: "Programming courses - Python developer",
    company_name: "itProger",
    icon: itproger,
    iconBg: "#383E56",
    date: "Feb 2023 - May 2023",
    text: "Follow the link to check my diploma - ",
    link: "https://itproger.com/view-diplom/7f2b00ac4a217025732482ef12acf19b/python",
    link_name: "Diploma",
    points: [
      "Basics of Python",
      "Python SQL",
      "Testing",
      "Development of Telegram bots",
      "HTML",
      "CSS3, Bootstrap",
      "Git version control",
      "Basics of JavaScript",
      "The jQuery library",
      "Django",
    ],
  },
  {
    title: "Developing with React.js",
    company_name: "React.js",
    icon: react,
    iconBg: "#E6DEDD",
    date: "May 2023 - Present",
    points: [
      "Rendering and lifecycle methods",
      "State and work with events",
      "Stylization of components",
      "Fragments, portals, links",
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
    name: "IT Courses",
    description:
      "Web application that allows users to find both free and paid courses on learning programming languages and various libraries.",
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
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: django,
    source_code_link: "https://github.com/Version40/django_website",
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