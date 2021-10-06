import * as React from 'react';
import { useState, useEffect } from 'react';
import './style.css';

function SpeechBox(props: string[]) {
    const [ index, setIndex ] = useState<number>(0);

    const handleNextBtn = () => {
        // number of dialogue items in props
        const dialogueItemsLength: number = Object.keys(props).length - 1;
        
        if (index < dialogueItemsLength) {
            setIndex(index + 1)
        } else {
            
        }
    }


    // console.log('component props: ', props);
    return (
        <div className='speechBoxWrapper'>
            <div className='speechBox'>
                <p className='speechText'>{props[index]}</p>
            </div>
            <button className='nextBtn' onClick={()=>handleNextBtn()}>Next</button>
        </div>
    )
};

export default SpeechBox;