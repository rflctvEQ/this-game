import * as React from 'react';
import './style.css';

function HiddenDevText() {

    return (
        <section className='hiddenTextSection'>
            <p className='paragraph1'>
                If you're reading this you've either played too many browser games, or you're getting help. I'll keep it brief. What you've seen so far... is not my game. <span className='thisGame'>This game </span>is being ripped apart by a bug in the server. And I can't find the damn thing!
            </p>
            <p className='paragraph2'>
                You shouldn't even have access to <span className='thisGame'>this game</span> since I didn't put it on the internet. But now that you're here, could you help me out? I've deleted and changed a bunch of the following levels to make testing easier. I'll monitor you as you go in case the bug pops up. If it does, DO NOT TRUST HIM.
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