import React, { useState, memo } from "react";
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  MapPin,
  Phone,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

// ======================================================
// Animation Variants
// ======================================================

const sectionContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const formContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

// ======================================================
// Status Message
// ======================================================

const StatusMessage = ({ status, message }) => {
  if (status === "idle") return null;

  return (
    <motion.div
      layout
      initial={{
        opacity: 0,
        y: -10,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        y: -10,
        scale: 0.95,
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      className={`flex items-center gap-2 p-3 rounded-lg text-sm font-medium ${
        status === "success"
          ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800"
          : status === "error"
          ? "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800"
          : "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800"
      }`}
    >
      {status === "loading" && (
        <Loader2 className="w-4 h-4 animate-spin" />
      )}

      {status === "success" && (
        <CheckCircle2 className="w-4 h-4" />
      )}

      {status === "error" && (
        <AlertCircle className="w-4 h-4" />
      )}

      {message}
    </motion.div>
  );
};

// ======================================================
// Contact Component
// ======================================================

function ContactComponent() {
  const [formState, setFormState] = useState({
    status: "idle",
    message: "",
  });

  // ====================================================
  // Submit Form
  // ====================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormState({
      status: "loading",
      message: "Sending, please wait...",
    });

    const formData = new FormData(e.target);

    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(
        "https://formspree.io/f/mldnaeeb",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        setFormState({
          status: "success",
          message:
            "Thank you! Your message has been sent successfully.",
        });

        e.target.reset();

        setTimeout(() => {
          setFormState({
            status: "idle",
            message: "",
          });
        }, 5000);
      } else {
        const errorData = await response.json();

        throw new Error(
          errorData.error || "Failed to send message"
        );
      }
    } catch (error) {
      setFormState({
        status: "error",
        message:
          "An error occurred. Please try again or contact me directly.",
      });

      setTimeout(() => {
        setFormState({
          status: "idle",
          message: "",
        });
      }, 5000);
    }
  };

  // ====================================================
  // Gmail Link
  // ====================================================

  const gmailLink =
    "https://mail.google.com/mail/?view=cm&fs=1&to=zhshahd083@gmail.com";

  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 py-12">

      <motion.div
        variants={sectionContainerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center gap-8 w-full max-w-3xl"
      >

        {/* ==================================================
            TITLE
        ================================================== */}

        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center text-center"
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground">
            <span className="inline-flex items-center justify-center gap-3">
              <Mail className="w-7 h-7 sm:w-9 sm:h-9 text-primary" />

              <span>Contact Me</span>
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4 leading-relaxed">
            Whether you want to discuss a project, ask a question,
            or simply say hello, I would love to hear from you.
            Feel free to get in touch.
          </p>
        </motion.div>


        {/* ==================================================
            CONTACT INFORMATION
        ================================================== */}

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full"
        >

          {/* EMAIL */}

          <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/90 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-700 shadow">

            <div className="flex-shrink-0 p-3 rounded-xl bg-primary/10 text-primary">
              <Mail className="w-6 h-6" />
            </div>

            <div className="min-w-0">
              <p className="text-sm text-muted-foreground">
                Email
              </p>

              <a
                href={gmailLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-foreground hover:text-primary transition-colors break-all"
              >
                zhshahd083@gmail.com
              </a>
            </div>

          </div>


          {/* PHONE */}

          <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/90 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-700 shadow">

            <div className="flex-shrink-0 p-3 rounded-xl bg-primary/10 text-primary">
              <Phone className="w-6 h-6" />
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Phone
              </p>

              <p className="font-semibold text-foreground">
                +33 752053574
              </p>
            </div>

          </div>


          {/* LOCATION */}

          <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/90 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-700 shadow">

            <div className="flex-shrink-0 p-3 rounded-xl bg-primary/10 text-primary">
              <MapPin className="w-6 h-6" />
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Location
              </p>

              <p className="font-semibold text-foreground">
                Reims, France
              </p>
            </div>

          </div>

        </motion.div>


        {/* ==================================================
            DIRECT EMAIL
        ================================================== */}

        <motion.div variants={itemVariants}>

          <a
            href={gmailLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-2 text-primary text-lg font-medium hover:underline transition-colors"
          >
            <Mail className="w-5 h-5" />

            Send me an email directly
          </a>

        </motion.div>


        {/* ==================================================
            CONTACT FORM
        ================================================== */}

        <motion.form
          onSubmit={handleSubmit}
          variants={formContainerVariants}
          className="w-full p-6 sm:p-8 bg-white/90 dark:bg-neutral-900/80 border border-border/40 dark:border-border/60 rounded-2xl shadow-lg space-y-5"
        >

          {/* STATUS */}

          <AnimatePresence mode="wait">
            {formState.status !== "idle" && (
              <motion.div
                key={formState.status}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <StatusMessage
                  status={formState.status}
                  message={formState.message}
                />
              </motion.div>
            )}
          </AnimatePresence>


          {/* NAME */}

          <motion.div variants={itemVariants}>

            <label className="block text-sm font-medium text-foreground mb-2">
              Name
            </label>

            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              disabled={formState.status === "loading"}
              className="text-foreground disabled:opacity-50"
            />

          </motion.div>


          {/* EMAIL */}

          <motion.div variants={itemVariants}>

            <label className="block text-sm font-medium text-foreground mb-2">
              Email
            </label>

            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              disabled={formState.status === "loading"}
              className="text-foreground disabled:opacity-50"
            />

          </motion.div>


          {/* SUBJECT */}

          <motion.div variants={itemVariants}>

            <label className="block text-sm font-medium text-foreground mb-2">
              Subject
            </label>

            <Input
              type="text"
              name="subject"
              placeholder="Project discussion / Job opportunity / Collaboration..."
              required
              disabled={formState.status === "loading"}
              className="text-foreground disabled:opacity-50"
            />

          </motion.div>


          {/* MESSAGE */}

          <motion.div variants={itemVariants}>

            <label className="block text-sm font-medium text-foreground mb-2">
              Message
            </label>

            <Textarea
              rows={5}
              name="message"
              placeholder="Write your message here..."
              required
              disabled={formState.status === "loading"}
              className="resize-y text-foreground disabled:opacity-50"
            />

          </motion.div>


          {/* SEND BUTTON */}

          <motion.div variants={itemVariants}>

            <Button
              type="submit"
              disabled={formState.status === "loading"}
              className="w-full text-lg font-semibold py-3 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >

              {formState.status === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />

                  Sending...
                </>
              ) : (
                <>
                  Send Message

                  <Send className="w-4 h-4" />
                </>
              )}

            </Button>

          </motion.div>

        </motion.form>

      </motion.div>
    </div>
  );
}

export default memo(ContactComponent);