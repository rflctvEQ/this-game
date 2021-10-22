import * as React from 'react';
import { useState, useEffect } from 'react';
import './style.css';

function SpeechBox(props: any) {
    // console.log('*** props ***', props);
    const [ index, setIndex ] = useState<number>(0);
    const [ noDialogue, setNoDialogue ] = useState<boolean>(false);
    const [ visible, setVisible ] = useState<string>('0');
    const [ propsDialogue, setPropsDialogue ] = useState<string[]>(props.dialogue);
    const [ propsComponentVisibility, setPropsComponentVisibility ] = useState<boolean>(props.componentVisibility);

    // number of dialogue items in props
    const dialogueItemsLength: number = propsDialogue.length - 1;

    useEffect(() => {
        // update dialogue and component visibility when props change
        setPropsDialogue(props.dialogue);
        setPropsComponentVisibility(props.componentVisibility);
        if (window.location.pathname === '/welcome' && index < dialogueItemsLength) {
            setVisible('1');
        } else if (props.componentVisibility && !noDialogue) {
            setVisible('1');
        }
        
    }, [props.dialogue, props.componentVisibility, index, dialogueItemsLength, noDialogue])

    // make component visible when component visibility props is true
    useEffect(() => {
            if (propsComponentVisibility === true && noDialogue){ 
                setVisible('1');
                setNoDialogue(false);
                setIndex(0);
            } 
    }, [propsComponentVisibility])
    
    // go to next dialogue in index or make component invisible if no more dialogue
    const handleNextBtn = () => {
        if (index < dialogueItemsLength) {
            setVisible('1');
            setNoDialogue(false);
            setIndex(index + 1);
        } else {
            setVisible('0');
            setNoDialogue(true);
        }
    }

    // console.log('component props: ', props);
    return (
        <div style={{opacity: visible}} className='speechBoxWrapper'>
            <div className='speechBox'>
                <p className='speechText'>{!noDialogue ? propsDialogue[index] : ''}</p>
            </div>
            <button className='nextBtn' onClick={()=>handleNextBtn()}>Next</button>
        </div>
    )
};

export default SpeechBox;