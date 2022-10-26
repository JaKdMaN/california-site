import React, {FC} from 'react';
import cl from './CaHeader.module.scss';
import logo from 'assets/images/logo.svg';
import search from 'assets/images/icons/search.svg';
import cart from 'assets/images/icons/cart.svg';
import {Container} from "react-bootstrap";

const CaHeader: FC = () => {
    return (
        <header className={cl.header}>
            <Container className={cl.header__section}>
                <div className={cl.header__left}>
                    <img src={logo} alt="logo" className={cl.header__left_logo}/>
                </div>
                <div className={cl.header__right}>
                    <a href="#">
                        <img src={search} alt="search"/>
                    </a>
                    <a href="#" className={cl.header__right_cart}>
                        <img src={cart} alt="cart"/>
                    </a>
                </div>
                <nav className={cl.header__nav}>
                    <a href="#" className={cl.header__link} >all products</a>
                    <a href="#" className={cl.header__link} >solutions</a>
                    <a href="#" className={cl.header__link} >about</a>
                    <a href="#" className={cl.header__link} >support</a>
                </nav>
            </Container>
        </header>
    );
};

export default CaHeader;
