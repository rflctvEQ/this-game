import * as React from 'react';
import { useState } from 'react';
import Helmet from 'react-helmet';
import RhodeIsland from '../components/P7RhodeIsland';
import Doug from '../components/Doug';
import SpeechBox from '../components/SpeechBox';

interface DialogueInterface {
    dialogue?: string[]
    componentVisibility?: boolean
}

const noHint: DialogueInterface = {
    dialogue: [
        'No.'
    ],
    componentVisibility: false
}

function No(props: typeof noHint) {
    const [ data, setData ] = useState<any>(noHint);

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
            <Helmet><title>Rhode Island</title></Helmet>
            <button onClick={() => handleHintClick()} style={{ border: 'none', backgroundColor: 'inherit', color: 'red', position: 'absolute', left: '83%', top: '25px' }}><h3>HINT</h3></button>
            <RhodeIsland />
            <Doug {...data} />
            <SpeechBox {...data} />
        </>
    )
}

export default No;