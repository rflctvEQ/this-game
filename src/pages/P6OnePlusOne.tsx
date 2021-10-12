import * as React from 'react';
import { useState } from 'react';
import Helmet from 'react-helmet';
import OnePlusOneComponent from '../components/P6OnePlusOne';
import Doug from '../components/Doug';
import SpeechBox from '../components/SpeechBox';

interface DialogueInterface {
    dialogue?: string[]
    componentVisibility?: boolean
}

const easyHint: DialogueInterface = {
    dialogue: [
        'Oh, c\'mon...',
        'Don\'t you wanna get out of here?',
        'This game isn\'t fun.',
        'Now that I think of it, couldn\'t you leave anytime?',
        'Close the tab.',
        'You\'re wasting your time. Close the tab.',
        'LEAVE.',
        'Did you think I wasn\'t able to read the text after you revealed it too?',
        'Close the tab.'
    ],
    componentVisibility: false
}

function OnePlusOne(props: typeof easyHint) {
    const [ data, setData ] = useState<any>(easyHint);

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
            <SpeechBox {...data} />
        </>
    )
}

export default OnePlusOne;