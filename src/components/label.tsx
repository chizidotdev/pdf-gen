import React, { ReactNode } from 'react';

type Props = React.ComponentPropsWithoutRef<'label'> & {
    children: ReactNode;
    name?: string;
};

export const Label = ({ children, name }: Props) => {
    return (
        <label htmlFor={name} className='block text-sm font-medium text-white'>
            {children}
        </label>
    );
};

export default Label;
