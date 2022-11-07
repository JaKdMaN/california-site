import React, {FC, MouseEventHandler} from 'react';
import cl from "./CaBurgerMenu.module.scss";


interface ICaBurgerMenuProps {
    isMenuActive: boolean;
    onCLick: MouseEventHandler;
    className?: string;
}

const CaBurgerMenu: FC<ICaBurgerMenuProps> = ({onCLick, isMenuActive, className}) => {


    return (
        <div className={cl.wrapper + ' ' + className}>
            <div onClick={onCLick} className={isMenuActive ? cl.burgerActive : cl.burger}>
                <div id='topLine' className={cl.burger__line}></div>
                <div id='bottomLine' className={cl.burger__line}></div>
            </div>
        </div>

    );
};

export default CaBurgerMenu;
