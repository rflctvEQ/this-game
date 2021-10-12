import * as React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import './style.css';

function Welcome() {
    const [inputState, setInputState] = useState<string>('Welcome to');
    const [visible, setVisible] = useState<string>('none');
    const [characterNumber, setCharacterNumber] = useState<number>();
    const [textColor, setTextColor] = useState<string>('rgb(255, 0, 0)');


    useEffect(() => {
        if (inputState === 'Start' || inputState === 'start' || inputState === 'START') {
            setVisible('initial');
        } else {
            setVisible('none');
        }
        calculateInputWidth();
    });

    // makes input width reactive to text length
    const inputWidth = characterNumber + 'rem';
    const calculateInputWidth = () => {
        let inputLength: number = inputState.length;
        setCharacterNumber(inputLength * 1.375)
    }

    const history = useHistory<string>();
    // change color of 'this game' and send user to next page after a moment
    const btnHandler = () => {
        setTextColor('green');
        setTimeout(() => {
            history.push('/144')
        }, 1500)
    }

    return (
        <>
            <div className='welcomeDiv'>
                <h1 className='welcomeTo'>
                    <input
                        className='welcomeInput'
                        value={inputState}
                        onChange={e => setInputState(e.target.value.trim())}
                        style={{ width: `${inputWidth}` }}>
                    </input>
                </h1>
                <h1 className='thisGame' style={{ color: `${textColor}` }}>this game</h1>
                <button
                    className='continueBtn'
                    style={{ display: `${visible}` }}
                    onClick={() => btnHandler()}>
                    Continue {' '}
                    <BsFillArrowRightCircleFill />
                </button>
            </div>
        </>
    )
};

export default Welcome;