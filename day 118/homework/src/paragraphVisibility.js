import React, { usestate } from 'react'
import Toggle from './toggle'

function ParagraphVsibility(){
    const [isVisible, setIsVisible] = usestate(true)

    const changeParagraph = () =>{
        setIsVisible(!isVisible)
    }

    return (
        <div>
            <p>delete and make it return</p>

            <button onClick={changeParagraph}>
                {isVisible ? 'make it disapear': 'make it appear'}
            </button>


            {isVisible && (<p>This is now visible</p>)}
        </div>

    )
}

export default ParagraphVsibility