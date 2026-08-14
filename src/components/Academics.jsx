import React, { useMemo, memo } from "react";
import { GraduationCap, Award } from "lucide-react";
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
// Education Card
// =========================

const EducationCard = memo(({ education }) => {
  const {
    icon,
    title,
    institution,
    year,
    description,
    result,
  } = education;

  return (
    <motion.div
      variants={itemVariants}
      className="
        bg-white/90
        dark:bg-neutral-900/80
        border
        border-neutral-200
        dark:border-neutral-700
        rounded-2xl
        shadow
        hover:shadow-lg
        transition-shadow
        duration-300
        p-6
        flex
        items-start
        gap-6
      "
    >
      {/* Icon */}

      <div
        className="
          w-16
          h-16
          flex-shrink-0
          bg-neutral-200
          dark:bg-neutral-800
          flex
          items-center
          justify-center
          shadow-sm
          rounded-xl
          text-primary
        "
      >
        {icon}
      </div>

      {/* Content */}

      <div className="flex flex-col text-left gap-1 flex-1">

        {/* Degree */}

        <h3
          className="
            text-lg
            sm:text-xl
            font-semibold
            text-foreground
          "
        >
          {title}
        </h3>

        {/* Institution */}

        <p
          className="
            text-sm
            sm:text-base
            text-primary
            font-medium
          "
        >
          {institution}
        </p>

        {/* Year */}

        <p
          className="
            text-sm
            text-muted-foreground
            mt-2
          "
        >
          <span className="font-medium text-foreground/80">
            Period:
          </span>{" "}
          {year}
        </p>

        {/* Description */}

        <p
          className="
            text-sm
            text-muted-foreground
            leading-relaxed
            mt-2
          "
        >
          {description}
        </p>

        {/* Result */}

        {result && (
          <div
            className="
              flex
              items-center
              gap-2
              mt-3
              text-sm
              font-medium
              text-foreground
            "
          >
            <Award className="w-4 h-4 text-primary" />

            <span>{result}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
});

EducationCard.displayName = "EducationCard";

// =========================
// Education Data
// =========================

const ACADEMICS_DATA = [
  {
    icon: <GraduationCap className="w-8 h-8" />,

    title: "Licence en Ingénierie des Systèmes Informatiques",

    institution:
      "Institut Supérieur d’Informatique et des Technologies de Communication — Hammam Sousse",

    year: "2023 – 2026",

    description:
      "Spécialité : IoT & Embedded Systems. Formation axée sur les systèmes informatiques, les technologies IoT, les systèmes embarqués, le développement logiciel et les systèmes intelligents.",

    result:
      "Diplôme obtenu avec Mention Très Bien — 18,5/20",
  },

 {
  icon: <GraduationCap className="w-8 h-8" />,

  title: "Baccalauréat en Mathématiques",

  institution:
    "Lycée Zaouia Ksiba et Thrayet — Sousse",

  year: "2023",

  description:
    "Baccalauréat en Mathématiques obtenu en 2023.",

  result: null,
},
];

// =========================
// Main Education Component
// =========================

const AcademicsComponent = memo(function Academics() {
  const educationCards = useMemo(
    () =>
      ACADEMICS_DATA.map((education, index) => (
        <EducationCard
          key={`${education.title}-${index}`}
          education={education}
        />
      )),
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
            <GraduationCap
              className="
                w-8
                h-8
                sm:w-11
                sm:h-11
                text-primary
                drop-shadow-sm
              "
            />

            Education
          </h2>

          <p
            className="
              text-lg
              text-muted-foreground
              max-w-2xl
              mx-auto
              mb-10
              leading-relaxed
            "
          >
            My academic journey in computer engineering, IoT and
            embedded systems, from my mathematical foundation to
            my engineering degree.
          </p>
        </motion.div>

        {/* =========================
            EDUCATION CARDS
        ========================== */}

        <motion.div
          variants={containerVariants}
          className="
            w-full
            max-w-3xl
            flex
            flex-col
            gap-8
          "
        >
          {educationCards}
        </motion.div>
      </motion.div>
    </div>
  );
});

AcademicsComponent.displayName = "Academics";

export default AcademicsComponent;