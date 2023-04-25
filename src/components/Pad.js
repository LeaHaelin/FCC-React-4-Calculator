import React from 'react'

export const Pad = () => {
    return (
        <div className='pad'>
            <div className="pad__keys">
                <div className="keys--1">
                    <button className="pad__key--decimal">.</button>
                    <button className="pad__key--0">0</button>
                    <button className="pad__key--divide">/</button>
                    <button className="pad__key--1">1</button>
                    <button className="pad__key--2">2</button>
                    <button className="pad__key--3">3</button>
                    <button className="pad__key--4">4</button>
                    <button className="pad__key--5">5</button>
                    <button className="pad__key--6">6</button>
                    <button className="pad__key--7">7</button>
                    <button className="pad__key--8">8</button>
                    <button className="pad__key--9">9</button>
                </div>
                <div className="keys--2"></div>
                <div className="keys--3"></div>
            </div>
        </div>
    )
}
