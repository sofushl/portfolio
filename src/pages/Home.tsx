import Hero from '../components/Hero.tsx';
import LinkEl from '../components/LinkEl.tsx';
import ListGroup from '../components/ListGroup.tsx';
import ProjectView, { type ProjectProps } from '../components/ProjectView.tsx';

export default function Home() {

    const projects: ProjectProps[] = [
        {
            name: "Nixos",
            description: "My server and desktop config",
            link: "https://github.com/sofushl/nixos",
            tags: []
        },
        {
            name: "AbaCordium",
            description: "Discord bot made in collaboration with AbaCord",
            link: "https://github.com/AbaCord/AbaCordium",
            tags: [],
        },
        {
            name: "Portfolio page",
            description: "Code for the website you are currently on",
            link: "https://github.com/sofushl/homepage",
            tags: [],
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
                <ProjectView projects={projects} />
            </div>
            <div className='flex-1'>
                <div className='flex pb-4 px-10 flex-row'>
                    <div className='flex-1'>
                        <h1 className="text-2xl font-bold">Skills</h1>

                        <ListGroup
                            items={[
                                {
                                    text: "Typescript",
                                    href: "/projects?filter=typescript",
                                    button: false,
                                    newtab: false
                                }, {
                                    text: "Java",
                                    href: "/projects?filter=java",
                                    button: false,
                                    newtab: false
                                }, {
                                    text: "Nix",
                                    href: "/projects?filter=nix",
                                    button: false,
                                    newtab: false
                                }, {
                                    text: "Javasript",
                                    href: "/projects?filter=javascript",
                                    button: false,
                                    newtab: false
                                }, {
                                    text: "",
                                    href: "/projects?filter=typescript",
                                    button: false,
                                    newtab: false
                                }, {
                                    text: "Python",
                                    href: "/projects?filter=python",
                                    button: false,
                                    newtab: false
                                },

                            ]}
                        />

                    </div>
                    <div className='flex-1'>
                        <h1 className="text-2xl font-bold">Experience</h1>
                        <ListGroup
                            items={[
                                {
                                    text: "Nordic Semiconductors - Frontend developer intern",
                                    href: "https://www.nordicsemi.com/About-us",
                                    button: false,
                                    newtab: true
                                },
                                {
                                    text: "Teknologiskolen SDU Summer Camp - Assistant instructor",
                                    href: "https://www.teknologiskolen.dk/",
                                    button: false,
                                    newtab: true
                                }

                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
