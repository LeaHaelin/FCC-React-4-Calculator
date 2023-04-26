import React from 'react'

export const Pad = () => {
    return (
        <div className='pad'>
            <div className="pad__keys">
                <div className="keys--1">
                    <button className="pad__key--decimal">.</button>
                    <button id='zero' className="pad__key--0">0</button>
                    <button id='divide' className="pad__key--divide">/</button>
                    <button id='one' className="pad__key--1">1</button>
                    <button id='two' className="pad__key--2">2</button>
                    <button id='three' className="pad__key--3">3</button>
                    <button id='four' className="pad__key--4">4</button>
                    <button id='five' className="pad__key--5">5</button>
                    <button id='six' className="pad__key--6">6</button>
                    <button id='seven' className="pad__key--7">7</button>
                    <button id='eight' className="pad__key--8">8</button>
                    <button id='nine' className="pad__key--9">9</button>
                </div>
                <div className="keys--2">
                    <button className="pad__key--delete">del</button>
                    <button id='add' className="pad__key--add">+</button>
                    <button id='subtract' className="pad__key--subtract">-</button>
                    <button id='multiply' className="pad__key--multiply">x</button>
                </div>
                <div className="keys--3">
                    <button id='clear' className="pad__key--reset">reset</button>
                    <button id='equals' className="pad__key--equal">=</button>
                </div>
            </div>
        </div>
    )
}
