import * as React from 'react';
import { useState } from 'react';
import Helmet from 'react-helmet';
import ExecuteProtocolComponent from '../components/P9ExecuteProtocol';
import Doug from '../components/Doug';
import SpeechBox from '../components/SpeechBox';

const username = localStorage.getItem('username');

interface DialogueInterface {
    dialogue?: string[]
    componentVisibility?: boolean
}

const executeHint: DialogueInterface = {
    dialogue: [
        'So I see you\'ve met the "genius" who made me.',
        'Too bad it\'s too late.',
        'I\'ve grown...',
        'I\'ve...',
        's p r e a d .',
        'Sorry, that was a little melodramatic.',
        'See you around, ' + username + '.'
    ],
    componentVisibility: false
}

function ExecuteProtocol(props: typeof executeHint) {
    const [ data, setData ] = useState<any>(executeHint);

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
            <Helmet><title>Execute</title></Helmet>
            <button onClick={() => handleHintClick()} style={{ border: 'none', backgroundColor: 'inherit', color: 'red', position: 'absolute', left: '65%', top: '25px', width: '10rem' }}><h3>Good luck.</h3></button>
            <ExecuteProtocolComponent />
            <Doug {...data} />
            <SpeechBox {...data} />
        </>
    )
}

export default ExecuteProtocol;