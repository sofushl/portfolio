import LinkEl from "./LinkEl";
import ListGroup, { type ListGroupProps } from "./ListGroup";

interface FooterProps { name: string, about: string, lists: Omit<ListGroupProps, "listClass">[] };


const year = new Date().getFullYear();

export default function Footer({ name, about, lists }: FooterProps) {
    return (
        <div className="grow flex flex-col">
            <div className="grow py-10" />
            <footer className="border-t border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-800">
                <div className={`max-w-6xl mx-auto p-5 grid grid-cols-2 md:grid-cols-${String(Math.min(lists.length + 1, 4))} lg:grid-cols-${String(Math.min(lists.length + 1, 6))} gap-20`}>
                    <div>
                        <LinkEl text="About" href="/about" className="font-semibold mb-3" button={false} newtab={false} />
                        <p className="text-xs text-slate-600 dark:text-slate-400 whitespace-break-spaces">
                            {about}
                        </p>
                    </div>
                    {lists.map(lg => <ListGroup
                        key={lg.heading}
                        heading={lg.heading}
                        items={lg.items}
                        listClass="text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    />)}
                </div>

                <div>
                    <p className="text-right text-sm text-slate-500 dark:text-slate-400">
                        &copy; {year} {name}. All rights reserved.
                    </p>
                </div>
            </footer >
        </div >
    );
}

