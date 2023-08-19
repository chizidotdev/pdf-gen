import { useForm } from './form.context';

export const Result = () => {
    return (
        <div className='mx-auto h-fit sticky top-5 max-w-4xl'>
            <Resume />

            <DownloadButton />
        </div>
    );
};

const Resume = () => {
    const { formData } = useForm();

    return (
        <div className='flex flex-col gap-5 px-14 py-10 bg-gray-50 text-slate-800'>
            <section>
                <header className='text-center mb-3'>
                    <h1 className='text-xl uppercase'>{formData.name}</h1>
                    {/* <h1 className="text-sm font-semibold uppercase">Software Engineer</h1> */}
                    <p>
                        {formData.email} | {formData.phone}
                    </p>
                </header>

                <p>{formData.bio}</p>
            </section>

            <section className='flex flex-col gap-3'>
                <header className='section-header'>Experience</header>

                {formData.experience.map((exp, index) => (
                    <div key={index}>
                        <div className='flex justify-between'>
                            <h2 className='item-header'>{exp.position}</h2>
                            <p>
                                {exp.from} - {exp.to}
                            </p>
                        </div>
                        <h3>
                            {exp.company}, {exp.location}
                        </h3>
                        <p className='mt-1'>{exp.summary}</p>
                    </div>
                ))}
            </section>

            <section>
                <header className='section-header'>Skills & Specialization</header>

                <p>
                    {formData.skills.map((skill, index) => (
                        <>
                            <span key={index}>{skill}</span>
                            {index < formData.skills.length - 1 && ', '}
                        </>
                    ))}
                </p>
            </section>

            <section>
                <header className='section-header'>Education</header>

                {formData.education.map((edu, index) => (
                    <div key={index}>
                        <div className='flex justify-between'>
                            <h2 className='item-header'>{edu.school}</h2>
                            <p>
                                {edu.from} - {edu.to}
                            </p>
                        </div>
                        <p>
                            {edu.degree}, {edu.field}
                        </p>
                        <p>{edu.location}</p>
                    </div>
                ))}
            </section>

            <section>
                <header className='section-header'>Links</header>

                <div className='flex flex-col'>
                    {formData.links.map((link, index) => (
                        <a className='w-max' href={link} key={index}>
                            {link}
                        </a>
                    ))}
                </div>
            </section>
        </div>
    );
};

const DownloadButton = () => {
    return (
        <div className='mt-10'>
            <button className='bg-slate-500 text-white px-5 py-2 rounded-md'>Download</button>
        </div>
    );
};
