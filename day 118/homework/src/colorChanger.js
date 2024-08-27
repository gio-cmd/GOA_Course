import React, { useState } from 'react'

function ColorChanger(){
    let colors = ['red', 'green', 'blue', 'white', 'black']
    let [color, setcolor] = useState(colors[0])

    function changeColor(){
        let index = (colors.indexOf(color) + 1) % colors.length;
        setcolor(colors[index])
    }

    return (
        <div>
            <button onClick={changeColor}>Click here to change div's color</button>

            <div style={{width : '200px', height: '200px', backgroundColor: color}}>

            </div>
        </div>
    )
}

export default ColorChanger