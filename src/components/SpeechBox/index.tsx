import * as React from 'react';
import { useState, useEffect } from 'react';
import './style.css';

function SpeechBox(props: any) {
    // console.log('*** props ***', props);
    const [index, setIndex] = useState<number>(0);
    const [noDialogue, setNoDialogue] = useState<boolean>(false);
    const [visible, setVisible] = useState<string>('0');
    // const [propsComponentVisibility, setPropsComponentVisibility] = useState<boolean>(props.componentVisibility);

    // number of dialogue items in props
    const dialogueItemsLength: number = props.dialogue.length - 1;

    useEffect(() => {
        if (window.location.pathname === '/welcome' && index < dialogueItemsLength && props.componentVisibility === true) {
            setVisible('1');
        } else if (props.componentVisibility === true) {
            setVisible('1');
        } 

    }, [props.dialogue, props.componentVisibility, index, dialogueItemsLength]);

    // go to next dialogue in index or make component invisible if no more dialogue
    const handleNextBtn = () => {
        if (index < dialogueItemsLength) {
            setVisible('1');
            setNoDialogue(false);
            setIndex(index + 1);
        } else {
            setVisible('0');
            setIndex(0);
            // set props.componentVisibility to false
            props.visibleFunc();
        }
    };

    // console.log('component props: ', props);
    return (
        <div style={{ opacity: visible }} className='speechBoxWrapper'>
            <div className='speechBox'>
                <p className='speechText'>{!noDialogue ? props.dialogue[index] : ''}</p>
            </div>
            <button className='nextBtn' onClick={() => handleNextBtn()}>Next</button>
        </div>
    )
};

export default SpeechBox;