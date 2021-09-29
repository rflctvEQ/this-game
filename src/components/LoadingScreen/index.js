import React from 'react';
import './style.css';

function LoadingScreen() {

    return(
        <>
            <h1>Loading this game</h1>
            {/* loading animation */}
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </>
    )
}

export default LoadingScreen;