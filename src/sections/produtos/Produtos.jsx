import { useEffect, useState } from 'react';
import { products } from '../../assets/data/products';
import ProductCard from '../../assets/components/cardprodu/Cardpro';
import Particles from '../../components/Particles';
import Cta from "../../assets/components/cta/Cta";
import './Produtos.css';

function ProductSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleProducts, setVisibleProducts] = useState(4);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const toggleShowAll = () => {
    setShowAll(!showAll);
    setVisibleProducts(showAll ? 4 : products.length);
  };

  const displayedProducts = showAll ? products : products.slice(0, visibleProducts);

  return (
    <section className={`product-section ${isVisible ? 'visible' : ''}`} id="produtos">
      <Particles count={15} />
      <div className="container">
        <div className="product-section-header">
          <h2>Encontre o equipamento certo para o seu serviço</h2>
          <p>Nossas soluções em equipamentos para construção civil oferecem qualidade e desempenho para atender às suas necessidades.</p>
        </div>

        <div className="product-grid">
          {displayedProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="product-item"
              style={{
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
                animation: isVisible ? `fadeInUp 0.5s ease-out forwards ${index * 0.1}s` : 'none'
              }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          marginTop: '40px',
          paddingTop: '20px',
          borderTop: '1px solid rgba(0,0,0,0.1)',
          position: 'relative',
          zIndex: 1000
        }}>
          <button 
            onClick={toggleShowAll}
            style={{
              background: 'linear-gradient(135deg, #f7c100 0%, #f8a21a 100%)',
              color: '#1a1a1a',
              border: 'none',
              borderRadius: '50px',
              padding: '14px 32px',
              fontSize: '16px',
              fontWeight: 700,
              cursor: 'pointer',
              fontFamily: 'Montserrat, sans-serif',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              boxShadow: '0 4px 15px rgba(247, 193, 0, 0.3)',
              minWidth: '220px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              zIndex: 1001
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 7px 20px rgba(247, 193, 0, 0.4)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(247, 193, 0, 0.3)';
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = 'translateY(1px)';
              e.currentTarget.style.boxShadow = '0 2px 10px rgba(247, 193, 0, 0.4)';
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 7px 20px rgba(247, 193, 0, 0.4)';
            }}
          >
            {showAll ? 'Ver Menos Produtos' : 'Ver Mais Produtos'}
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductSection;
