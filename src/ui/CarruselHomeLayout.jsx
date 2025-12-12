import styled from "styled-components";

export const CarruselHomeLayout = styled.div`
  width: 100%;
  padding: 0 0 0.25rem;
  background: transparent;

  h2 {
    text-align: center;
    margin: 0 0 0.5rem;
    font-weight: 700;
    font-size: clamp(1.6rem, 2vw, 2rem);
    color: #005BAC;
  }

  .slide-group { display: flex; justify-content: center; gap: 8px; padding: 0 12px; margin-bottom: 12px; }

  .tarjeta-wrapper { width: 280px; height: 300px; display: flex; align-items: stretch; margin: 0 1px; flex-shrink: 0 }
  .tarjeta-wrapper img { width: 140px; height: 140px }
  .tarjeta-wrapper h3 { font-size: 0.9rem; line-height: 1.2 }
  .tarjeta-wrapper .cuotas { transform: scale(0.9); transform-origin: left }

  .carousel-item { animation: fadeIn 0.4s ease-in-out; transition: opacity 1s ease-in-out, transform 0.6s ease-in-out }
  .carousel-inner { margin-bottom: 0 }
  .cta { margin: 0 }

  @keyframes fadeIn { from { opacity:0; transform: translateY(10px) } to { opacity:1; transform: translateY(0) } }

  .carousel-control-prev-icon, .carousel-control-next-icon { background-color: #0aa8bdc0; border-radius: 20%; padding: 5px }
  .carousel-control-prev, .carousel-control-next { top: 50%; transform: translateY(-50%) }

  @media (max-width: 768px) {
    .slide-group { flex-wrap: nowrap; overflow-x: auto; scroll-snap-type: x mandatory; scroll-behavior: smooth; -webkit-overflow-scrolling: touch }
    .tarjeta-wrapper { scroll-snap-align: center }
  }
`;

export default CarruselHomeLayout;
