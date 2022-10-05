import './Game.css'

import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

const Game = ({ 
    verifyLetter, 
    pickedCategory, 
    pickedWord, 
    letters, 
    guessedLetters, 
    wrongLetters, 
    guesses, 
    score,
    retry,
    gameOver, 
    }) => {

    const [letter, setLetter] = useState('')
    const letterInputRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()

        verifyLetter(letter)

        setLetter('')

        // Foca no input novamente
        letterInputRef.current.focus()
    }

    return (
        <>
        {!gameOver && 
            <div id='game'>
            <p>Pontuação: {score}</p>
            <p>Adivinhe a palavra:</p>
            <p>Dica sobre a palavra: <span>{pickedCategory}</span></p>
            <p>Você ainda tem {guesses} tentativa(s).</p>
            <div className='wordContainer'>
                {letters.map((letter, i) => 
                guessedLetters.includes(letter) ? (
                    <span className='letter' key={i}>
                        {letter}
                    </span>
                ) : (
                    <span key={i} className='blankSquare'></span>
                )
                )}
            </div>
            <div className='letterContainer'>
                <p>Tente adivinhar uma letra da palavra:</p>
                <form onSubmit={handleSubmit}>
                    <input 
                    type="text"
                    name='letter'
                    maxLength='1'
                    onChange={(e) => setLetter(e.target.value)}
                    required
                    value={letter}
                    ref={letterInputRef}/>
                    <button>Jogar!</button>
                </form>
            </div>
            <div className='wrongLettersContainer'>
                <p>Letras já utilizadas:</p>
                {wrongLetters.map((letter, i) => (
                    <span key={i}>{letter},</span>
                ))}
            </div>
            </div>
        }
        {gameOver &&       
            <div id='gameover'>
                <h2>Fim do Jogo!</h2>
                <h3>A sua pontuação foi:<span>{score}</span></h3>
                <Link to='/' onClick={retry} className='btn btn-restart'>
                    Reiniciar
                </Link>
            </div>}
        </>
    )
}

export default Game