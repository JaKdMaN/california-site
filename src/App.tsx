import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'assets/styles/styles.scss';
import 'swiper/css/bundle';
import {Container} from 'react-bootstrap';
import CaHeader from './components/CaHeader/CaHeader';
import CaFooter from './components/CaFooter/CaFooter';
import Main from './components/sections/Main/Main';
import Offers from './components/sections/Offers/Offers';
import Sell from './components/sections/Sell/Sell';
import Bests from './components/sections/Bests/Bests';
import Ideas from './components/sections/Ideas/Ideas'
import Other from "./components/sections/Other/Other";
import CaFeedbackForm from "./components/CaFeedbackForm/CaFeedbackForm";

function App() {
    return (
        <>
            <Container>
                <CaHeader/>
                <Main/>
                <Offers/>
                <Sell/>
                <Bests/>
                <Ideas/>
                <Other/>
                <CaFeedbackForm/>
            </Container>
            <CaFooter/>
        </>
    );
}

export default App;
