import * as React from 'react';
import Helmet from 'react-helmet';
import Welcome from '../components/P3Welcome';
import Doug from '../components/Doug';
import SpeechBox from '../components/SpeechBox';

interface DialogueInterface {
    dialogue?: string[]
}

const dialogueData: DialogueInterface = {
    dialogue: [
        'Oh, hey! I finally found you!',
        'You shouldn\'t be here...',
        'I\'m Doug, a bug stuck in the server of this game.',
        'I\'m gonna try to get you out of here.',
        'Just click HINT and I\'ll find you again.',
        'We can do this... together.'
    ]
}

function WelcomeDoug(props: typeof dialogueData) {
    // console.log(dialogueData);
    // console.log('Page props: ', dialogueData.dialogue)

    return (
        <>
            <Helmet>Welcome</Helmet>
            <Welcome />
            <Doug />
            <SpeechBox {...dialogueData.dialogue!} />
        </>
    )
}

export default WelcomeDoug;