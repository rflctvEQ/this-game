import { Helmet } from 'react-helmet';
import * as React from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import BalloonAndImperative from '../../components/P8BalloonAndImperative';
import Doug from '../../components/Doug';
import SpeechBox from '../../components/SpeechBox';
import './style.css';

interface DialogueInterface {
    dialogue?: string[]
    componentVisibility?: boolean
    visibleFunc?: any
}

const popHint: DialogueInterface = {
    dialogue: [
        'Just pop the balloon already.',
        'Or, you know...',
        'You could always just go away.'
    ],
    componentVisibility: false,
    visibleFunc: () => {}
}

function PopTheBalloon(props: typeof popHint) {
    const [ data, setData ] = useState<any>(popHint);
    // used to check whether HINT clicked
    const [ hintClicked, setHintClicked ] = useState<boolean>(false);
    // used to track how many times user has clicked balloon
    const [ balloonClicked, setBalloonClicked ] = useState<number>(0);
    // track whether to show button
    const [ help, setHelp ] = useState<boolean>(false);
    // text within button
    const [ btnText, setBtnText ] = useState<string>('HELP!!!');

    const history = useHistory();

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

        setHintClicked(true);
        console.log(hintClicked)
    };

    const handleBalloonClick = () => {
        setBalloonClicked(balloonClicked + 1);

        if (hintClicked && balloonClicked > 4) {
            setHelp(true);
            setData((state: any) => ({
                dialogue: [
                    'What a pesky thing!',
                    'At least I was able to locate the bug.',
                    'Thanks for your help.',
                    'Ok, let me see...',
                    'WOW. Ummm, I haven\'t seen this before.',
                    'Has the bug tried to get you to leave the game?',
                    'It wrote code that will allow it to spread to your device...',
                    '... as soon as you leave the game.',
                    'What a nightmare.',
                    'I can fix this. Don\'t worry, I can fix this.', 
                    'I just need to google something real quick...',
                    '...',
                    'Ok, that should do it. Click CONTINUE to go to the final level.',
                    'You should know what to do.',
                    'Thanks for your help.'
                ],
                componentVisibility: true
            }))

            // setHelp(false)
        };
    };

    const handleHelpBtn = () => {
        if (btnText === 'HELP!!!') {
            setBtnText('CONTINUE ');
        } else if (btnText === 'CONTINUE ') {
            history.push('/execute');
        }
    }

    return (
        <>
            <Helmet><title>Pop the Balloon!</title></Helmet>
            {
                !help
                ?
                <main>
                    <button onClick={() => handleHintClick()} style={{ border: 'none', backgroundColor: 'inherit', color: 'red', position: 'absolute', left: '83%', top: '25px' }}><h3>LOL</h3></button>
                    <section onClick={() => handleBalloonClick()}>
                        <BalloonAndImperative />
                    </section>
                    <Doug {...data}/>
                    <SpeechBox {...data} visibleFunc={visibleFunc} />
                </main>
                :
                <main>
                    <button className='helpBtn' onClick={() => handleHelpBtn()}>
                        {btnText}
                        {
                            btnText === 'CONTINUE '
                            ?
                            <BsFillArrowRightCircleFill />
                            :
                            null
                        }
                    </button>
                    {
                        btnText === 'CONTINUE '
                        ?
                        <div className='devSpeechWrapper'>
                            <SpeechBox {...data} visibleFunc={visibleFunc} />
                        </div>
                        :
                        null
                    }
                </main>
            }
        </>
    )
}

export default PopTheBalloon;