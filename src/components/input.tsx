import React from 'react';
import Label from './label';

interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
    label?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({ name, label, ...props }) => {
    return (
        <div>
            {label && <Label name={name}>{label}</Label>}
            <input
                {...props}
                type='text'
                autoComplete='off'
                className='lg:text-lg mt-1 focus:ring-gray-300 focus:border-gray-500 block w-full shadow-sm sm:text-sm bg-transparent border-gray-50 rounded-md placeholder:text-sm'
            />
        </div>
    );
};

export default Input;
