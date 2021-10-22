import * as React from 'react';
import { useState } from 'react';
import './style.css';

function BalloonAndImperative() {
    const [ horizontalPos, setHorizontalPos ] = useState<string>('30%');
    const [ verticalPos, setVerticalPos ] = useState<string>('30%');

    const setRandomBalloonPos = (min: number, max: number) => {
        min = Math.ceil(min);
        max = Math.floor(max);

        const randomHorizontalValue: number = Math.floor(Math.random() * (max-min) + min);
        const randomVerticalValue: number = Math.floor(Math.random() * (max-min) + min);

        setHorizontalPos(`${randomHorizontalValue}%`);
        setVerticalPos(`${randomVerticalValue}%`);
    }

    return (
        <section className='popWrapper'>
            <h1 className='popTitle'>Pop the balloon!</h1>
            <div className='balloonContainer'>
                <div className='balloonWrapper' style={{ left: horizontalPos, top: verticalPos }} onClick={() => setRandomBalloonPos(10, 80)}>
                    <div className="balloon balloon-red">
                        <div className="balloon-ref"></div>
                        <span className="top-c"></span>
                        <span className="left-c"></span>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default BalloonAndImperative;