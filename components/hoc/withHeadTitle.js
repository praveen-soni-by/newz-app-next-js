
import React from 'react';
import HeadTitle from '../HeadTitle';

export const withHeadTitle = (WrappedComponent, title) => {
    const HOC = ({ ...props }) => {
        return (
            <>
                <HeadTitle title={title} />
                <WrappedComponent {...props} />
            </>
        )
    }

    return HOC;
};
