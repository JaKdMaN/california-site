import React, {FC, PropsWithChildren, useState} from 'react';
import cl from './CaLink.module.scss';

interface ICaLinkProps {
    to: string;
    className?: string;
}

const CaLink: FC<PropsWithChildren<ICaLinkProps>> = ({to, children, className}) => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(true);
    }

    const onLeave = () => {
        setHover(false);
    }

    return (
        <div className={cl.link__wrapper + ' ' + className} onMouseEnter={onHover} onMouseLeave={onLeave}>
            <a href={to} className={cl.link}>
                {children}
            </a>
            <div className={cl.underline + ' ' + (hover && cl.hovered)}></div>
        </div>
    );
};

export default CaLink;
