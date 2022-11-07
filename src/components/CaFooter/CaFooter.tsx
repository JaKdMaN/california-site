import React, {useState} from 'react';
import cl from './CaFooter.module.scss';
import logo from 'assets/images/logo.svg';
import arrow from 'assets/images/icons/arrow.svg';
import dropDownArrow from 'assets/images/icons/dropDownArrow.svg';
import {Container, Row, Col} from "react-bootstrap";
import CaLink from "../CalLink/CaLink";
import FooterLink from "./FooterLink/FooterLink";
import {footerLinks} from "../../data/FooterLinks";

const CaFooter = () => {

    return (
        <footer className={cl.footer}>
            <Container>
                <Row className={cl.footer__top}>
                    <Col xs={12} md={3} className={cl.footer__column}>
                        <img src={logo} alt="logo" className={cl.footer__column__logo}/>
                        <p className={cl.footer__column__description}>
                            Sign up for texts to be notified about <br className='br'/> our best offers on the perfect
                            gifts.
                        </p>
                    </Col>

                    {footerLinks.map(links => {
                      return  <FooterLink name={links.name}>
                          {links.links.map(link => {
                              return <li><CaLink to='#'>{link}</CaLink></li>
                          })}
                      </FooterLink>
                    })}

                </Row>
                <div className={cl.footer__bottom}>
                    <div>
                        <span className={cl.footer__bottom__headline}>
                            Made By:
                        </span>
                        <CaLink to='#' className={cl.footer__bottom__link}>
                            Azwedo
                            <img src={arrow} alt="arrow" className={cl.arrow}/>
                        </CaLink>
                    </div>
                    <div>
                        <span className={cl.footer__bottom__headline}>
                            Powered by:
                        </span>
                        <CaLink to='#' className={cl.footer__bottom__link}>
                            Webflow
                            <img src={arrow} alt="arrow" className={cl.arrow}/>
                        </CaLink>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default CaFooter;
