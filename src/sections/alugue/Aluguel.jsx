import React, { useEffect, useRef, useState } from "react";
import "./Aluguel.css";
import { 
  FaFileContract, 
  FaTools, 
  FaHeadset, 
  FaShieldAlt,
  FaTruck,
  FaClock
} from "react-icons/fa";
import Particles from "../../components/Particles";

function Aluguel() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const beneficios = [
    {
      icon: <FaFileContract className="beneficio-icon" />,
      title: "Contratos facilitados",
      description: "Processo de contratação simples e descomplicado"
    },
    {
      icon: <FaTools className="beneficio-icon" />,
      title: "Equipamentos modernos",
      description: "Frota atualizada e em perfeito estado de conservação"
    },
    {
      icon: <FaHeadset className="beneficio-icon" />,
      title: "Suporte especializado",
      description: "Atendimento técnico qualificado e ágil"
    },
    {
      icon: <FaShieldAlt className="beneficio-icon" />,
      title: "Segurança garantida",
      description: "Equipamentos com manutenção preventiva regular"
    },
    {
      icon: <FaTruck className="beneficio-icon" />,
      title: "Entrega ágil",
      description: "Entregamos no local e horário agendados"
    },
    {
      icon: <FaClock className="beneficio-icon" />,
      title: "Flexibilidade",
      description: "Prazos que se adaptam à sua necessidade"
    }
  ];

  return (
    <section 
      className={`aluguel ${isVisible ? 'visible' : ''}`} 
      id="aluguel"
      ref={sectionRef}
    >
      <div className="aluguel-overlay"></div>
      <Particles count={15} />
      
      <div className="aluguel-container">
        <div className="aluguel-content">
          <div className="aluguel-text">
            <h2 className="aluguel-title">Alugue com mais facilidade</h2>
            <p className="aluguel-description">
              A solução completa em equipamentos para construção civil, oferecendo praticidade, 
              qualidade e suporte especializado para o seu negócio.
            </p>
          </div>
          
          <div className="beneficios-grid">
            {beneficios.map((beneficio, index) => (
              <div 
                key={index} 
                className={`beneficio-card ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${0.1 * index}s` }}
              >
                <div className="beneficio-icon-wrapper">
                  {beneficio.icon}
                </div>
                <h3 className="beneficio-title">{beneficio.title}</h3>
                <p className="beneficio-description">{beneficio.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aluguel;
