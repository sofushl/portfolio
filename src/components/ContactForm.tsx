import { useEffect, useState } from 'react';
import Button from '../components/Button';

type Status = 'typing' | 'submitting' | 'success';

interface ContactFormProps {
    url: string;
}

export default function ContactForm({ url }: ContactFormProps) {
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [error, setError] = useState<Error | null>(null);
    const [status, setStatus] = useState<Status>('typing');



    async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus('submitting');
        try {
            await submitForm(email, message, url);
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
        </div>
    );
}

async function submitForm(email: string, message: string, url: string): Promise<void> {
    if (!isValidEmail(email)) {
        throw new Error("Invalid email");
    }

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "email": email,
            "subject": `Automatic message from ${email}`,
            "message": message,
        }),
    });

    if (!response.ok) {
        throw new Error("Failed to submit form");
    }
}

function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
