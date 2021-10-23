import * as React from 'react';
import { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import Welcome from '../components/P3Welcome';
import Doug from '../components/Doug';
import SpeechBox from '../components/SpeechBox';

interface DialogueInterface {
    dialogue?: string[],
    componentVisibility?: boolean
    visibleFunc?: any
}

const dialogueData: DialogueInterface = {
    dialogue: [
        'Oh, hey! There you are!',
        'I thought someone might have come in.',
        'You\'re not really supposed to be here.',
        'I\'m Doug, a bug stuck in the server of this game.',
        'I\'m gonna try to get you out of here.',
        'Just click HINT and I\'ll find you again.',
        'We can do this... together.'
    ],
    componentVisibility: false,
    visibleFunc: () => {}
}

function WelcomeDoug(props: typeof dialogueData) {
    const [visible, setVisible] = useState<string>('none');
    const [data, setData] = useState<any>(dialogueData);
    const [isComponentVisible, setIsComponentVisible] = useState(dialogueData.componentVisibility);

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

    useEffect(() => {
        setTimeout(() => {
            setVisible('initial');
            setIsComponentVisible(true);
            setData((state: any) => ({
                ...state,
                componentVisibility: true
            }))
        }, 10000)
    }, [])

    const handleHintClick = () => {
        if (!data.componentVisibility) {
            setData((state: any) => ({
                ...state,
                dialogue: ['The server is looking for the phrase "Start this game."', 'Is that helpful? I feel like that\'s not helpful.', 'Oh, boy...'],
                componentVisibility: true
            }))
        } else {

            setData((state: any) => ({
                ...state,
                componentVisibility: false
            }))
        }

        // console.log('data from parent page: ', data);
    }

    return (
        <>
            <Helmet><title>Welcome</title></Helmet>
            <button onClick={() => handleHintClick()} style={{ border: 'none', backgroundColor: 'inherit', color: 'red', position: 'absolute', left: '83%', top: '25px', display: visible }}><h3>HINT</h3></button>
            <Welcome />
            {
                (isComponentVisible === true) ?
                    <>
                        <Doug {...data} />
                        <SpeechBox {...data} visibleFunc={visibleFunc} />
                    </> : null
            }
        </>
    )
}

export default WelcomeDoug;