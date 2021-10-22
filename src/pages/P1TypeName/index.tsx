import { Helmet } from 'react-helmet';
import * as React from 'react'
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import './style.css'

function TypeName() {
    const [ nameState, setNameState ] = useState<string>('here');
    const [ visible, setVisible ] = useState<string>('none')
    const [ characterNumber, setCharacterNumber ] = useState<number>();
    const username = nameState.trim();

    // makes input width reactive to text length
    const inputWidth = characterNumber + 'rem';

    useEffect(() => {
        // button to continue appears when user enters name 
        if (username !== 'here' && username !== '') {
            setVisible('initial');
        } else {
            setVisible('none');
        }
    }, [username, () => {
        let inputLength: number = nameState.length;
        setCharacterNumber(inputLength * 1.375)
    }])

    const history = useHistory();

    // save name to localStorage and send user to next page 
    const btnHandler = () => {
        localStorage.setItem('username', nameState);
        console.log('name ', localStorage.getItem('username'));
        history.push('/load')
    }

    return (
        <>
            <Helmet>
                <title>Enter name</title>
            </Helmet>
            <main className='wrapper'>
                <div className='typeNameHere'>
                    <h1 className='typeYourName'>
                        Type your name
                        <input 
                            className='inputHere' 
                            value={nameState} 
                            onChange={e => setNameState(e.target.value)} 
                            style={{ width: `${inputWidth}`}}>
                        </input>
                    </h1>
                </div>
                <div className='btnDiv'>
                    <button 
                        className='confirmBtn' 
                        style={{ display: `${visible}` }}
                        onClick={() => btnHandler()}>
                            Continue{' '}
                            <BsFillArrowRightCircleFill />
                    </button>
                </div>
            </main>
        </>
    )
}

export default TypeName;