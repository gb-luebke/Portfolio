import './Visor.css'

const Visor = ({ value, handleKeyboard }) => {

    return (
        <div id='visor'>
            <h2 className='value'>
                {value === '' && <span>0</span>}
                {value !== '' && <span>{value}</span>}
            </h2>
        </div>
    )
}

export default Visor