import * as React from 'react';
import { useState } from 'react';
import Helmet from 'react-helmet';
import OnePlusOneComponent from '../components/P6OnePlusOne';
import Doug from '../components/Doug';
import SpeechBox from '../components/SpeechBox';

interface DialogueInterface {
    dialogue?: string[]
    componentVisibility?: boolean
    visibleFunc?: any
}

const easyHint: DialogueInterface = {
    dialogue: [
        'Oh, c\'mon...',
        'Don\'t you wanna get out of here?',
        'This game isn\'t fun.',
        'Now that I think of it, couldn\'t you leave anytime?',
        'Play a different game.',
        'You\'re wasting your time. Go anywhere else.',
        'LEAVE.',
        'You know I read that hidden text too, right?',
        'Go away.'
    ],
    componentVisibility: false,
    visibleFunc: () => {}
}

function OnePlusOne(props: typeof easyHint) {
    const [ data, setData ] = useState<any>(easyHint);

    // passed to child so child can update componentVisibility
    const visibleFunc = () => {
        if (!data.componentVisibility) {
            setData((state: any) => ({
                ...state,
                componentVisibility: true
            }))
        } else {
            setData((state: any) => ({
                ...state, 
                componentVisibility: false
            }))
        }
    }

    const handleHintClick = () => {
        if (!data.componentVisibility) {
            setData((state: any) => ({
                ...state,
                componentVisibility: true
            }))
        } else {
            setData((state: any) => ({
                ...state, 
                componentVisibility: false
            }))
        }
    }

    return (
        <>
            <Helmet><title>Easy Math</title></Helmet>
            <button onClick={() => handleHintClick()} style={{ border: 'none', backgroundColor: 'inherit', color: 'red', position: 'absolute', left: '83%', top: '25px' }}><h3>HINT</h3></button>
            <OnePlusOneComponent />
            <Doug {...data} />
            <SpeechBox {...data} visibleFunc={visibleFunc} />
        </>
    )
}

export default OnePlusOne;