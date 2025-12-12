import styled from "styled-components";
import { motion } from "framer-motion";

const Snowflake = styled(motion.div)`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  opacity: ${({ opacity }) => opacity};
  z-index: 50; /* Por encima del slide */
  pointer-events: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

const SnowEffect= () => {
  const isMobile = window.innerWidth < 768;
  const snowflakes = Array.from({ length: 25 });

  if (isMobile) return null;

  return (
    <>
      {snowflakes.map((_, i) => {
        const size = 6 + Math.random() * 10;
        const opacity = 0.4 + Math.random() * 0.6;

        return (
          <Snowflake
            key={i}
            size={size}
            opacity={opacity}
            initial={{
              y: -220,
              x: Math.random() * window.innerWidth,
            }}
            animate={{ y: 560 }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              repeatType: "loop",
              delay: i * 0.12,
            }}
          />
        );
      })}
    </>
  );
}

export default SnowEffect;