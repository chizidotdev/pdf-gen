import { useReducer } from 'react';
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi';

type AccordionItemProps = {
    title: string;
    children: React.ReactNode;
};
type AccordionProps = {
    children: React.ReactNode;
};

function AccordionContainer({ children }: AccordionProps) {
    return <div className='flex flex-col gap-5'>{children}</div>;
}

function AccordionItem({ children }: AccordionItemProps) {
    const [isActive, toggleActive] = useReducer((state) => !state, false);
    const onClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        toggleActive();
    };

    return (
        <div className='border p-5 rounded-md'>
            <button onClick={onClick} className='flex justify-between w-full'>
                {isActive ? <HiOutlineChevronDown /> : <HiOutlineChevronUp />}
            </button>
            {isActive && <div className='flex flex-col gap-4 mt-2'>{children}</div>}
        </div>
    );
}

const Accordion = Object.assign(AccordionContainer, { Item: AccordionItem });
export default Accordion;
