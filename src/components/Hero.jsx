import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check screen width
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // check on load

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Sarthak</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Class 11 student with a deep love for chess ♟️
            <br className='sm:block hidden' />
            Passionate about video editing and tech 🔧🎬
          </p>
        </div>
      </div>

      {/* ✅ Conditionally render 3D only on desktop */}
      {!isMobile ? (
        <ComputersCanvas isMobile={isMobile} />
      ) : (
        <div className='absolute bottom-0 w-full text-center text-white text-sm p-4'>
          <p>3D content is best viewed on desktop 💻</p>
        </div>
      )}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
