import React, { useState, useEffect, useCallback, memo } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";

// Layout
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import About from "./components/About";
import Skills from "./components/Skills";
import Academics from "./components/Academics";
import Projects from "./components/Projects";
import CP from "./components/CP";
import Contact from "./components/Contact";

// ======================================================
// MODERN DARK BACKGROUND
// ======================================================

export const StaticBackground = memo(({ theme }) => {
  const lightStyles = {
    backgroundColor: "#F8F7FF",
    backgroundImage: `
      radial-gradient(
        ellipse at 10% 10%,
        rgba(139, 92, 246, 0.10),
        transparent 45%
      ),
      radial-gradient(
        ellipse at 90% 90%,
        rgba(99, 102, 241, 0.10),
        transparent 45%
      ),
      linear-gradient(
        rgba(139, 92, 246, 0.06) 1px,
        transparent 1px
      ),
      linear-gradient(
        to right,
        rgba(139, 92, 246, 0.06) 1px,
        #F8F7FF 1px
      )
    `,
    backgroundSize: "40px 40px",
  };

  const darkStyles = {
    backgroundColor: "#09090F",
    backgroundImage: `
      radial-gradient(
        ellipse at 10% 10%,
        rgba(139, 92, 246, 0.16),
        transparent 40%
      ),
      radial-gradient(
        ellipse at 90% 20%,
        rgba(99, 102, 241, 0.12),
        transparent 40%
      ),
      radial-gradient(
        ellipse at 50% 100%,
        rgba(124, 58, 237, 0.10),
        transparent 45%
      ),
      linear-gradient(
        rgba(139, 92, 246, 0.035) 1px,
        transparent 1px
      ),
      linear-gradient(
        to right,
        rgba(139, 92, 246, 0.035) 1px,
        #09090F 1px
      )
    `,
    backgroundSize: "40px 40px",
  };

  // Correct theme selection
  const styles = theme === "dark" ? darkStyles : lightStyles;

  return (
    <div
      className="fixed inset-0 -z-50 pointer-events-none transition-all duration-700"
      style={styles}
    />
  );
});

StaticBackground.displayName = "StaticBackground";

// ======================================================
// PAGE ANIMATIONS
// ======================================================

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

// ======================================================
// ROUTES
// ======================================================

const AnimatedRoutes = memo(() => {
  const location = useLocation();

  const routesConfig = [
    {
      path: "/",
      Component: About,
    },
    {
      path: "/about",
      Component: About,
    },
    {
      path: "/skills",
      Component: Skills,
    },
    {
      path: "/academics",
      Component: Academics,
    },
    {
      path: "/projects",
      Component: Projects,
    },
    {
      path: "/cp",
      Component: CP,
    },
    {
      path: "/contact",
      Component: Contact,
    },
  ];

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {routesConfig.map(({ path, Component }) => (
          <Route
            key={path}
            path={path}
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Component />
              </motion.div>
            }
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
});

AnimatedRoutes.displayName = "AnimatedRoutes";

// ======================================================
// APP
// ======================================================

function App() {
  // DARK MODE BY DEFAULT
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
      return storedTheme;
    }

    return "dark";
  });

  const [sideNavOpen, setSideNavOpen] = useState(false);

  // Apply theme
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");

    document.documentElement.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle theme
  const toggleTheme = useCallback(() => {
    setTheme((previousTheme) =>
      previousTheme === "light" ? "dark" : "light"
    );
  }, []);

  return (
    <Router>
      <ScrollToTop />

      <Layout
        theme={theme}
        toggleTheme={toggleTheme}
        sideNavOpen={sideNavOpen}
        setSideNavOpen={setSideNavOpen}
      >
        <AnimatedRoutes />
      </Layout>

      <Analytics />
    </Router>
  );
}

export default App;