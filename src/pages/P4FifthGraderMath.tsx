import * as React from 'react';
import { useState } from 'react';
import Helmet from 'react-helmet';
import FifthGradeMath from '../components/P4FifthGraderMath';
import Doug from '../components/Doug';
import SpeechBox from '../components/SpeechBox';

interface DialogueInterface {
    dialogue?: string[]
    componentVisibility?: boolean
}

const mathHint: DialogueInterface = {
    dialogue: [
        '666... creepy.',
        'You could have used a calculator though.',
        'It\'s fine. I\'m not busy or anything anyway.',
        'But seriously? A math question?',
        'Don\'t worry. I\'ll get you out of here.'
    ],
    componentVisibility: false
}


function FifthGraderMath(props: typeof mathHint) {
    const [ data, setData ] = useState<any>(mathHint);

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
            <FifthGradeMath />
            <Doug {...data} />
            <SpeechBox {...data} />
        </>
    )
}

export default FifthGraderMath;