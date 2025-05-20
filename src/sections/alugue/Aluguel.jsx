import React from "react";
import "./Aluguel.css";
import AluguelImg from "../../assets/Imgs/aluguel.jpg";
import Cta from "../../assets/components/cta/Cta";
import { FaFileAlt } from "react-icons/fa";

function Aluguel() {
  return (
    <div className="aluguel">
      <div className="aluguel-img">
        <img src={AluguelImg} alt="Aluguel" />
      </div>
      <div className="aluguelContainer">
        <div className="text">
          <h3>Alugue com mais facilidade</h3>
          <p>
            A solução completa em equipamentos para construção civil está aqui.
          </p>
          <Cta
            text="Entre em contato"
            size="medium"
            link="https://api.whatsapp.com/send?phone=5511999999999"
          />
        </div>
        <div className="topicos">
          <div className="topico1">
            <FaFileAlt />
            <p>Contratos facilitados</p>
          </div>
          <div className="topico1">
            <FaFileAlt />
            <p>Equipamentos modernos</p>
          </div>
          <div className="topico1">
            <FaFileAlt />
            <p>Suporte técnico especializado</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aluguel;
