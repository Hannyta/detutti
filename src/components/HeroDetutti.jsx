import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// --- WRAPPER PRINCIPAL ---
const HeroWrapper = styled.section`
  width: 100%;
  height: 480px;
  background: linear-gradient(135deg, #005bac, #0aa8bd);
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* FULL WIDTH - sin padding ni bordes */
  margin: 0;
  padding: 0;
  border-radius: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    height: auto;
    padding: 30px 20px;
    gap: 30px;
  }
`;

// --- TEXTO A LA IZQUIERDA ---
const LeftContent = styled.div`
  z-index: 10;
  max-width: 460px;
  color: white;

  /* Como quitamos padding del hero, lo ponemos aquí */
  padding-left: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-left: 0;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 56px;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 0 12px #ffffffaa;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 38px;
  }
`;

const Subtitle = styled.p`
  font-size: 22px;
  margin-top: 10px;
  opacity: 0.9;
`;

const CTA = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  background: #ff1744;
  padding: 14px 32px;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  border-radius: 10px;
  text-decoration: none;
  transition: 0.25s;

  &:hover {
    background: #ff4569;
    transform: scale(1.05);
  }
`;

// --- DECORACIONES DERECHA ---
const DecorArea = styled.div`
  width: 420px;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Pedestal = styled(motion.div)`
  width: 300px;
  height: 140px;
  background: #ffffff22;
  border-radius: 50%;
  position: absolute;
  bottom: 40px;
  box-shadow: 0 0 25px #ffffff55;
`;

const Product = styled(motion.div)`
  width: 200px;
  height: 200px;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 20px #00000033;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

const Tree = styled(motion.div)`
  width: 120px;
  height: 160px;
  background: #ffffff33;
  border-radius: 12px;
  position: absolute;
  right: 20px;
  top: 40px;
  box-shadow: 0 0 10px #ffffff88;
`;

const Snowflake = styled(motion.div)`
  width: 10px;
  height: 10px;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  opacity: 0.8;
`;

// --- COMPONENTE ---
export default function HeroDetutti() {
  const snowflakes = Array.from({ length: 20 });

  return (
    <HeroWrapper>
      <LeftContent>
        <Title>Hasta 20% OFF</Title>
        <Subtitle>Ofertas especiales de Navidad 🎄 Aprovechá ahora</Subtitle>
        <CTA to="/tienda">Comprar ahora</CTA>
      </LeftContent>

      <DecorArea>
        <Pedestal
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        />

        <Product
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: -10, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Producto
        </Product>

        <Tree
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />

        {snowflakes.map((_, i) => (
          <Snowflake
            key={i}
            initial={{ y: -20, x: Math.random() * 300 }}
            animate={{ y: 300 }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.15,
            }}
          />
        ))}
      </DecorArea>
    </HeroWrapper>
  );
}
