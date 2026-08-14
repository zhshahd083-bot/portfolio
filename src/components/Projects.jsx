import React, { memo, useMemo } from "react";
import {
  Code2,
  ExternalLink,
  FolderKanban,
  Sparkles,
  Github,
  Smartphone,
  Cpu,
  BrainCircuit,
  Globe,
  Database,
  Wrench,
} from "lucide-react";
import { motion } from "framer-motion";

// ======================================================
// ANIMATIONS
// ======================================================

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// ======================================================
// PROJECT CARD
// ======================================================

const ProjectCard = memo(({ project }) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.2,
      }}
      className={`
        relative
        group
        bg-white/90
        dark:bg-neutral-900/80
        border
        rounded-2xl
        shadow
        hover:shadow-xl
        transition-all
        duration-300
        p-6
        flex
        flex-col
        h-full
        ${
          project.featured
            ? "border-primary/50 ring-1 ring-primary/20"
            : "border-neutral-200 dark:border-neutral-700"
        }
      `}
    >
      {/* ==================================================
          FEATURED BADGE
      ================================================== */}

      {project.featured && (
        <div
          className="
            absolute
            top-4
            right-4
            flex
            items-center
            gap-1.5
            px-3
            py-1
            rounded-full
            bg-primary/10
            text-primary
            border
            border-primary/20
            text-xs
            font-semibold
          "
        >
          <Sparkles className="w-3.5 h-3.5" />
          Featured
        </div>
      )}

      {/* ==================================================
          CATEGORY ICON
      ================================================== */}

      <div className="flex items-center gap-3 mb-5">
        <div
          className="
            w-11
            h-11
            flex
            items-center
            justify-center
            rounded-xl
            bg-neutral-100
            dark:bg-neutral-800
            text-primary
            group-hover:scale-105
            transition-transform
          "
        >
          {project.icon}
        </div>

        <span
          className="
            text-xs
            font-semibold
            text-muted-foreground
            uppercase
            tracking-wide
          "
        >
          {project.category}
        </span>
      </div>

      {/* ==================================================
          TITLE
      ================================================== */}

      <h3
        className={`
          text-xl
          font-bold
          text-foreground
          mb-3
          leading-tight
          ${project.featured ? "pr-20" : ""}
        `}
      >
        {project.title}
      </h3>

      {/* ==================================================
          DESCRIPTION
      ================================================== */}

      <p
        className="
          text-base
          text-muted-foreground
          leading-relaxed
          mb-5
          flex-grow
        "
      >
        {project.desc}
      </p>

      {/* ==================================================
          TECHNOLOGIES
      ================================================== */}

      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.map((tag, index) => (
          <span
            key={`${tag}-${index}`}
            className="
              px-3
              py-1
              rounded-full
              text-xs
              font-medium
              bg-neutral-100
              dark:bg-neutral-800
              text-neutral-800
              dark:text-neutral-200
              border
              border-neutral-300
              dark:border-neutral-600
              hover:bg-neutral-200
              dark:hover:bg-neutral-700
              transition-colors
            "
          >
            {tag}
          </span>
        ))}
      </div>

      {/* ==================================================
          LINKS
      ================================================== */}

      {project.links && project.links.length > 0 && (
        <div className="flex flex-wrap gap-4 mt-auto pt-2">
          {project.links.map((link, index) => (
            <a
              key={`${link.label}-${index}`}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                gap-2
                text-primary
                font-semibold
                text-sm
                hover:underline
                transition-colors
              "
            >
              {link.type === "github" ? (
                <Github className="w-4 h-4" />
              ) : (
                <ExternalLink className="w-4 h-4" />
              )}

              {link.label}
            </a>
          ))}
        </div>
      )}
    </motion.div>
  );
});

ProjectCard.displayName = "ProjectCard";

// ======================================================
// PROJECTS DATA
// ======================================================

