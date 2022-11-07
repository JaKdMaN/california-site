import React, {FC} from 'react';
import cl from './TagItem.module.scss';

interface ITagItemProps {
    readonly name: string;
}

const TagItem: FC<ITagItemProps> = ({name}) => {
    return (
        <div className={cl.item}>
            {name}
        </div>
    );
};

export default TagItem;
