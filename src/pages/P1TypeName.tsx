import { Helmet } from 'react-helmet';
import * as React from 'react'
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function TypeName() {
    const [ nameState, setNameState ] = useState<string>('here');
    const [ visible, setVisible ] = useState<string>('none')
    const [ characterNumber, setCharacterNumber ] = useState<number>();

    useEffect(() => {
        // button to continue appears when user enters name 
        if (nameState !== 'here') {
            setVisible('initial');
        } else {
            setVisible('none');
        }
        calculateInputWidth();
    })

    // makes input width reactive to text length
    const inputWidth = characterNumber + 'rem';
    const calculateInputWidth = () => {
        let inputLength: number = nameState.length;
        setCharacterNumber(inputLength * 1.375)
    }

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
            <main className='wrapper' style={{ width: '100vw', height: '100vh' }}>
                <div className='typeNameHere'>
                    <h1 style={{ textAlign: 'center', marginTop: '3rem' }}>
                        Type your name
                        <input 
                            className='inputHere' 
                            value={nameState} 
                            onChange={e => setNameState(e.target.value)} 
                            style={{ border: 'none', fontWeight: 500, marginLeft: '7px', width: `${inputWidth}` }}>
                        </input>
                    </h1>
                </div>
                <div style={{ width: '100vw', display: 'flex' }}>
                    <button 
                        className='confirmBtn' 
                        style={{ backgroundColor: 'lightBlue', width: '6rem', marginLeft: 'auto', marginRight: 'auto', display: `${visible}` }}
                        onClick={() => btnHandler()}>
                            Continue
                    </button>
                </div>
            </main>
        </>
    )
}

export default TypeName;