import React, { useEffect, useRef } from 'react'
import bubbles from './/assets/media/highlighter.json'
var chatRef, wordRef;
export function Highlight(t) {
    const words = chatRef.current.children;
    for (let i = 0; i < words.length; i++) {
        let start = words[i].getAttribute('data-start'), end = words[i].getAttribute('data-end');
        start = parseFloat(start).toFixed(2);
        end = parseFloat(end).toFixed(2);
        if (Number(end) < t) {
            if (i > 0) words[i - 1].classList.remove('HL_WORD');
            words[i].classList.add('HL_WORD');
        }

    }
}

const Chat = () => {
    chatRef = useRef();
    wordRef = useRef();

    useEffect(() => {

    })
    return (
        <>
            <div className='chatWIN'>
                <div className='words' ref={chatRef}>
                    {bubbles.map((bubble) => {
                        return bubble.words.map((word) => <span itemRef={wordRef} className='word' data-start={word.start} data-end={word.end}>{word.word}</span>)
                    })}
                </div>
            </div>
        </>
    )
}
export default Chat