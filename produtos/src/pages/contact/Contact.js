import './Contact.css'

const Contact = () => {
    return (
        <div id='contact'>
            <h2>Contato</h2>
            <span className='linha-laranja'>linh</span>
            <p>Encontre a central de atendimento mais próxima de você!</p>
            <p>Nós queremos ouvir sua opinião!</p>
            <p>Ou contate-nos por qualquer um dos meios disponibilizados abaixo:</p>
            <div className='contact-channels'>
                <p>E-mail: reactstore.cac@gmail.com</p>
                <p>Telefone: (61) 98192-9333</p>
                <p>WhatsApp: (61) 98192-9333</p>
            </div>
        </div>
    )
}

export default Contact