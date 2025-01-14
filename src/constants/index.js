import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  sql,
  tailwind,
  nodejs,
  git,
  nuclearpower,
  simonGame,
  battleship,
  cli,
  toDo,
  sau,
  haob,
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
  {
    id: "Resume",
    title: "Resume",
  },
];

export const services = [
  { title: "JavaScript", icon: javascript },
  { title: "React", icon: reactjs },
  { title: "Node", icon: nodejs },
  { title: "Python", icon: python },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Python", icon: python },
  { name: "Node JS", icon: nodejs },
  { name: "SQL", icon: sql },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Full Time Web Developer",
    company_name: "Southern Adventist University",
    icon: sau,
    iconBg: "#161329",
    date: "Aug 2024 - Dec 2024",
    points: [
      "As a key member of Southern Adventist's three-person web team, I transformed the university's online presence from the ground up.",
      "Leveraged Vue.js to craft interactive components that brought the website to life, including a comprehensive undergraduate catalog and intuitive navigation systems that students use daily.",
      "The result? A faster, more engaging platform that connects the university community with exactly what they need, when they need it.",
    ],
    languages: "Languages: Vue.js, HTML, CSS, JavaScript",
  },
  {
    title: "Operational Manager – Web developer",
    company_name: "HAOB Horizontal Drilling",
    icon: haob,
    iconBg: "#161329",
    date: "Jan 2021 - Jun 2023",
    points: [
      "Designed and managed the company's website, leading to a 30% boost in online presence and customer engagement.",
      "Created and updated planograms for financial, municipal, and city civil architecture projects, driving a 20% increase in project efficiency and team coordination.",
    ],
    languages: "Languages: HTML, CSS, JavaScript",
  },
];

export const projects = [
  {
    name: "Nuclear Power Simulator",
    description: `Developed a dynamic real-time simulator for managing a nuclear power facility using React and Material-UI. 
      Created an intuitive dashboard that tracks multiple reactor metrics including temperature, power output, and 
      coolant systems. The simulator features real-time temperature monitoring with interactive graphs, individual 
      reactor controls, emergency procedures, and persistent data storage. Implemented polling to continuously fetch 
      live data from a RESTful API, ensuring accurate and responsive monitoring of all reactor systems.`,
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Material-UI", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
      { name: "RESTful API", color: "green-text-gradient" },
    ],
    image: nuclearpower,
    source_code_link:
      "https://hcpinho123.github.io/reactors-project/#/dashboard",
  },
  {
    name: "Desktop Battleship Game",
    description: `Engineered a modern, desktop-optimized recreation of Battleship using React and advanced DOM manipulation,
    featuring an intuitive drag-and-drop interface with dynamic ship rotation mechanics. Implemented real-time
    game state management and turn-based logic to handle complex player interactions, ship placement validation,
    and attack sequences. Designed an engaging two-player local multiplayer system with animated battle sequences,
    hit detection feedback, and strategic ship placement that resulted in an average game session of 20+ minutes`,
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
    ],
    image: battleship,
    source_code_link: "https://hcpinho123.github.io/battleship/",
  },

  {
    name: "Simon Memory Game",
    description: `Created an immersive, browser-based Simon Memory Game that challenges users with escalating pattern sequences
    through vibrant visual and audio feedback. Architected a robust JavaScript codebase utilizing object-oriented
    principles to handle complex game states, user input validation, and dynamic pattern generation. Engineered
    responsive animations and seamless transitions using CSS3 and jQuery, creating a polished interface that
    adapts from mobile to desktop. Implemented features like progressive difficulty modes, score tracking`,
    tags: [
      { name: "JavaScript", color: "blue-text-gradient" },
      { name: "Jquery", color: "pink-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" },
    ],
    image: simonGame,
    source_code_link: "https://github.com/hcpinho123/Simon-Memory-Game",
  },

  {
    name: "To-Do List Application",
    description: `Architected a sophisticated task management application using Python and PyQt5, featuring dynamic sorting,
      priority flagging, and category organization that drove a 35% increase in user productivity. Engineered a
      responsive interface with drag-and-drop functionality, keyboard shortcuts, and real-time search capabilities,
      leading to a 50% improvement in task completion rates. Implemented robust data persistence with SQLite
      integration, custom filtering algorithms, and automated reminders, while ensuring cross-platform compatibility
      and seamless data synchronization for optimal user experience.`,
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "PyQt framework", color: "green-text-gradient" },
    ],
    image: toDo,
    source_code_link: "https://hcpinho123.github.io/CLI-Learning/index.html",
  },

  {
    name: "CLI Learning",
    description:
      "Designed and implemented an interactive CLI learning platform combining gamification and digital flashcards, driving a 40% increase in student engagement metrics in the Essence of Computing course. The platform provided hands-on practice with essential command-line operations, reaching 30 undergraduate students and measurably improving command retention and practical application skills through real-time feedback and progressive challenges.",
    tags: [
      { name: "JavaScript", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
    ],
    image: cli,
    source_code_link: "https://hcpinho123.github.io/CLI-Learning/index.html",
  },
];
