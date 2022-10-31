import './About.css'

const About = () => {

    return (
        <div id='about'>
            <h2>Sobre</h2>
            <span className='linha-laranja'>lin</span>
            <p>Este projeto foi criado utilizando React e Firebase</p>
            <p>Todos os produtos estão criados no banco de dados Firestore</p>
            <p>O mecanismo de autenticação também está atrelado ao Authentication do Firebase</p>
            <p>O carrinho de compras não está atrelado ao banco de dados, foi criado utilizando-se somente o Hook useReducer</p>
            <p>Outras tecnologias utilizadas: Bootstrap, React-Icons, React-Router, ContextAPI</p>
        </div>
    )
}

export default About