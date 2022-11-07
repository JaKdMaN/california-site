import React from 'react';
import cl from './Main.module.scss';
import main1 from 'assets/images/main1.png';
import CaButton from '../../CaButton/CaButton';
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";


import {Navigation, Pagination} from "swiper";

const Main = () => {
    return (
        <main className={cl.main}>
            <Swiper
                navigation
                pagination={{
                    clickable: true
                }}

                loop
                modules={[Navigation, Pagination]}
            >

                <SwiperSlide>
                    <div className={cl.main__block}>
                        <div className={cl.main__block__left}>
                            <h2 className={cl.main__block__headline}>
                                The new phones are here take a look.
                            </h2>
                            <p className={cl.main__block__description}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam,
                                tempor.
                                Faucibus morbi turpis.
                            </p>
                            <CaButton>Explore</CaButton>
                        </div>
                        <div className={cl.main__block__image}>
                            <img src={main1} alt="13pro"/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={cl.main__block}>
                        <div className={cl.main__block__left}>
                            <h2 className={cl.main__block__headline}>
                                The new phones are here take a look.
                            </h2>
                            <p className={cl.main__block__description}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam,
                                tempor.
                                Faucibus morbi turpis.
                            </p>
                            <CaButton>Explore</CaButton>
                        </div>
                        <div className={cl.main__block__image}>
                            <img src={main1} alt="13pro"/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={cl.main__block}>
                        <div className={cl.main__block__left}>
                            <h2 className={cl.main__block__headline}>
                                The new phones are here take a look.
                            </h2>
                            <p className={cl.main__block__description}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam,
                                tempor.
                                Faucibus morbi turpis.
                            </p>
                            <CaButton>Explore</CaButton>
                        </div>
                        <div className={cl.main__block__image}>
                            <img src={main1} alt="13pro"/>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </main>
    );
};

export default Main;
