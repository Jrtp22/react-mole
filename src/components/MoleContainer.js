
import { useState } from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'

function MoleContainer(props) {
    const [displayMole, setDisplayMole] = useState(false)
    const handleClick = (e) => {
        props.setScore(props.score + 1)
        setDisplayMole(false)
    }

    let display = displayMole ? <Mole setScore={props.setScore} toggle={setDisplayMole} handleClick={handleClick} /> : <EmptySlot toggle={setDisplayMole} />
    return (
        <div style={{'display': 'inline-block', 'width': '30vw'}}>
            {display}
        </div>
    )
}

export default MoleContainer