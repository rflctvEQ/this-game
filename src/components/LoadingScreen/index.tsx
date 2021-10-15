import * as React from 'react';
import { useEffect, useState } from 'react';
import './style.css';

function LoadingScreen() {
    const [quip, setQuip] = useState<string>('Loading game...');

    const quipArray = [
        'Waiting for server...',
        'Logging you in...',
        'Rendering...',
        'Who\'s there?'
    ]

    useEffect(() => {
        if (quip === 'Loading game...') {
            setTimeout(() => {
                setQuip(quipArray[0]);
            }, 2000)
        } else if (quip === quipArray[0]) {
            setTimeout(() => {
                setQuip(quipArray[1]);
            }, 1500)
        } else if (quip === quipArray[1]) {
            setTimeout(() => {
                setQuip(quipArray[2])
            }, 1000)
        } else if (quip === quipArray[2]) {
            setTimeout(() => {
                setQuip(quipArray[3])
            }, 1400)
        }
    })

    return (
        <div className='outerWrapper'>
            <div className='innerWrapper'>
                <div className='headingWrapper'>
                    <h1 className='loadingText'>{quip}</h1>
                </div>
                {/* loading animation */}
                <div className="animationWrapper">
                    <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
            </div>
        </div>
    )
}

export default LoadingScreen;