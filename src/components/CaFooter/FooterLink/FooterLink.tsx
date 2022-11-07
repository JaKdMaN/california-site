import React, {FC, PropsWithChildren, useState} from 'react';
import {Col} from "react-bootstrap";
import cl from './FooterLink.module.scss';
import dropDownArrow from "../../../assets/images/icons/dropDownArrow.svg";

interface IFooterLink {
    name: string;
}

const FooterLink: FC<PropsWithChildren<IFooterLink>> = ({children, name}) => {

    const [dropDown, setDropDown] = useState(false);

    const onDrop = () => {
        if(dropDown) return setDropDown(false);
        return setDropDown(true);
    }

    return (
        <Col xs={12} md={2} className={cl.link}>
            <h3 onClick={onDrop} className={cl.link__headline + ' ' + (dropDown && cl.active)}>
                {name}
                <img src={dropDownArrow} alt="dropDown" className={cl.dropDownArrow}/>
            </h3>
            <ul className={(dropDown ? cl.linksActive : cl.linksDisable) + ' ' + cl.links}>
                {children}
            </ul>
        </Col>
    );
};

export default FooterLink;
