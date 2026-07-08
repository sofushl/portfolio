import LinkEl, { type LinkElProps } from "./LinkEl";

export interface ListGroupProps {
    items: LinkElProps[];
    heading?: string;
    listClass?: string;
    className?: string;
}

export default function ListGroup({ items, heading, listClass, className }: ListGroupProps) {

    return (
        <div>
            {heading ? <h4 className="font-semibold text-l pb-3">{heading}</h4> : ""}
            {items.length === 0 && <p>No items found</p>}
            <ul className={className ?? "flex flex-col"}>
                {items.map((item) => (
                    <div key={item.text} className={`p-1 ${listClass ?? ""}`} >
                        <LinkEl
                            text={item.text}
                            href={item.href}
                            button={item.button}
                            newtab={item.newtab}
                        />

                    </div>
                ))
                }
            </ul >
        </div>
    );
}

