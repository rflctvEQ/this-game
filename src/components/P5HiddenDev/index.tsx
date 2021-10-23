import * as React from 'react';
import { useState } from 'react';
import './style.css';

function HiddenDevText() {
    const [ revealText, setRevealText ] = useState<any>({
        color: 'rgb(197, 240, 255)',
        backgroundColor: 'rgb(197, 240, 255)'
    });
    const [ revealSpan, setRevealSpan ] = useState<any>({
        color: 'rgb(197, 240, 255)',
        backgroundColor: 'rgb(197, 240, 255)'
    });

    let i = 0;
    const revealHandler = () => {
        i++;
        console.log(i);

        if (revealSpan.color === 'rgb(197, 240, 255)' && i > 1) {
            setRevealText(() => ({
                color: 'white',
                backgroundColor: 'black'
            }));

            setRevealSpan(() => ({
                color: 'red', 
                backgroundColor: 'black'
            }));
        } else if (revealSpan.color === 'red') {
            setRevealText(() => ({
                color: 'rgb(197, 240, 255)',
                backgroundColor: 'rgb(197, 240, 255)'
            }));
            setRevealSpan(() => ({
                color: 'rgb(197, 240, 255)',
                backgroundColor: 'rgb(197, 240, 255)'
            }));
        };
    };

    return (
        <section onClick={() => revealHandler()} style={{color: revealText.color, backgroundColor: revealText.backgroundColor, fontFamily: 'monospace'}} className='hiddenTextSection'>
            <p className='paragraph1'>
                If you're reading this you've either played too many browser games, or you're getting help. I'll keep it brief. What you've seen so far... is not my game. <span style={{color: revealSpan.color, backgroundColor: revealSpan.backgroundColor}} className='thisGame'>This game </span>is being ripped apart by a bug in the server. And I can't find the damn thing!
            </p>
            <p className='paragraph2'>
                You shouldn't even have access to <span style={{color: revealSpan.color, backgroundColor: revealSpan.backgroundColor}} className='thisGame'>this game</span> since I didn't put it on the internet. But now that you're here, could you help me out? I've deleted and changed a bunch of the following levels to make testing easier. I'll monitor you as you go in case the bug pops up. If it does, DO NOT TRUST HIM.
            </p>
            <p className='paragraph3'>
                Oh yeah, the answer to this puzzle:
            </p>
            <p className='paragraph4'>
                "a simple answer"
            </p>

        </section>
    )
};

export default HiddenDevText;