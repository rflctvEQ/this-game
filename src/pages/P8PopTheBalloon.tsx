import { Helmet } from 'react-helmet';
import * as React from 'react'
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import BalloonAndImperative from '../components/P8BalloonAndImperative';
import Doug from '../components/Doug';
import SpeechBox from '../components/SpeechBox';

//TODO: Think about best way to make text box visible 
//TODO: without making doug visible

function PopTheBalloon() {
    // visibility state for HELP button
    const [ visible, setVisible ] = useState<string>('none');

    return (
        <>
            <Helmet><title>Pop the Balloon!</title></Helmet>
            <BalloonAndImperative />
            {/* <Doug />
            <SpeechBox /> */}
        </>
    )
}

export default PopTheBalloon;