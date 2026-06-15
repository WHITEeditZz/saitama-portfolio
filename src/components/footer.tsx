"use client";

import Link from "next/link";
import {
  Linkedin,
  Twitter,
  Youtube,
  Mail,
  Heart,
  Instagram,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "YouTube",
      href: "https://www.youtube.com/@saitama",
      icon: Youtube,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/saitama",
      icon: Instagram,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/saitama",
      icon: Linkedin,
    },
    {
      name: "Twitter",
      href: "#",
      icon: Twitter,
    },
    {
      name: "Email",
      href: "mailto:contact@saitama.editor",
      icon: Mail,
    },
  ];

  return (
    <footer className="glass-panel border-t border-white/5 mt-20 backdrop-blur-3xl">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-red-500 to-rose-950 bg-clip-text text-transparent">
              Saitama
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Video Editor and Motion Graphics Designer passionate about
              creating visual stories with style, precision, and creative
              magic.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-semibold text-white tracking-wide uppercase text-xs opacity-70">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-4 text-sm font-medium">
              <Link
                href="/"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                Home
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                About
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                Skills
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h4 className="font-semibold text-white tracking-wide uppercase text-xs opacity-70">
              Connect With Me
            </h4>
            <div className="flex space-x-5">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                    aria-label={link.name}
                  >
                    <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:bg-red-600/20 group-hover:border-red-500/50 transition-all duration-300">
                      <Icon size={20} className="text-gray-400 group-hover:text-red-500 transition-colors" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-16 pt-8 text-center">
          <p className="text-gray-500 text-sm flex items-center justify-center gap-1.5">
            Made with <Heart className="text-red-500 fill-red-500/20" size={14} /> by{" "}
            <a
              href="https://www.linkedin.com/in/the-kartik/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors underline decoration-dotted underline-offset-4"
            >
              Kartik
            </a>{" "}
            © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
