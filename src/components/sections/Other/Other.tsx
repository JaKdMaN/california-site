import React from 'react';
import cl from './Other.module.scss';
import search from 'assets/images/icons/search.svg';
import CaHeadline from "../../CaHeadline/CaHeadline";
import {tags} from "../../../data/Tags";
import TagItem from "../components/TagItem/TagItem";

const Other = () => {
    return (
        <section className={cl.other}>
            <CaHeadline>Looking for anything else?</CaHeadline>
            <div className={cl.other__input}>
                <img src={search} alt=""/>
                <input type="text" placeholder='Search keyword'/>
            </div>
            <div className={cl.tags}>
                <div className={cl.tags__items}>
                    {
                        tags.map(item => {
                            return <TagItem name={item.name}/>
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Other;
