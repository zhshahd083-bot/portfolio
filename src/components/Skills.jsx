import React, { useState, useCallback, useMemo, memo } from "react";
import {
  Code,
  Globe,
  Brain,
  Database,
  Terminal,
  Settings2,
  Lightbulb,
} from "lucide-react";
import { motion } from "framer-motion";

// =========================
// Animation Variants
// =========================

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
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

// =========================
// Skill Tag
// =========================

const SkillTag = memo(
  ({ tag, onMouseEnter, onMouseLeave, className }) => (
    <span
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`
        px-4 py-1.5
        rounded-full
        text-sm
        font-medium
        whitespace-nowrap
        transition-all
        duration-200
        cursor-default
        ${className}
        text-neutral-800
        dark:text-neutral-200
        border
        border-neutral-300
        dark:border-neutral-600
        hover:bg-neutral-200
        dark:hover:bg-neutral-700
        hover:scale-105
      `}
    >
      {tag}
    </span>
  )
);

SkillTag.displayName = "SkillTag";

// =========================
// Skill Section Card
// =========================

const SkillSection = memo(
  ({ section, hoveredTag, onTagHover, onTagLeave }) => {
    const { icon, title, tags } = section;

    const tagElements = useMemo(
      () =>
        tags.map((tag, i) => {
          const tagId = `${title}-${i}`;
          const isHovered = hoveredTag === tagId;

          return (
            <SkillTag
              key={tag}
              tag={tag}
              className={
                isHovered
                  ? "bg-neutral-200 dark:bg-neutral-700 shadow-sm"
                  : "bg-neutral-100 dark:bg-neutral-800"
              }
              onMouseEnter={() => onTagHover(tagId)}
              onMouseLeave={onTagLeave}
            />
          );
        }),
      [tags, title, hoveredTag, onTagHover, onTagLeave]
    );

    return (
      <motion.div
        variants={itemVariants}
        className="
          rounded-2xl
          bg-white/90
          dark:bg-neutral-900/80
          border
          border-neutral-200
          dark:border-neutral-700
          shadow
          hover:shadow-lg
          transition-shadow
          duration-300
          p-6
          flex
          flex-col
        "
      >
        {/* Card Header */}

        <div className="flex items-center gap-3 mb-5">
          <div
            className="
              p-3
              rounded-xl
              bg-neutral-200
              dark:bg-neutral-800
              text-neutral-900
              dark:text-neutral-100
              shadow-sm
            "
          >
            {icon}
          </div>

          <h3
            className="
              text-xl
              font-semibold
              text-neutral-800
              dark:text-neutral-100
            "
          >
            {title}
          </h3>
        </div>

        {/* Skills */}

        <div className="flex flex-wrap gap-3">
          {tagElements}
        </div>
      </motion.div>
    );
  }
);

SkillSection.displayName = "SkillSection";

// =========================
// Skills Data
// =========================

const SKILLS_SECTIONS = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Programming Languages",
    tags: [
      "Python",
      "Java",
      "JavaScript",
      "C#",
      "SQL",
      "C",
      "C++",
    ],
  },

  {
    icon: <Globe className="w-6 h-6" />,
    title: "Web & Mobile Development",
    tags: [
      "React",
      "Angular",
      "FastAPI",
      "Node.js",
      "HTML",
      "CSS",
      "Android Studio",
    ],
  },

  {
    icon: <Brain className="w-6 h-6" />,
    title: "Artificial Intelligence",
    tags: [
      "Machine Learning",
      "Large Language Models",
      "LLM",
      "Prompt Engineering",
      "AI Applications",
      "Intelligent Systems",
    ],
  },

  {
    icon: <Database className="w-6 h-6" />,
    title: "Databases",
    tags: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "SQLite",
    ],
  },

  {
    icon: <Terminal className="w-6 h-6" />,
    title: "Tools & Technologies",
    tags: [
      "Git",
      "GitHub",
      "Docker",
      "Linux",
      "VS Code",
      "Jupyter Notebook",
    ],
  },

  {
    icon: <Settings2 className="w-6 h-6" />,
    title: "Methodologies",
    tags: [
      "Agile",
      "Scrum",
      "Project Management",
      "Teamwork",
    ],
  },

  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Interests",
    tags: [
      "Artificial Intelligence",
      "IoT",
      "Embedded Systems",
      "Web Development",
      "Intelligent Systems",
    ],
  },
];

// =========================
// Main Skills Component
// =========================

const SkillsComponent = memo(function Skills() {
  const [hoveredTag, setHoveredTag] = useState(null);

  const handleTagHover = useCallback(
    (tagId) => setHoveredTag(tagId),
    []
  );

  const handleTagLeave = useCallback(
    () => setHoveredTag(null),
    []
  );

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
        {/* =========================
            HEADER
        ========================== */}

        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center text-center"
        >
          <h2
            className="
              text-4xl
              sm:text-5xl
              font-bold
              text-center
              mb-4
              flex
              items-center
              gap-4
              text-foreground
            "
          >
            <Settings2
              className="
                w-8
                h-8
                sm:w-11
                sm:h-11
                text-primary
                drop-shadow-sm
              "
            />

            Skills
          </h2>

          <p
            className="
              text-lg
              text-muted-foreground
              max-w-2xl
              mx-auto
              mb-10
            "
          >
            A combination of technical expertise, practical experience,
            and continuous learning across Artificial Intelligence,
            Web Development, IoT, and Embedded Systems.
          </p>
        </motion.div>

        {/* =========================
            SKILLS GRID
        ========================== */}

        <motion.div
          variants={containerVariants}
          className="
            w-full
            max-w-5xl
            grid
            grid-cols-1
            md:grid-cols-2
            gap-8
          "
        >
          {SKILLS_SECTIONS.map((section) => (
            <SkillSection
              key={section.title}
              section={section}
              hoveredTag={hoveredTag}
              onTagHover={handleTagHover}
              onTagLeave={handleTagLeave}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
});

SkillsComponent.displayName = "Skills";

export default SkillsComponent;