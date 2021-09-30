import { useEffect, useState } from 'react';
import './style.css';

function LoadingScreen() {
    const [ quip, setQuip ] = useState('Loading game...');

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
            }, 1950)
        }
    })

    return(
        <>
            <h1>{quip}</h1>
            {/* loading animation */}
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </>
    )
}

export default LoadingScreen;