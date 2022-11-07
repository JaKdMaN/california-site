import React from 'react';
import cl from './Bests.module.scss';
import {Row} from "react-bootstrap";
import CaHeadline from "../../CaHeadline/CaHeadline";
import BestsItem from "../components/BestsItem/BestsItem";
import {bestsItems} from "../../../data/BestsItems";

const Bests = () => {
    return (
        <section className={cl.bests}>
            <CaHeadline>
                See the best around here
            </CaHeadline>
            <p className='description'>
                Our new Limited Edition Winter Design BESPOKE 4-Door Flex™
            </p>
            <Row className={cl.bests__items}>

                {bestsItems.map(item => {
                    return <BestsItem key={item.id}
                        imgUrl={item.imgUrl}
                        title={item.title}
                        description={item.description}
                    />
                })}
            </Row>
        </section>
    );
};

export default Bests;
