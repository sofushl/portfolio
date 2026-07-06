interface ListGroupProps {
    items: { text: string, href: string, }[];
    heading: string;
}

export default function ListGroup({ items, heading }: ListGroupProps) {

    return (
        <>
            <h1 className="text-2xl font-bold mb-4">{heading}</h1>
            {items.length === 0 && <p>No items found</p>}
            <ul className="divide-y">
                {items.map((item) => (
                    <li
                        className={
                            "rounded-lg border px-4 py-3 cursor-pointer my-1 hover:bg-blue-200 bg-blue-100 dark:bg-indigo-500 dark:hover:bg-indigo-400 text-black border-black"
                        }
                        key={item.text}

                    >
                        <a href={item.href}>{item.text}</a>
                    </li>
                ))}
            </ul >
        </>
    );
}

