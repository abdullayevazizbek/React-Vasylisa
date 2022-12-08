import React, { useState } from 'react'
import SearchIcon from '../assets/icons/SearchIcon'
import HeartIcon from './../assets/icons/HeartIcon'
import MenuIcon from './../assets/icons/MenuIcon'
import HeaderDropdown from './HeaderDropdown'
import HeaderMenu from './HeaderMenu'





function Header() {
    const [dropdownVisible, setDropdownVisible] = useState(false)
    const [dropdownState, setDropdownState] = useState({})
    const [headerMenuVisible, setHeaderMenuVisble] = useState(false)

    function handleLink(item) {
        console.log(item);
        setDropdownState(item)
        if (dropdownVisible && item.id === dropdownState.id) {
            setDropdownVisible(false)
            setDropdownState({})
        } else {
            setDropdownVisible(true)
        }
    }

    function heandleMenuBtn() {
        if (headerMenuVisible) {
            setHeaderMenuVisblez(false)
        } else {
            setDropdownVisible(false)
            setDropdownState({})
            setHeaderMenuVisble(true)
        }
    }

    const headerLinks = [
        {
            id: 1,
            linkName: 'СПАЛЬНЯ',
            content: {
                title: 'Спальня',
                text: 'Является особым местом в доме, местом, дающим возможность быть самим собой, здесь можно расслабиться, спокойно посидеть или полежать, отдохнуть от напряженного рабочего дня, забот будничных. Поэтому важным является создание в спальной комнате атмосферы уюта и теплоты, оформление интерьера спальни в соответствующем стиле и дизайне.',
                link: '/',
            },
        },
        {
            id: 2,
            linkName: 'Кухня',
            content: {
                title: 'Кухня',
                text: 'Сердце и душа дома. Это место, где мы не только готовим вкусную домашнюю, еду своими руками, но и наслаждаемся чашечкой утреннего кофе, ужинаем в кругу семьи, отдыхаем от мирских забот... Поэтому кухня должна быть – самой лучшей, самой красивой, самой комфортной, самой эргономичной именно для вас! Там все должно быть прекрасно!',
                link: '/',
            },
        },
        {
            id: 3,
            linkName: 'Ванная',
            content: {
                title: 'Ванная',
                text: 'Особая зона в квартире или доме где обязательно должны царить комфорт и уют.  Это своеобразная импровизация домашнего СПА-салона, где можно в полной мере расслабиться, уделить необходимое внимание своей внешности, отдохнуть душой и телом. Поэтому вполне закономерным является желание владельцев дома или квартиры сделать ванную комнату не только максимально функциональной и комфортной, но и стильной, красивой. ',
                link: '/',
            },
        },
        {
            id: 4,
            linkName: 'Гостиная',
            content: {
                title: 'Гостиная',
                text: 'Текстиль в интерьере гостиной способен влиять на восприятие пространства. Благодаря правильно подобранным шторам, диванным подушкам, нежному и мягкому пледу, можно создать неповторимый колорит в дизайне и уют в атмосфере.',
                link: '/',
            },
        },
        {
            id: 5,
            linkName: 'Детская',
            content: {
                title: 'Детская',
                text: 'Играет немаловажную роль в развитии ребенка. В этой комнате малыш играет, учится и занимается другими увлекательными и познавательными занятиями. Текстиль играет важную роль в оформлении детской комнаты. С помощью наших текстильных изделий вы мгновенно сможете изменить тематическое оформление помещения и повысить настроение ребёнка.',
                link: '/',
            },
        },
        {
            id: 6,
            linkName: 'Аксессуары',
            content: {
                title: 'Аксессуары',
                text: '',
                link: '/',
            },
        },
    ]
    const headerIcons = [
        {
            id: 1,
            icon: <SearchIcon />,
            content: '/',
        },
        {
            id: 2,
            icon: <SearchIcon />,
            content: '/',
        },
        {
            id: 3,
            icon: <SearchIcon />,
            content: {
                link: 'Каталог Новости o бренде o компании Партнёрам Отзывы FAQ Контакты ',
            }
        },
    ]
    console.log(headerIcons);
    return (
        <header className='header'>
            <div className='container'>
                <div className='header__row'>
                    <div className='header__logo'>
                        <img src='./images/logo.svg' alt='logo' />
                    </div>

                    <div className='header__navbar'>
                        {headerLinks.map((item) => {
                            return (
                                <button
                                    role='link'
                                    key={item.id}
                                    className={
                                        dropdownState.id === item.id
                                            ? 'header__link open'
                                            : 'header__link'
                                    }
                                    onClick={() => handleLink(item)}
                                >
                                    {item.linkName}
                                </button>
                            )
                        })}
                    </div>

                    {dropdownVisible ? (
                        <HeaderDropdown
                            title={dropdownState?.content?.title}
                            text={dropdownState?.content?.text}
                        />
                    ) : null}
                    <div className='header__icons'>
                        <button className='header__btn'>
                            <SearchIcon />
                        </button>
                        <button className='header__btn'>
                            <HeartIcon />
                        </button>
                        <button className='header__btn'
                            onClick={()=> heandleMenuBtn()}
                            >
                            <MenuIcon />
                        </button>

                    </div>
                </div>
            </div>
            <HeaderMenu open={headerMenuVisible}/>
        </header>
    )
}

export default Header
