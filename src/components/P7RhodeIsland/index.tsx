import * as React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import './style.css';

function RhodeIsland() {
    const [ answerValue, setAnswerValue ] = useState<string>('');
    const [ visible, setVisible ] = useState<string>('none');
    const history = useHistory()
    // set answerValue to lowercase for easier input handling
    const answer: string = answerValue.toLowerCase().trim();

    // make button visible if user types in correct answer
    useEffect(() => {
        if (answer === 'providence') {
            setVisible('initial');
        } else {
            setVisible('none');
        }
    });

    const handleContinue = () => {
        history.push('/pop');
    };

    return (
        <section className='rhodeIslandWrapper'>
            <h1 className='rhodeIslandQuestion'>What is the capital of Rhode Island?</h1>
            <input
                className='rhodeIslandAnswer'
                value={answerValue}
                onChange={e => setAnswerValue(e.target.value)}>
            </input>
            <button
                className='continueBtn'
                style={{ display: `${visible}` }}
                onClick={() => handleContinue()}>
                Continue {' '}
                <BsFillArrowRightCircleFill />
            </button>
        </section>
    )
};

export default RhodeIsland;