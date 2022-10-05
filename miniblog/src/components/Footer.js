import "./Footer.css";

import { FaGithub, FaLinkedin, FaInstagramSquare } from 'react-icons/fa'

const Footer = () => {
    
    return (
        <footer id='footer-box'>
            <div id='footer'> 
                <p className='name'>Gabriel Luebke Moreira   &copy;2022</p>
                <p>
                    <a href='https://github.com/gb-luebke' target='_blank' rel='noreferrer'>
                        <FaGithub className='icons'/>
                    </a>
                    <a href='https://www.linkedin.com/in/gabriel-luebke/' target='_blank' rel='noreferrer'>
                        <FaLinkedin className='icons'/>
                    </a>
                    <a href="https://www.instagram.com/gb_luebke/" target='_blank' rel='noreferrer'>
                        <FaInstagramSquare  className='icons'/>
                    </a>
                  
                </p>
            </div>
        </footer>
    )
    
};

export default Footer;