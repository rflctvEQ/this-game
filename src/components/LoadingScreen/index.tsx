import * as React from 'react';
import { useEffect, useState } from 'react';
import './style.css';

function LoadingScreen() {
    const [quip, setQuip] = useState<string>('Loading game...');

    const quipArray = [
        'Waiting for server...',
        'Logging you in...',
        'Rendering...',
        'Thank god you\'re here'
    ]

    useEffect(() => {
        if (quip === 'Loading game...') {
            setTimeout(() => {
                setQuip(quipArray[0]);
            }, 4000)
        } else if (quip === quipArray[0]) {
            setTimeout(() => {
                setQuip(quipArray[1]);
            }, 3000)
        } else if (quip === quipArray[1]) {
            setTimeout(() => {
                setQuip(quipArray[2])
            }, 2000)
        } else if (quip === quipArray[2]) {
            setTimeout(() => {
                setQuip(quipArray[3])
            }, 1999)
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