import { useEffect, useRef } from 'react';
import './Particles.css';

const Particles = ({ count = 10 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Limpar partículas existentes
    container.innerHTML = '';

    // Criar partículas
    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Tamanho aleatório entre 5px e 15px
      const size = Math.random() * 10 + 5;
      
      // Posição aleatória
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      
      // Atraso de animação aleatório
      const delay = Math.random() * 5;
      
      // Duração da animação aleatória
      const duration = Math.random() * 10 + 10;
      
      // Aplicar estilos
      Object.assign(particle.style, {
        width: `${size}px`,
        height: `${size}px`,
        left: `${posX}%`,
        top: `${posY}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        opacity: Math.random() * 0.3 + 0.1, // Opacidade entre 0.1 e 0.4
      });
      
      container.appendChild(particle);
    }

    // Limpar ao desmontar
    return () => {
      container.innerHTML = '';
    };
  }, [count]);

  return <div ref={containerRef} className="particles-container" />;
};

export default Particles;
