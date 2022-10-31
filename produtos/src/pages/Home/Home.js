import "./Home.css";

// Images
import EletronicImg from '../../images/Eletronicos.png'
import HeadsetImg from '../../images/Headset-Desenho.png'

// Hooks
import { Link } from 'react-router-dom'
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

// Components
import ProductDetail from "../../components/ProductDetail";

const Home = () => {

  const { documents: products, loading } = useFetchDocuments("produtos", true, 'newproduct')

  return (
    <>
      <div id='home'>
        <div>
          <h1>Novas tecnologias estão chegando até você!</h1>
          <p>Frete grátis a partir de R$129,90</p>
          <Link to='/products' className='btn btn-home'>Explore!</Link>
        </div>
        <img src={EletronicImg} alt='Eletrônicos'/>
      </div>
      <div id='home2'>
        <h2>Últimos lançamentos</h2>
        <span>Barra laranja</span>   
        <div className="new-products">
        {loading && <p>Carregando...</p>}
        {products && products.length === 0 && (
          <div className='no-products'>
            <p>Não foram encontrados produtos...</p>
          </div>
        )}
        {products && products.map((product) => <ProductDetail key={product.id} product={product}/>)}
        </div>
      </div>
      <div id='home3'>
          <div>
            <h2>Ligue o som!</h2>
            <p>Deixe a música tomar conta de seus ouvidos, experimente nossos fones NoiseCancelling!</p>
          </div>
          <img src={HeadsetImg} alt='fone de ouvido'/>
      </div>
    </>
  );
};

export default Home