import { products } from '../../assets/data/products';
import ProductCard from '../../assets/components/cardprodu/Cardpro';
import './Produtos.css';

function ProductSection() {
  return (
    <section className="product-section">
      <div className="product-section-header">
        <h2>Encontre o equipamento certo<br />para o seu serviço</h2>
        <p>Clique no link para conversar com <strong>conosco</strong></p>
      </div>

      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}

export default ProductSection;
