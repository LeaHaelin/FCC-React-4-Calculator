import React from 'react'

export const Nav = () => {
    return (
        <div className='nav'>
            <h1 className='nav__logo'>calc</h1>
            <div className="theme">
                <h2 className="theme__text">theme</h2>
                <div className="theme__container">
                    <p className="theme__num">1 2 3</p>
                    <div className="theme__btns">
                        <button className="theme__btn--1"></button>
                        <button className="theme__btn--2"></button>
                        <button className="theme__btn--3"></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
