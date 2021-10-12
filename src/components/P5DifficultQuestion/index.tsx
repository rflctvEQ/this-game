import * as React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import './style.css';

function DifficultQuestion() {
    const [ answerValue, setAnswerValue ] = useState<string>('');
    const [ visible, setVisible ] = useState<string>('none');
    const history = useHistory()
    // set answerValue to lowercase for easier input handling
    const answer: string = answerValue.toLowerCase().trim();

    // make button visible if user types in correct answer
    useEffect(() => {
        if (answer === 'a simple answer') {
            setVisible('initial');
        } else {
            setVisible('none');
        }
    });

    const handleContinue = () => {
        history.push('/dont-close-this-tab');
    };

    return (
        <section className='difficultQuestionWrapper'>
            <h1 className='difficultQuestion'>What is the answer to this insanely difficult question?</h1>
            <input
                className='simpleAnswer'
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

export default DifficultQuestion;