import './App.css';

// Math.js
import * as math from 'mathjs'

// Hooks
import { useState } from 'react'

// Components
import Teclado from './Components/Teclado';
import Visor from './Components/Visor';
import Footer from './Components/Footer';

function App() {
 
  const [value, setValue] = useState('')
  const [numbers, setNumbers] = useState([])
  const [stop, setStop] = useState(false)
  const [operator, setOperator] = useState('')
  
  const resetValue = () => {

    setNumbers([])
    setValue('')
    setStop(false)
    setOperator('')

  }

  const result = () => {

    if(stop === false) {
      setValue(math.evaluate(value))
      setStop(true)
    }

  }

  const addNumber = (key) => {

    if(stop === false) {
      setValue(value + key)
    } else {
      setValue('')
      setStop(false)
      setOperator('')
      setValue(value + key)
    }

  }

  const addOperator = (key) => {

    if(value === '') {
        setValue('')
    }

    if(operator === '') {
      setOperator(key)
      setValue(value + key)
    } else {
      result()
      setValue(value + key)
      setOperator(key)
      setStop(false)
    }

  }

  const handleKeyboard = (key) => {

    if(key === 'c') {
      resetValue()
    } else if (key === 'plus-minus') {
      setValue(value*(-1))
    } else if (key === '%') {
      setValue(value/100)
    } else if(key === '=') {
      result()
    } else if (key === '/' || key === '*' || key === '-' || key === '+') {
      addOperator(key)
    } else {
      addNumber(key)
    }

  }

  return (
    <div className="App">
      <div className='app-container'>
        <h2>CALCULADORA ONLINE</h2>
        <Visor value={value} />
        <Teclado value={value} handleKeyboard={handleKeyboard}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
