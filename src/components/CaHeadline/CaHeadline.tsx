import React, {FC, PropsWithChildren} from 'react';
import cl from './CaHeadline.module.scss';

const CaHeadline: FC<PropsWithChildren> = ({children}) => {
    return (
        <h2 className={cl.headline}>
            {children}
        </h2>
    );
};

export default CaHeadline;
