import React from 'react';
import img from 'assets/images/ideas.png';
import arrow from 'assets/images/icons/arrow.svg';
import cl from './Ideas.module.scss';
import CaHeadline from "../../CaHeadline/CaHeadline";
import {Col, Row} from "react-bootstrap";
import CaLink from "../../CalLink/CaLink";

const Ideas = () => {
    return (
        <section className={cl.ideas}>

            <CaHeadline>Ideas have a place here</CaHeadline>
            <p className='description'>Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</p>

            <Row className={cl.ideas__content}>
                <Col xs={12} md={6} className={cl.ideas__image}>
                    <img src={img} alt="img"/>
                </Col>
                <Col xs={12} md={6}>
                    <p className={cl.ideas__text}>
                        We Make It Easy To Find The Great Design Talent, Easier...
                    </p>
                    <p className={cl.ideas__text}>
                        Road Design Handbook For The International Road...
                    </p>
                    <p className={cl.ideas__text}>
                        The Best Kept Secrets About Creative People
                    </p>
                    <p className={cl.ideas__text}>
                        We Make It Easy To Find The Great Design Talent, Easier...
                    </p>
                </Col>
            </Row>
            <CaLink to="#" className={cl.ideas__link}>
                See All
                <img src={arrow} alt="arrow" className={cl.ideas__link__arrow}/>
            </CaLink>
        </section>
    );
};

export default Ideas;
