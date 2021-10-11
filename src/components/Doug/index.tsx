import * as React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import './style.css';

function Doug(props: any) {
    const [visibility, setVisibility] = useState<string>('0')

    useEffect(() => {
        // if on welcome page, set doug to always be visible once rendered first time
        if (window.location.pathname === '/welcome') {
            setVisibility('1')
        } else if (props.componentVisibility === true) {
            setVisibility('1')
        } else if (props.componentVisibility === false) {
            setVisibility('0')
        }
    });

    return (
        <div style={{ opacity: visibility }} className='outerBox'>
            <div className='innerBox'>
                <div className='doug'>
                    <div className='eyeBox'>
                        <div className='leftEye'></div>
                        <div className='rightEye'></div>
                    </div>
                    <div className='bugBody'> 
                        <div className='mouth'></div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Doug;