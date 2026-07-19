import Hero from '../components/Hero.tsx';
import LinkEl from '../components/LinkEl.tsx';
import GridView, { type ItemProps } from '../components/GridView.tsx';

export default function Home() {

    const projects: ItemProps[] = [
        {
            name: "Nixos",
            description: "My server and desktop config",
            buttons: [{ text: "Github", href: "https://github.com/sofushl/homepage", }],
        },
        {
            name: "AbaCordium",
            description: "Discord bot made in collaboration with AbaCord",
            buttons: [{ text: "Github", href: "https://github.com/sofushl/homepage", }],
        },
        {
            name: "Portfolio page",
            description: "Code for the website you are currently on",
            buttons: [{ text: "Github", href: "https://github.com/sofushl/homepage", }],
        }
    ]

    const skills: ItemProps[] = [

        {
            name: "Typescript",
            buttons: [{ text: "Projects", href: "/projects?filter=typescript", }],
        }, {
            name: "Java",
            buttons: [{ text: "Projects", href: "/projects?filter=java", }],
        }, {
            name: "Nix",
            buttons: [{ text: "Projects", href: "/projects?filter=nix", }],
        }, {
            name: "Javascript",
            buttons: [{ text: "Projects", href: "/projects?filter=javascript", }],
        }, {
            name: "Rust",
            buttons: [{ text: "Projects", href: "/projects?filter=rust", }],
        }, {
            name: "Python",
            buttons: [{ text: "Projects", href: "/projects?filter=python", }],
        },
    ];

    const experience: ItemProps[] = [
        {
            name: "Nordic Semiconductors",
            description: "Summer internship softwaretools frontend 2026",
            buttons: [{ text: "Website", href: "https://www.nordicsemi.com/About-us", }]
        }, {
            name: "Teknologiskolen SDU Summer Camp",
            description: "Assistant instructor 2024 & 2025",
            buttons: [{ text: "Website", href: "https://www.teknologiskolen.dk/", }]
        }
    ]

    return (
        <div className='flex flex-col gap-10'>
            <div className='flex-1'>
                <Hero name='Sofus Lind' tagline='Portfolio Page' />
            </div>
            <div className='flex-1'>
                <div className='flex pb-4 px-10'>
                    <h1 className="text-2xl font-bold ">Featured projects</h1>
                    <div className='grow' />
                    <LinkEl href='/projects' text='more' newtab={false} />
                </div>
                <GridView items={projects} />
            </div>
            <div className='flex-1'>
                <div className='flex pb-4 px-10 flex-row'>
                    <div className='flex-1'>
                        <h1 className="text-2xl font-bold">Skills</h1>
                        <GridView items={skills} padding='py-2 pr-10' gridCols='lg:grid-cols-2' />
                    </div>
                    <div className='flex-1'>
                        <h1 className="text-2xl font-bold">Experience</h1>
                        <GridView items={experience} padding='py-2' gridCols='lg:grid-cols-2' />
                    </div>
                </div>
            </div>
        </div>
    )
}
