import LinkEl from "./LinkEl";

export interface ProjectProps {
    name: string;
    description: string;
    tags: string[];
    link: string;
}

interface ProjectViewProps {
    projects: ProjectProps[];
}

export default function ProjectView({ projects }: ProjectViewProps): React.ReactNode {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
            {projects.map(p => (
                <div key={p.name} className="rounded-lg p-6 shadow-2xl dark:shadow-gray-900 bg-indigo-50 dark:bg-indigo-950">

                    <div className="flex flex-row flex-">
                        <div>
                            <h2 className="text-xl font-bold">{p.name}</h2>


                            <p>{p.description}</p>



                        </div>

                        <div className="grow p-2" />
                        <div className="flex flex-col">
                            <LinkEl
                                href={p.link}
                                className="rounded-lg  px-4 py-3 cursor-pointer hover:bg-blue-200 bg-blue-100 dark:bg-indigo-500 dark:hover:bg-indigo-400 text-black border-black"
                                text="GitHub"
                            />
                            <div className="grow" />
                        </div>
                    </div>
                    <div className="flex pt-4 overflow-auto">
                        {p.tags.map(t => (
                            <div key={t} className="pr-3">
                                <div className="text-xs rounded-full px-4 py-2 dark:bg-indigo-500 bg-blue-200 dark:text-black">
                                    {t}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            ))}
        </div>
    )
}
