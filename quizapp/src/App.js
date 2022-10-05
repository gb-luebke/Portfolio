import './App.css';

// Hooks
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'

// Pages
import Home from './pages/Home/Home'
import Game from './pages/Game/Game'

// Data
import { wordsList } from './data/words'

// Components 
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState('')
  const [pickedCategory, setPickedCategory] = useState('')
  const [letters, setLetters] = useState([])

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(3)
  const [score, setScore] = useState(0)

  const [gameOver, setGameOver] = useState(false)

  const pickWordAndCategory = useCallback(() => {

    // Escolher uma categoria aleatória
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

    // Escolher uma palavra aleatória
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return { category, word }
  }, [words])

  // Começar o jogo
  const startGame = useCallback(() => {
    // Limpar todas as letras
    clearLetterStates()

    // Escolher uma palavra
    const {category, word} = pickWordAndCategory()

    let wordLetters = word.split('')

    wordLetters = wordLetters.map((l) => l.toLowerCase())

    setPickedCategory(category)
    setPickedWord(word)
    setLetters(wordLetters)

  }, [pickWordAndCategory])

  // Verifica a letra do input
  const verifyLetter = (letter) => {
    // Passar todas pra minúsculo
    const normalizedLetter = letter.toLowerCase()

    // Checar se a letra já foi utilizada
    if(guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
      alert('Essa letra já foi utilizada!')
      return
    }

    // Adicionar a letra adivinhada ou remover uma chance
    if(letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters, letter,
      ])
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters, normalizedLetter,
      ])
      setGuesses((actualGuesses) => actualGuesses - 1)
    }
  }

  // Reinicia o Jogo
  const retry = () => {
    setScore(0)
    setGuesses(3)
    setGameOver(false)
  }

  // Limpar os states das letras
  const clearLetterStates = () => {
    setGuessedLetters([])
    setWrongLetters([])
  }

  // Checar se as chances acabaram
  useEffect(() => {

    if(guesses === 0) {
      // Fim de jogo e reseta todos os states
      clearLetterStates()
      setGameOver(true)

    }

  },[guesses])

  // Checar condição de vitória
  useEffect(() => {
    const uniqueLetters = [...new Set(letters)]

    // Condição de vitória
    if (guessedLetters.length === uniqueLetters.length) {
      
      //Adicionar ponto
      setScore((actualScore) => (actualScore += 100))

      // Reinicia o jogo com uma nova palavra
      setGuesses(3)
      startGame()
    }

  },[guessedLetters, letters, startGame])

  return (
    <div className='app'>
     <BrowserRouter>
     <Navbar retry={retry}/>
      <Routes>
        <Route path="/" element={<Home startGame={startGame}/>}/>
        <Route path='/game' element={
        <Game 
         verifyLetter={verifyLetter}
         pickedWord={pickedWord}
         pickedCategory={pickedCategory}
         letters={letters}
         guessedLetters={guessedLetters}
         wrongLetters={wrongLetters}
         guesses={guesses}
         score={score}
         retry={retry}
         gameOver={gameOver}
         />}/>
        {/*<Route path='/gameover' element={<GameOver retry={retry} score={score}/>}/>*/}
      </Routes>
      <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
