import ListGroup from "./ListGroup";

export interface ProjectProps {
    name: string;
    description?: string;
    tags?: string[];
    buttons?: { text: string; href: string; }[];
}

interface GridViewProps {
    projects: ProjectProps[];
    padding?: string;
    gridCols?: string;
}

export default function GridView({ projects, gridCols = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3", padding = "px-10" }: GridViewProps): React.ReactNode {
    return (

        <div className={`grid ${gridCols} gap-6 ${padding}`} >
            {
                projects.map(p => (
                    <div key={p.name} className="rounded-lg p-6 shadow-2xl dark:shadow-gray-900 bg-indigo-50 dark:bg-indigo-950">

                        <div className="flex flex-row">
                            <div>

                                <h2 className="text-xl font-bold">{p.name}</h2>

                                <p>{p.description}</p>

                            </div>

                            <div className="grow p-2" />
                            {p.buttons && <ListGroup items={
                                p.buttons
                            }
                            />
                            }

                        </div>

                        <div className="flex pt-4 overflow-auto">
                            {p.tags?.map(t => (
                                <div key={t} className="pr-3">
                                    <div className="text-xs rounded-full px-4 py-2 dark:bg-indigo-500 bg-blue-200 dark:text-black">
                                        {t}
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                ))
            }
        </div >
    )
}
