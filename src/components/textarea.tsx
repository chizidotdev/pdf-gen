import React from 'react';
import Label from './label';

interface TextareaProps extends React.ComponentPropsWithoutRef<'textarea'> {
    label: string;
}

export const Textarea: React.FC<TextareaProps> = ({ name, label, ...props }) => {
    return (
        <>
            <div>
                <Label name={name}>{label}</Label>
                <textarea
                    {...props}
                    cols={30}
                    rows={6}
                    autoComplete='off'
                    className='lg:text-lg mt-1 focus:ring-gray-300 focus:border-gray-500 block w-full shadow-sm sm:text-sm bg-transparent border-gray-50 rounded-md'
                />
            </div>
        </>
    );
};

export default Textarea;
