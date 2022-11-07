import React, {FC} from 'react';
import cl from './BestsItem.module.scss';
import {Col} from "react-bootstrap";
import CaButton from "../../../CaButton/CaButton";

interface IBestsItem {
    description: string;
    title: string;
    imgUrl: string;
}

const BestsItem: FC<IBestsItem> = ({description, title, imgUrl}) => {
    return (
        <Col xs={12} lg={4}>
            <div className={cl.item}>
                <span className={cl.item__description}>
                    {description}
                </span>
                <h3 className={cl.item__headline}>
                    {title}
                </h3>
                <CaButton>Explore</CaButton>
                <div className={cl.item__image}>
                    <img src={imgUrl} alt="item"/>
                </div>
            </div>

        </Col>
    );
};

export default BestsItem;
