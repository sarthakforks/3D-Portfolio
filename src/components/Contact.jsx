import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import { FaDiscord, FaInstagram, FaWhatsapp, FaSnapchatGhost } from "react-icons/fa";

const socialLinks = [
  {
    icon: <FaDiscord className="text-[#7289DA] text-2xl animate-pulse" />,
    label: "Discord",
    href: "https://discord.com/users/sarthak.xd",
    text: "@sarthak.xd",
    glow: "hover:text-[#7289DA]"
  },
  {
    icon: <FaInstagram className="text-pink-500 text-2xl animate-bounce" />,
    label: "Instagram",
    href: "https://instagram.com/sarthak.womp",
    text: "@sarthak.womp",
    glow: "hover:text-pink-500"
  },
  {
    icon: <FaWhatsapp className="text-green-500 text-2xl animate-pulse" />,
    label: "WhatsApp",
    href: "https://wa.me/9303468848",
    text: "9303468848",
    glow: "hover:text-green-500"
  },
  {
    icon: <FaSnapchatGhost className="text-yellow-400 text-2xl animate-bounce" />,
    label: "Snapchat",
    href: "https://www.snapchat.com/add/s4rthak.fr#",
    text: "s4rthak.fr",
    glow: "hover:text-yellow-400"
  },
];

const Contact = () => {
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      {/* Left Part – Socials */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Let's Connect</p>
        <h3 className={styles.sectionHeadText}>Contact Me</h3>

        <div className="mt-8 flex flex-col gap-5">
          {socialLinks.map((link, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, x: 10 }}
              className="flex items-center text-white"
            >
              <span className="mr-3">{link.icon}</span>
              <span className="mr-2 font-medium">{link.label}:</span>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`underline transition-all duration-300 ${link.glow}`}
              >
                {link.text}
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right Part – Earth 3D Canvas */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");