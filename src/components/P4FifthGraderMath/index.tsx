import * as React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import './style.css';

function FifthGradeMath() {
    const [answerValue, setAnswerValue] = useState<string>('');
    const [visible, setVisible] = useState<string>('none');
    // converts input string to number 
    const isNumber: number = parseInt(answerValue)
    const history = useHistory()

    // make button visible if user types in correct answer
    useEffect(() => {
        if (isNumber === 666) {
            setVisible('initial')
        } else {
            setVisible('none');
        }
    })

    const handleContinue = () => {
        history.push('/hidden')
    }

    return (
        <section className='mathWrapper'>
            <h1 className='mathQuestion'>What is 18 x 37?</h1>
            <input
                className='mathAnswer'
                value={answerValue}
                type='number'
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

export default FifthGradeMath;