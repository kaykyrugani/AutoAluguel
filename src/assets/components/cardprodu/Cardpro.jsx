import { FaCheckCircle,} from 'react-icons/fa';
import Cta from '../cta/Cta';
import './Cardpro.css'; // caso queira separar os estilos

function ProductCard({ name, description, topics, image }) {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <h4>{name}</h4>
      <p>{description}</p>
      <ul>
        {topics.map((topic, index) => (
          <li key={index}>
            <FaCheckCircle color="#1A1A1A" size={14} style={{ marginRight: '5px' }} />
            {topic}
          </li>
        ))}
      </ul>
      <Cta
            text="Entre em contato"
            size="small"
            link="https://api.whatsapp.com/send?phone=5511999999999"
          className="card-cta" // Adicione esta classe específica
      />
    </div>
  );
}

export default ProductCard;
