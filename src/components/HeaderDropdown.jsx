import React from 'react'

function HeaderDropdown(props) {
    const { title, text } = props
    return (
        <div className='header__dropdown'>
            <div className='header__dropdown-head'>
                <div className='container'>
                    <h3>«ВАСИЛИСА» — ВАШ СТИЛЬНЫЙ ДОМАШНИЙ ТЕКСТИЛЬ</h3>
                </div>
            </div>
            <div className='container'>
                <div className='header__dropdown-content'>
                    <h1>{title}</h1>
                    <p>{text}</p>
                    <a href='#'>Перейти в каталог</a>
                </div>
            </div>
        </div>
    )
}

export default HeaderDropdown
