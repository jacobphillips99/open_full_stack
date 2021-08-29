import {React, useState} from 'react'

const History = (props) => {
    if (props.allClicks.length === 0) {
        return (
            <div>
                use the app by pressing the buttons!
            </div>
        )
    }
    return (
        <div>
            button press history: {props.allClicks.join(' ')}
        </div>
    )
}

const SideCounter = () => {
    const [clicks, setClicks] = useState({
        left: 0, right: 0
    })
    const [allClicks, setAllClicks] = useState([])

    const handleLeftClick = () => {
        const newClicks = {
            ...clicks,
            left: clicks.left + 1,
        }
        setAllClicks(allClicks.concat('L'))
        setClicks(newClicks)
    }
    const handleRightClick = () => {
        const newClicks = {
            ...clicks,
            right: clicks.right + 1
        }
        setAllClicks(allClicks.concat('R'))
        setClicks(newClicks)
    }


    return (
            <div>
                {clicks.left}
                <button onClick={handleLeftClick}>left</button>
                <button onClick={handleRightClick}>right</button>
                {clicks.right}
                <History allClicks={allClicks} />
            </div>
        )
    }


// functionals: functions returning functions
// const hello = () => {
//     const eventHandler = () => console.log('hello!!')
//     return eventHandler
// }

export default SideCounter