import Accordion from './accordion';
import { FormData, useForm } from './form.context';
import Input from './input';
import Textarea from './textarea';
import { HiOutlinePlus } from 'react-icons/hi';

export function Form() {
    return (
        <form className='max-w-2xl flex flex-col gap-7'>
            <PersonalInfo />

            <Experience />

            <div className='flex flex-col gap-4'>
                <h1 className='text-xl font-bold text-white'>Skills & Specialization</h1>
                <Input name='skills' label='Skills' />
            </div>

            <Education />

            <div className='flex flex-col gap-4'>
                <h1 className='text-xl font-bold text-white'>Links</h1>
                <div className='grid gap-4'>
                    <Input name='linkedin' label='LinkedIn' />
                    <Input name='github' label='GitHub' />
                    <Input name='portfolio' label='Portfolio' />
                </div>
            </div>
        </form>
    );
}

function PersonalInfo() {
    const { formData, setFormData } = useForm();

    return (
        <div className='flex flex-col gap-4'>
            <h1 className='text-xl font-bold text-white'>Personal Information</h1>
            <div className='grid sm:grid-cols-2 gap-4'>
                <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ name: e.target.value })}
                    label='Name'
                />
                <Input
                    value={formData.email}
                    onChange={(e) => setFormData({ email: e.target.value })}
                    label='Email'
                />
                <Input
                    value={formData.phone}
                    onChange={(e) => setFormData({ phone: e.target.value })}
                    label='Phone'
                />
            </div>
            <Textarea
                value={formData.bio}
                onChange={(e) => setFormData({ bio: e.target.value })}
                label='Bio'
            />
        </div>
    );
}

function Experience() {
    const {
        formData: { experience },
        setFormData,
    } = useForm();

    const updateExperience = (index: number, key: keyof FormData['experience'][0], value: string) => {
        const newExperience = [...experience];
        newExperience[index][key] = value;
        setFormData({ experience: newExperience });
    };

    const addExperience: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        const newExperience = [...experience];
        newExperience.push({
            company: '',
            position: '',
            location: '',
            from: '',
            to: '',
            summary: '',
        });
        setFormData({ experience: newExperience });
    };

    return (
        <div className='flex flex-col gap-4'>
            <div className='flex justify-between'>
                <h1 className='text-xl font-bold text-white'>Experience</h1>
                <button onClick={addExperience} className='btn btn-primary'>
                    <HiOutlinePlus />
                </button>
            </div>
            <Accordion>
                {experience.map((exp, index) => (
                    <Accordion.Item title={exp.company}>
                        <div className='grid grid-cols-2 gap-4'>
                            <Input
                                value={exp.company}
                                onChange={(e) => updateExperience(index, 'company', e.target.value)}
                                label='Company'
                            />
                            <Input
                                value={exp.position}
                                onChange={(e) =>
                                    updateExperience(index, 'position', e.target.value)
                                }
                                label='Position'
                            />
                            <Input
                                value={exp.location}
                                onChange={(e) =>
                                    updateExperience(index, 'location', e.target.value)
                                }
                                label='Location'
                            />
                            <div className='flex gap-2'>
                                <Input
                                    value={exp.from}
                                    onChange={(e) =>
                                        updateExperience(index, 'from', e.target.value)
                                    }
                                    label='From'
                                />
                                <Input
                                    value={exp.to}
                                    onChange={(e) => updateExperience(index, 'to', e.target.value)}
                                    label='To'
                                />
                            </div>
                        </div>
                        <Textarea
                            value={exp.summary}
                            onChange={(e) => updateExperience(index, 'summary', e.target.value)}
                            label='Summary'
                        />
                    </Accordion.Item>
                ))}
            </Accordion>
        </div>
    );
}

function Education() {
    const {
        formData: { education },
        setFormData,
    } = useForm();

    const updateEducation = (index: number, key: keyof FormData['education'][0], value: string) => {
        const newEducation = [...education];
        newEducation[index][key] = value;
        setFormData({ education: newEducation });
    };

    const addEducation: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        const newEducation = [...education];
        newEducation.push({
            school: '',
            degree: '',
            field: '',
            from: '',
            to: '',
            location: '',
        });
        setFormData({ education: newEducation });
    };

    return (
        <div className='flex flex-col gap-4'>
            <div className='flex justify-between'>
                <h1 className='text-xl font-bold text-white'>Education</h1>
                <button onClick={addEducation} className='btn btn-primary'>
                    <HiOutlinePlus />
                </button>
            </div>
            <Accordion>
                {education.map((edu, index) => (
                    <Accordion.Item title={edu.school}>
                        <div className='grid grid-cols-2 gap-4'>
                            <Input
                                value={edu.school}
                                onChange={(e) => updateEducation(index, 'school', e.target.value)}
                                label='School'
                            />
                            <Input
                                value={edu.degree}
                                onChange={(e) => updateEducation(index, 'degree', e.target.value)}
                                label='Degree'
                            />
                            <Input
                                value={edu.field}
                                onChange={(e) => updateEducation(index, 'field', e.target.value)}
                                label='Field'
                            />
                            <div className='flex gap-2'>
                                <Input
                                    value={edu.from}
                                    onChange={(e) => updateEducation(index, 'from', e.target.value)}
                                    label='From'
                                />
                                <Input
                                    value={edu.to}
                                    onChange={(e) => updateEducation(index, 'to', e.target.value)}
                                    label='To'
                                />
                            </div>
                            <Input
                                value={edu.location}
                                onChange={(e) => updateEducation(index, 'location', e.target.value)}
                                label='Location'
                            />
                        </div>
                    </Accordion.Item>
                ))}
            </Accordion>
        </div>
    );
}
