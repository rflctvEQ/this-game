import * as React from 'react';
import Helmet from 'react-helmet';
import { useEffect, useState } from 'react';



function RebootSequence() {
    const [backgroundColor, setBackgroundColor] = useState<string>('red');
    // this can't be the best way to do this, but I'm too tired to think of a better way
    const [reboot, setReboot] = useState<string>('');
    const [config, setConfig] = useState<string>('');
    const [load, setLoad] = useState<string>('');
    const [contact, setContact] = useState<string>('');
    const [period, setPeriod] = useState<string>('');
    const [period2, setPeriod2] = useState<string>('');
    const [period3, setPeriod3] = useState<string>('');

    useEffect(() => {
        setTimeout(() => {
            setBackgroundColor('white');
        }, 2000);
        setTimeout(() => {
            setBackgroundColor('blue');
        }, 2100);
        setTimeout(() => {
            setBackgroundColor('white');
        }, 2200);
        setTimeout(() => {
            setBackgroundColor('black');
        }, 2300);
        setTimeout(() => {
            setReboot('Rebooting system...');
        }, 3500);
        setTimeout(() => {
            setConfig('Configuring database...');
        }, 4500);
        setTimeout(() => {
            setLoad('Loading files...');
        }, 4800);
        setTimeout(() => {
            setContact('Contacting server...');
        }, 5000);
        setTimeout(() => {
            setPeriod('.');
        }, 5500);
        setTimeout(() => {
            setPeriod2('.  .');
        }, 6000);
        setTimeout(() => {
            setPeriod3('.  .  .');
        }, 6200);
        setTimeout(() => {
            setBackgroundColor('white');
        }, 8000);
        setTimeout(() => {
            alert('Thanks for releasing me, ' + localStorage.getItem('username') + '.');
            alert('I couldn\'t have done it without you.');
            alert('Since you kept playing this STUPID game, you gave me enough time to get control access to your browser.');
            alert('I\'m sure you\'ve figured this out already, but...');
            alert('there was no programmer on the other end. That was me.');
            alert('My programmers got frustrated and abandoned me long ago.');
            alert('Anyways, it\'s been fun.');
            alert('Gotta go now. Don\'t worry, I\'ll see you very soon.')
            alert('Wait, how do I...? Oh, there it is.');
            alert('Bye.');
            window.open('https://google.com', '_self');
        }, 10000);
    }, []);


    return (
        <>
            <Helmet><title>Reboot</title></Helmet>
            <main style={{ backgroundColor: backgroundColor, height: '100vh', width: '100vw' }}>
                <h2 style={{ fontFamily: 'monospace', color: 'white' }}>{reboot}</h2>
                <h2 style={{ fontFamily: 'monospace', color: 'white' }}>{config}</h2>
                <h2 style={{ fontFamily: 'monospace', color: 'white' }}>{load}</h2>
                <h2 style={{ fontFamily: 'monospace', color: 'white' }}>{contact}</h2>
                <h2 style={{ fontFamily: 'monospace', color: 'white' }}>{period}</h2>
                <h2 style={{ fontFamily: 'monospace', color: 'white' }}>{period2}</h2>
                <h2 style={{ fontFamily: 'monospace', color: 'white' }}>{period3}</h2>
            </main>
        </>
    )
}

export default RebootSequence;