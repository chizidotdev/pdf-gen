import { createContext, useContext, useReducer, useState } from 'react';

type FormContextType = {
    formData: FormData;
    setFormData: React.Dispatch<Partial<FormData>>;
};
export const FormContext = createContext({} as FormContextType);

export type FormData = typeof initialFormData;

export function FormProvider({ children }: { children: React.ReactNode }) {
    // const [formData, setFormData] = useState<FormData>(initialFormData);
    const [formData, setFormData] = useReducer(
        (state: FormData, newState: Partial<FormData>) => ({
            ...state,
            ...newState,
        }),
        initialFormData
    );

    return (
        <FormContext.Provider
            value={{
                formData,
                setFormData,
            }}
        >
            {children}
        </FormContext.Provider>
    );
}

export const useForm = () => useContext(FormContext);

const initialFormData = {
    name: 'Chizi Wokoma',
    email: 'chiziwokoma@gmail.com',
    phone: '+234-903-739-0992',
    bio: 'Dedicated Software Engineer with over 2 years of experience, proficient in JavaScript, Typescript, React, & Node. With a background in design, passionate about engaging user experience/interfaces. Currently based in Port Harcourt, Nigeria. B-Tech, Rivers State University, Nigeria.',
    experience: [
        {
            position: 'Full Stack Developer',
            company: 'Aid Medium',
            location: 'Remote',
            from: 'Jan 2022',
            to: 'Present',
            summary:
                'Write modern, high-performance, and robust code for a diverse array of clients and internal projects. Work with a variety of different languages, frameworks, and content management systems such as JavaScript, TypeScript, React, Node.js, Wordpress, Gatsby, etc. Interfaced with clients on a weekly basis, providing technological expertise and knowledge. Communicate and collaborate with multi-disciplinary teams of engineers, designers, producers, clients, and stakeholders on a daily basis.',
        },

        {
            position: 'Frontend Developer ReactJS',
            company: 'Cyte-Code',
            location: 'Nigeria',
            from: 'Feb 2021',
            to: 'Nov 2021',
            summary:
                'Implemented ReactJS best practices and recommended folder structures. Used git/github for version control and collaboration with other team members. Built landing pages for startup businesses, using styled-components in React. Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, and JavaScript. Tested sites in various browsers and devices to ensure cross-browser compatibility and mobile responsiveness. Interfaced with user experience designers and other developers to ensure thoughtful and coherent user experiences across websites.',
        },
    ],
    education: [
        {
            school: 'Rivers State University',
            degree: 'Bachelor of Technology',
            field: 'Engineering',
            from: 'Jan 2016',
            to: 'Jan 2021',
            location: 'Port Harcourt, Nigeria',
        },
    ],
    skills: [
        'JavaScript',
        'TypeScript',
        'React',
        'React Native',
        'NextJS',
        'Redux',
        'Git',
        'Sass',
        'Node',
        'GraphQL',
        'AWS',
        'Docker',
        'CI/CD',
    ],
    links: ['https://chizi.dev/github', 'https://chizi.dev'],
};
