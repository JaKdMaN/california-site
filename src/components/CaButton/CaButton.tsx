import React, {FC, PropsWithChildren} from 'react';
import cl from './CaButton.module.scss';

const CaButton: FC<PropsWithChildren> = ({children}) => {
    return (
        <button className={cl.btn}>
            {children}
        </button>
    );
};

export default CaButton;
