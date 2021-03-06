import { Helmet } from 'react-helmet';
import * as React from 'react'
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import './style.css'

function TypeName() {
    const [ nameState, setNameState ] = useState<string>('here');
    const [ visible, setVisible ] = useState<string>('none');
    const username = nameState.trim();
    
    useEffect(() => {
        // button to continue appears when user enters name 
        if (username !== 'here' && username !== '') {
            setVisible('initial');
        } else {
            setVisible('none');
        }
    }, [username, nameState])

    const history = useHistory();

    // save name to localStorage and send user to next page 
    const btnHandler = () => {
        localStorage.setItem('username', username);
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
                    </h1>
                    <h1 className='typeHere'>
                    <input 
                        className='inputHere' 
                        value={nameState} 
                        onChange={e => setNameState(e.target.value)}>
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