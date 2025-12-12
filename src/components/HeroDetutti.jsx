import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroModa from "../assets/hero-moda.png";
import Arbol from "../assets/Arbol.png";

const HeroWrapper = styled.section`
  width: 100%;
  min-height: 520px;
  background-image: url(${heroModa});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #034f91ff;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    background-size: contain;
    background-position: center;
    padding: 20px;
    gap: 20px;
    min-height: 380px;
    justify-content: flex-start;
    align-items: center;

    /* Overlay para mejorar contraste */
    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, #034f91aa, #034f91dd);
      z-index: 1;
    }

    > * {
      z-index: 2;
    }
  }
`;

const Snowflake = styled(motion.div)`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  opacity: ${({ opacity }) => opacity};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

const Tree = styled(motion.div)`
  width: 180px;
  height: 260px;
  background-image: url(${Arbol});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  bottom: 20px;
  z-index: 5;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

const Lights = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  padding-top: 10px;
  z-index: 20;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

const LightBulb = styled(motion.div)`
  width: 14px;
  height: 22px;
  background: ${({ color }) => color};
  border-radius: 50%;
  box-shadow: 0 0 12px ${({ color }) => color};
`;

export default function HeroDetutti() {
  const isMobile = window.innerWidth < 768;
  const snowflakes = Array.from({ length: 25 });
  const bulbColors = ["#ff3b3b", "#3bff62", "#3bb8ff", "#ffe23b"];

  return (
    <Link to="/moda" style={{ width: "100%", display: "block" }}>
      <HeroWrapper>

        {/* ✨ Luces navideñas */}
        {!isMobile && (
          <Lights>
            {Array.from({ length: 20 }).map((_, i) => (
              <LightBulb
                key={i}
                color={bulbColors[i % bulbColors.length]}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </Lights>
        )}

        {/* 🌲 Árbol izquierdo */}
        {!isMobile && (
          <Tree
            style={{ left: "20px" }}
            initial={{ opacity: 0, y: 40, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
          />
        )}

        {/* 🌲 Árbol derecho */}
        {!isMobile && (
          <Tree
            style={{ right: "20px" }}
            initial={{ opacity: 0, y: 40, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        )}

        {/* ❄️ Nieve */}
        {!isMobile &&
          snowflakes.map((_, i) => {
            const size = 6 + Math.random() * 10;
            const opacity = 0.4 + Math.random() * 0.6;

            return (
              <Snowflake
                key={i}
                size={size}
                opacity={opacity}
                initial={{ y: -220, x: Math.random() * window.innerWidth }}
                animate={{ y: 520 }}
                transition={{
                  duration: 2 + Math.random() * 3,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: i * 0.12,
                }}
              />
            );
          })}
      </HeroWrapper>
    </Link>
  );
}