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
            description: "Frontend developer intern, Jun–Aug 2026; part-time since — building cloud-driven firmware and configuration delivery tools for nRF Connect for desktop",
            buttons: [{ text: "Website", href: "https://www.nordicsemi.com/About-us", }]
        }, {
            name: "Teknologiskolen Robot Camp, SDU",
            description: "Assistant instructor 2024, 2025 — taught kids programming with Raspberry Pi Pico and MicroPython",
            buttons: [{ text: "Website", href: "https://www.teknologiskolen.dk/", }]
        }, {
            name: "Bølgeløypa Skolelaboratoriet, NTNU",
            description: "Instructor January 2026 — taught wave physics to high school students through hands-on lab activities",
            buttons: [{ text: "Website", href: "https://www.ntnu.no/skolelab/bolgeloypa", }]
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
                <div className='flex pb-4 px-10 flex-wrap'>
                    <div className='flex-1'>
                        <h1 className="text-2xl font-bold">Skills</h1>
                        <GridView items={skills} padding='py-2 pr-10' gridCols='min-[1150px]:grid-cols-2' />
                    </div>
                    <div className='flex-1'>
                        <h1 className="text-2xl font-bold">Experience</h1>
                        <GridView items={experience} padding='py-2' gridCols='min-[1300px]:grid-cols-2' />
                    </div>
                </div>
            </div>
        </div>
    )
}
