import './Home.css'

import { Link } from 'react-router-dom'

const Home = ({ startGame }) => {
    return (
        <div id='home'>
            <h2>
                Secret
                <span>World</span>
            </h2>
            <Link to='/game' className='btn btn-start' onClick={startGame}>
                Iniciar o Jogo
            </Link>
        </div>
    )
}

export default Home