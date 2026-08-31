import Hero from '../components/Hero';
import LinkEl from '../components/LinkEl';
import ContactForm from '../components/ContactForm';
import GridView from '../components/GridView.tsx';
import { skillsList } from '../lib/itemPropsLists.ts';


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
                    <GridView items={skillsList} padding='py-2 pr-10' gridCols='min-[1150px]:grid-cols-2' />
                </div>
                <div className='flex flex-col'>
                    <ContactForm url="/email" />
                    <div className='p-10' />
                    <div className='flex '>
                        <LinkEl text="Email directly" href='mailto:sofushl.proton.me' newtab={true} button={true} />
                        <div />
                    </div>
                </div>
            </div>
        </>
    );
}

