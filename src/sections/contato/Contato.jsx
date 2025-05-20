import React from "react";
import "./Contato.css"; // Corrigindo a importação do CSS
import ContImg from "../../assets/Imgs/contato.jpg";
import HomemCont from '../../assets/Imgs/homemCont.png';
import Cta from "../../assets/components/cta/Cta";

function Contato() {
  return (
    <section className="contato">
      <img src={ContImg} alt="Imagem de fundo" className="contImg" />
      <img src={HomemCont} alt="Homem" className="homemCont" />
      <div className="contContainer">
        <h2>Precisa de algum equipamento</h2>
        <h3>Seu voto de confiança será recompensado</h3>
        <p>Fale com algum de nosos especialistas,<br />caso ainda tenha alguma duvida</p>
        <Cta
          text="Fale com um especialista"
          size="large"
          link="https://api.whatsapp.com/send?phone=5511999999999"
        />
      </div>
    </section>
  );
}
export default Contato;
