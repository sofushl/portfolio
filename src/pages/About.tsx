import { useEffect, useState } from 'react';
import Button from '../components/Button';
import Hero from '../components/Hero';
import LinkEl from '../components/LinkEl';

type Status = 'typing' | 'submitting' | 'success';

export default function About() {
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [error, setError] = useState<Error | null>(null);
    const [status, setStatus] = useState<Status>('typing');



    async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus('submitting');
        try {
            await submitForm(email, message);
            setStatus('success');
        } catch (err) {
            setStatus('typing');
            setError(err as Error);
        }
    }

    function handleTextAreaChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setMessage(e.target.value);
    }

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setEmail(e.target.value);
    }


    useEffect(() => {
        if (status === 'success') {
            const timer = setTimeout(() => {
                setStatus('typing');
            }, 5000);

            return () => { clearTimeout(timer); };
        }
    }, [status]);

    return (
        <>
            <Hero
                name="About me"
                tagline='Sofus H. Lind - MSc Computer Science at NTNU Trondheim'
            />
            <div className='px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                <div>
                    <h2 className="text-xl font-bold" id='skills'>Skills</h2>
                </div>
                <div>
                    <h2 className="text-xl font-bold" id='contact'>Contact me</h2>
                    <form className='flex flex-col gap-5 py-5' onSubmit={(e) => { void handleSubmit(e); }}>

                        <input
                            value={email}
                            onChange={handleInputChange}
                            disabled={status === 'submitting'}
                            className='bg-indigo-200 text-black'
                        />

                        <textarea
                            value={message}
                            onChange={handleTextAreaChange}
                            disabled={status === 'submitting'}
                            className='bg-indigo-200 text-black'
                        />

                        <div className='flex flex-row'  >
                            <Button
                                text='Submit'
                                active={() => { return !(message.length === 0 || status === 'submitting') }}
                                type='submit'
                            />
                            <div className="px-10">
                                {error !== null &&
                                    <p className="Error">
                                        {error.message}
                                    </p>

                                }
                                {(status === 'success') &&
                                    <p>Message sent</p>
                                }
                            </div>
                        </div>
                    </form>
                    Or use my public email:
                    <LinkEl text="sofushl@proton.me" href='mailto:sofushl.proton.me' newtab={true} button={false} />
                </div>
            </div>
        </>
    );
}

function submitForm(email: string, message: string): Promise<void> {
    // Pretend it's hitting the network.
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(message)
            if (isValidEmail(email)) {
                reject(new Error('Invalid Email'));
            } else {
                resolve();
            }
        }, 1500);
    });
}

function isValidEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
