import './Teclado.css'

const Teclado = ({ handleKeyboard }) => {

    return (
        <div>
            <div className="flex-container">
                <button className="btn-keys btn"  onKeyPress={(e) => handleKeyboard(e)} onClick={() => handleKeyboard('c')}>
                    C
                </button>
                <button className="btn-keys btn" onClick={() => handleKeyboard('plus-minus')}>
                    +/-
                </button>
                <button className="btn-keys btn" onClick={() => handleKeyboard('%')}>
                    %
                </button>
                <button className="btn-keys btn" onClick={() => handleKeyboard('/')}>
                    /
                </button>
            </div>
            <div className='flex-container'>
                <button className="btn-keys btn" onClick={() => handleKeyboard('7')}>
                    7
                </button>
                <button className="btn-keys btn" onClick={() => handleKeyboard('8')}>
                    8
                </button>
                <button className="btn-keys btn" onClick={() => handleKeyboard('9')}>
                    9
                </button>
                <button className="btn-keys btn" onClick={() => handleKeyboard('*')}>
                    x
                </button>
            </div>
            <div className='flex-container'>
                <button className="btn-keys btn" onClick={() => handleKeyboard('4')}>
                    4
                </button>
                <button className="btn-keys btn" onClick={() => handleKeyboard('5')}>
                    5
                </button>
                <button className="btn-keys btn" onClick={() => handleKeyboard('6')}>
                    6
                </button>
                <button className="btn-keys btn" onClick={() => handleKeyboard('-')}>
                    -
                </button>
            </div>
            <div className='flex-container'>
                <button className="btn-keys btn" onClick={() => handleKeyboard('1')}>
                    1
                </button>
                <button className="btn-keys btn" onClick={() => handleKeyboard('2')}>
                    2
                </button>     
                <button className="btn-keys btn" onClick={() => handleKeyboard('3')}>
                    3
                </button>     
                <button className="btn-keys btn" onClick={() => handleKeyboard('+')}>
                    +
                </button>     
            </div>
            <div className='flex-container'>
                <button className="btn-keys-double btn" onClick={() => handleKeyboard('0')}>
                    0
                </button>     
                <button className="btn-keys btn" onClick={() => handleKeyboard('.')}>
                    .  
                </button>     
                <button className="btn-keys btn" onClick={() => handleKeyboard('=')}>
                    =
                </button>     
            </div>
        </div>
    )
}

export default Teclado