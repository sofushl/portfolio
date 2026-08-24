import Hero from '../components/Hero';
import LinkEl from '../components/LinkEl';
import ContactForm from '../components/ContactForm';


export default function About() {
    return (
        <>
            <Hero
                name="About me"
                tagline='Sofus Højberg Lind - MSc Computer Science, NTNU Trondheim'
            />
            <div className='px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                <div>
                    <h2 className="text-xl font-bold" id='skills'>Skills</h2>
                </div>
                <div>
                    <ContactForm url="/email" />
                    Or use my public email directly:
                    <LinkEl text="sofushl@proton.me" href='mailto:sofushl.proton.me' newtab={true} button={false} />
                </div>
            </div>
        </>
    );
}

