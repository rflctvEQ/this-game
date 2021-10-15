import * as React from 'react';
import { useHistory } from 'react-router';
import './style.css';

function ExecuteProtocolComponent() {
    const history = useHistory();

    const handleButtonClick = () => {
        history.push('/reboot');
    }

    return (
        <section className='executeWrapper'>
            <div className='executeBtn' onClick={() => handleButtonClick()}>
                <h1 className='executeHeading'>Execute</h1>
                <h1 className='killBugHeading'>KILL BUG</h1>
                <h1 className='protocolHeading'>protocol</h1>
            </div>
        </section>
    )
};

export default ExecuteProtocolComponent;