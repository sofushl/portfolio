import Hero from '../components/Hero.tsx';
import LinkEl from '../components/LinkEl.tsx';
import GridView, { type ItemProps } from '../components/GridView.tsx';

import { skillsList, experienceList } from '../lib/itemPropsLists.ts';


const featuredProjects: ItemProps[] = [
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
export default function Home() {
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
                <GridView items={featuredProjects} />
            </div>
            <div className='flex-1'>
                <div className='flex pb-4 px-10 flex-wrap'>
                    <div className='flex-1'>
                        <h1 className="text-2xl font-bold">Skills</h1>
                        <GridView items={skillsList} padding='py-2 pr-10' gridCols='min-[1150px]:grid-cols-2' />
                    </div>
                    <div className='flex-1'>
                        <h1 className="text-2xl font-bold">Experience</h1>
                        <GridView items={experienceList} padding='py-2' gridCols='min-[1300px]:grid-cols-2' />
                    </div>
                </div>
            </div>
        </div>
    )
}
