import Cta from '../cta/Cta';
import './Cardpro.css';

function ProductCard({ name, description, topics, image }) {
  return (
    <div className="card">
      <div className="card-image-container">
        <img 
          src={image} 
          alt={name} 
          className="card-image" 
          onError={(e) => {
            // Fallback para um SVG inline caso a imagem não carregue
            e.target.onerror = null;
            e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 180" width="400" height="180"><rect width="100%" height="100%" fill="%23f8f9fa"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="16" fill="%231a1a1a">Equipamento</text></svg>';
          }}
        />
      </div>
      <div className="card-content">
        <h4>{name}</h4>
        <p>{description}</p>
        <ul>
          {topics.map((topic, index) => (
            <li key={index}>
              {topic}
            </li>
          ))}
        </ul>
        <div className="card-cta">
          <Cta
            text="Solicitar orçamento"
            size="small"
            link="https://api.whatsapp.com/send?phone=5511999999999"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
