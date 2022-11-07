import React, {FC} from 'react';
import cl from './SellsItem.module.scss';
import {Col} from "react-bootstrap";

interface ISaleItemProps {
    readonly imgUrl: string;
    readonly title: string;
    readonly description: string;
    readonly price: string;
}

const SellsItem: FC<ISaleItemProps> = ({imgUrl, title, description, price}) => {
    return (
        <Col xs={12} lg={6} xl={3} className={cl.item}>
            <div className={cl.item__image}>
                <img src={imgUrl} alt=""/>
            </div>
            <h3 className={cl.item__headline}>
                {title}
            </h3>
            <span className={cl.item__description}>
                {description}
            </span>
            <p className={cl.item__price}>
                {price}
            </p>
        </Col>
    );
};

export default SellsItem;
