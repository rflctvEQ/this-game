import { Helmet } from 'react-helmet';
import * as React from 'react'
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

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
                    <h1 style={{ textAlign: 'center', marginTop: '20vh', fontSize: '4vh', fontFamily: 'monospace' }}>
                        Type your name
                        <input 
                            className='inputHere' 
                            value={nameState} 
                            onChange={e => setNameState(e.target.value)} 
                            style={{ border: 'none', fontWeight: 500, marginLeft: '7px', width: `${inputWidth}`, backgroundColor: 'inherit'}}>
                        </input>
                    </h1>
                </div>
                <div style={{ width: '100vw', display: 'flex', marginTop: '50px' }}>
                    <button 
                        className='confirmBtn' 
                        style={{ 
                            backgroundColor: 'rgb(132, 255, 186)', 
                            width: '10rem',
                            height: '3rem',
                            marginLeft: 'auto', 
                            marginRight: 'auto', 
                            display: `${visible}`,
                            border: 'none',
                            borderRadius: '2000px',
                            lineHeight: '1',
                            fontSize: '1.5rem'
                        }}
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