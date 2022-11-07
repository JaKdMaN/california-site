import React from 'react';
import cl from './Sell.module.scss';
import CaHeadline from "../../CaHeadline/CaHeadline";
import {sellsItems} from "../../../data/SellsItems";
import SellsItem from "../components/SellsItem/SellsItem";
import {Row} from "react-bootstrap";

const Sell = () => {
    return (
        <section className={cl.sales}>
            <CaHeadline>
                Save on our most selled items.
            </CaHeadline>
            <p className='description'>Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</p>
            <Row className={cl.sales__items}>
                {sellsItems.map(item => {
                      return <SellsItem
                            key={item.id}
                            imgUrl={item.imgUrl}
                            title={item.title}
                            description={item.description}
                            price={item.price}
                        />
                    })
                }
            </Row>
        </section>

    );
};

export default Sell;
