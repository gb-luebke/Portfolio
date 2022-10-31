import './Notfound.css'

// Image
import Error404 from '../../images/Erro 404.png'

import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div id='notfound'>
      <h2>Não há nada aqui...</h2>
      <img src={Error404} alt="Erro 404" />
      <Link to='/' className='btn no-products-btn'>Voltar</Link>
    </div>
  );
};

export default NotFound;