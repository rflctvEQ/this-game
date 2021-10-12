import * as React from 'react';
import { useState } from 'react';
import Helmet from 'react-helmet';
import DifficultQuestion from '../components/P5DifficultQuestion';
import HiddenDevText from '../components/P5HiddenDev';
import Doug from '../components/Doug';
import SpeechBox from '../components/SpeechBox';

interface DialogueInterface {
    dialogue?: string[]
    componentVisibility?: boolean
}

const hiddenHint: DialogueInterface = {
    dialogue: [
        'I\'m detecting words hidden around here somewhere...',
        'I wonder if you can highlight them?'
    ],
    componentVisibility: false
}

function HiddenDev(props: typeof hiddenHint) {
    const [ data, setData ] = useState<any>(hiddenHint);

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
            <Helmet><title>Difficult Question</title></Helmet>
            <button onClick={() => handleHintClick()} style={{ border: 'none', backgroundColor: 'inherit', color: 'red', position: 'absolute', left: '83%', top: '25px' }}><h3>HINT</h3></button>
            <DifficultQuestion />
            <Doug {...data} />
            <SpeechBox {...data} />
            <HiddenDevText />
        </>
    )
}

export default HiddenDev;