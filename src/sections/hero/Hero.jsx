import React from "react";
import "./Hero.css"; // Corrigindo a importação do CSS
import HeroImg from "../../assets/Imgs/hero.jpg";
import Cta from "../../assets/components/cta/Cta";
import Logo from "../../assets/Imgs/Logo.png";

function Hero() {
  return (
    <section className="hero">
      <img src={HeroImg} alt="ImgHero" />
      <div className="heroContainer">
        <img src={Logo} alt="Logo" />
        <h1>Titulo da pagína</h1>
        <h3>Sub-titulo</h3>
        <Cta
          text="Fale com um especialista"
          size="large"
          link="https://api.whatsapp.com/send?phone=5511999999999"
        />
      </div>
    </section>
  );
}
export default Hero;
