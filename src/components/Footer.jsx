import { Github, Linkedin, Mail } from "lucide-react";
import { memo } from "react";

// ======================================================
// Social links
// ======================================================

const socialLinks = [
  {
    href: "https://github.com/",
    title: "GitHub",
    icon: Github,
  },
  {
    href: "https://www.linkedin.com/in/shahd-zghida-430a12369/",
    title: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=zhshahd083@gmail.com",
    title: "Email",
    icon: Mail,
  },
];

// ======================================================
// Footer
// ======================================================

const Footer = memo(() => {
  return (
    <footer className="w-full bg-muted/30 border-t border-border pt-8 pb-10 mt-32">

      <div className="max-w-5xl mx-auto px-4 sm:px-8 flex flex-col items-center text-center gap-5">

        {/* Copyright */}

        <div className="text-sm text-muted-foreground">
          © 2026 Chahd Farah Loghmari. All rights reserved.
        </div>

        {/* Social links */}

        <div className="flex justify-center items-center gap-6">

          {socialLinks.map(({ href, title, icon: Icon }) => (
            <a
              key={title}
              href={href}
              title={title}
              aria-label={title}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110"
            >
              <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          ))}

        </div>

      </div>

    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;