const PROJECTS_DATA = [

  // ====================================================
  // 1. FINAL YEAR PROJECT
  // ====================================================

  {
    title: "AI Recruitment Platform",
    category: "Artificial Intelligence · PFE",
    featured: true,

    icon: <BrainCircuit className="w-5 h-5" />,

    desc:
      "An intelligent recruitment platform designed to automatically analyze candidate CVs using Artificial Intelligence and Large Language Models. The system extracts information from PDF documents and scanned images, analyzes candidate skills and experience, generates a candidate score and provides AI-based feedback to recruiters.",

    tags: [
      "Python",
      "FastAPI",
      "React",
      "JavaScript",
      "LLM",
      "LLaMA",
      "OCR",
      "Docker",
      "SQLite",
      "SQLAlchemy",
      "REST API",
      "JWT",
    ],

    links: [
      // Add your GitHub / Demo later
      // {
      //   type: "github",
      //   label: "GitHub",
      //   href: "YOUR_GITHUB_LINK",
      // },
    ],
  },

  // ====================================================
  // 2. LEONI EMPLOYEE MANAGEMENT
  // ====================================================

  {
    title: "Employee Management Web Application",
    category: "Web Development · Internship",

    icon: <Globe className="w-5 h-5" />,

    desc:
      "A web application developed during my technical internship at LEONI for managing employee information and simplifying employee management processes through a digital interface.",

    tags: [
      "Web Development",
      "JavaScript",
      "HTML",
      "CSS",
      "Database",
      "UI/UX",
    ],

    links: [],
  },

  // ====================================================
  // 3. SUSHI BAR
  // ====================================================

  {
    title: "Sushi Bar Website",
    category: "Web Development",

    icon: <Globe className="w-5 h-5" />,

    desc:
      "A modern and responsive website designed for a Sushi Bar. The project focuses on presenting the restaurant, its services and menu through an attractive and intuitive user interface.",

    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "UI/UX",
      "Web Development",
    ],

    links: [],
  },

  // ====================================================
  // 4. PARAPHARMACY
  // ====================================================

  {
    title: "Parapharmacy Website",
    category: "Web Development",

    icon: <Globe className="w-5 h-5" />,

    desc:
      "A responsive web platform created for a parapharmacy to present products and services through a clean, organized and user-friendly digital experience.",

    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "UI/UX",
      "Web Development",
    ],

    links: [],
  },

  // ====================================================
  // 5. TO-DO LIST
  // ====================================================

  {
    title: "To-Do List Application",
    category: "Python Application",

    icon: <Code2 className="w-5 h-5" />,

    desc:
      "A Python-based task management application designed to organize and manage daily tasks while practicing programming fundamentals, application logic and data management.",

    tags: [
      "Python",
      "CRUD",
      "Task Management",
      "Data Management",
      "Problem Solving",
    ],

    links: [],
  },

  // ====================================================
  // 6. HOME INVENTORY
  // ====================================================

  {
    title: "Home Inventory App",
    category: "Mobile Application · Android",

    icon: <Smartphone className="w-5 h-5" />,

    desc:
      "A mobile application developed with Android Studio for managing and organizing household inventory. The application provides a practical way to keep track of household items and their information.",

    tags: [
      "Android Studio",
      "Android",
      "Mobile Development",
      "Java",
      "UI/UX",
      "SQLite",
    ],

    links: [],
  },

  // ====================================================
  // 7. GREEN CHECK
  // ====================================================

  {
    title: "Green Check",
    category: "IoT · Robotics",

    icon: <Cpu className="w-5 h-5" />,

    desc:
      "An IoT and robotics project dedicated to detecting anomalies in agricultural environments. The project combines connected technologies, sensors and robotics concepts to support agricultural monitoring.",

    tags: [
      "IoT",
      "Robotics",
      "Embedded Systems",
      "Sensors",
      "Agriculture",
      "Monitoring",
    ],

    links: [],
  },

  // ====================================================
  // 8. SMART QUEUE ASSISTANT
  // ====================================================

  {
    title: "Smart Queue Assistant",
    category: "Intelligent System · Mobile",

    icon: <BrainCircuit className="w-5 h-5" />,

    desc:
      "An intelligent queue management system designed to improve the management of waiting lines. The solution includes a mobile application and real-time monitoring to provide a more efficient and organized queue experience.",

    tags: [
      "Smart System",
      "Mobile Application",
      "Real-Time",
      "IoT",
      "Artificial Intelligence",
      "System Design",
    ],

    links: [],
  },

  // ====================================================
  // 9. EDURATE
  // ====================================================

  {
    title: "EduRate",
    category: "Web Platform",

    icon: <Database className="w-5 h-5" />,

    desc:
      "A collaborative web platform dedicated to academic evaluation. The project aims to provide a digital environment for managing and sharing academic assessments in a collaborative way.",

    tags: [
      "Web Development",
      "React",
      "JavaScript",
      "Collaborative Platform",
      "Database",
      "UI/UX",
    ],

    links: [],
  },
];

// ======================================================
// MAIN COMPONENT
// ======================================================

function ProjectsComponent() {
  const projectsData = useMemo(() => PROJECTS_DATA, []);

  return (
    <div
      className="
        w-full
        min-h-[80vh]
        flex
        flex-col
        items-center
        justify-center
        px-4
        py-12
      "
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center w-full"
      >

        {/* ==================================================
            HEADER
        ================================================== */}

        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center text-center"
        >
          <h2
            className="
              text-4xl
              sm:text-5xl
              font-bold
              mb-4
              flex
              items-center
              gap-4
              text-foreground
            "
          >
            <FolderKanban
              className="
                w-8
                h-8
                sm:w-11
                sm:h-11
                text-primary
                drop-shadow-sm
              "
            />

            Projects
          </h2>

          <p
            className="
              text-lg
              text-muted-foreground
              max-w-2xl
              mx-auto
              text-center
              mb-10
              leading-relaxed
            "
          >
            A selection of projects I have developed across Artificial
            Intelligence, Web Development, Mobile Applications, IoT and
            intelligent systems. Each project reflects my interest in
            building practical and innovative digital solutions.
          </p>
        </motion.div>

        {/* ==================================================
            PROJECT GRID
        ================================================== */}

        <motion.div
          variants={containerVariants}
          className="
            w-full
            max-w-6xl
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >
          {projectsData.map((project, index) => (
            <ProjectCard
              key={`${project.title}-${index}`}
              project={project}
            />
          ))}
        </motion.div>

      </motion.div>
    </div>
  );
}

// ======================================================
// EXPORT
// ======================================================

export default memo(ProjectsComponent);