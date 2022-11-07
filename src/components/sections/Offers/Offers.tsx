import React from 'react';
import cl from './Offers.module.scss';
import CaHeadline from '../../CaHeadline/CaHeadline';
import {offersImages} from "../../../data/OffersImages";

const Offers = () => {
    return (
        <section className={cl.offers}>
            <CaHeadline>
                Shop our latest offers and categories
            </CaHeadline>
            <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam, tempor.
                Faucibus morbi turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className={cl.offers__items}>
                <div className={cl.horizontal}>
                    <div className={cl.offers__item + ' ' + cl.first}>
                        <img src={offersImages.img1} alt=""/>
                        <span className={cl.category}>Laptops</span>
                        <p className={cl.name}>
                            True Laptop <br className='br'/> Solution
                        </p>
                    </div>
                    <div className={cl.offers__item + ' ' + cl.second}>
                        <img src={offersImages.img2} className={cl.image} alt=""/>
                        <div>
                            <span className={cl.category}>Watch</span>
                            <p className={cl.name}>Not just stylisht</p>
                        </div>
                    </div>
                </div>
                <div className={cl.vertical}>
                    <div className={cl.offers__item + ' ' + cl.third}>
                        <img src={offersImages.img3} alt=""/>
                        <span className={cl.category}>Phones</span>
                        <p className={cl.name}>Your day to day <br className='br'/> life</p>
                    </div>
                    <div className={cl.offers__item + ' ' + cl.fourth}>
                        <span className={cl.category}>Tablet</span>
                        <p className={cl.name}>Empower your <br className='br'/>  work</p>
                        <img src={offersImages.img4} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Offers;
