import React from 'react';
import cl from './CaFeedbackForm.module.scss';
import image from 'assets/images/form.png';
import CaHeadline from "../CaHeadline/CaHeadline";

const CaFeedbackForm = () => {
    return (
        <div className={cl.feedback}>
            <CaHeadline>Never miss a thing</CaHeadline>
            <p className='description'>
                Sign up for texts to be notified about our best offers on the perfect gifts.
            </p>
            <div className={cl.feedback__image}>
                <img src={image} alt="image"/>
            </div>
            <form className={cl.feedback__form}>
                <input type="text" className={cl.feedback__form__input} placeholder='Your email'/>
                <button type='submit' className={cl.feedback__form__button}>
                    Sign up
                </button>
            </form>
        </div>
    );
};

export default CaFeedbackForm;
