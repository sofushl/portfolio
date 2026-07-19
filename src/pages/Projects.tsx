import GridView, { type ItemProps } from '../components/GridView.tsx';
import Hero from '../components/Hero.tsx';
import projectsData from "../../assets/projects.json";
import { useState } from 'react';
import Dropdown from '../components/Dropdown.tsx';
import { useSearchParams } from 'react-router-dom';

export default function Projects() {

    const [searchParams, setSearchParams] = useSearchParams();

    const [filter, setFilter] = useState<string | null>(
        searchParams.get("filter")
    )

    const projects: Required<ItemProps>[] = projectsData;
    const seen = new Map<string, number>();

    projects.flatMap(p => p.tags).forEach(tag => {
        const key = tag.toLowerCase();
        seen.set(key, (seen.get(key) ?? 0) + 1);
    });

    const uniqueTags = [...seen.keys()].sort((a, b) => a.length - b.length).sort(
        (a, b) => (seen.get(b) ?? 0) - (seen.get(a) ?? 0)
    );

    return (
        <div className='flex flex-col '>
            <div className='flex-1'>
                <Hero name='Project Overview' tagline='' />
            </div>
            <div className='flex-1'>
                <div className='flex pb-4 px-10'> <div className='grow' /> <Dropdown display='Filter' values={uniqueTags}
                    onSelect={(param: string | null) => { setFilter(param); if (param) setSearchParams(`filter=${param}`); }} />
                </div>
                <GridView items={projects.filter(p => (filter === null) || p.tags.includes(filter))} />
            </div>
        </div>
    )
}
