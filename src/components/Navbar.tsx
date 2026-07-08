import LinkEl from "./LinkEl";

interface LinkProps {
    text: string;
    href: string;
    newtab?: boolean;
}

interface NavProps {
    left: LinkProps[];

    center: LinkProps[];

    right: LinkProps[];
}

export default function Navbar({ left, center, right }: NavProps) {
    return (
        <nav className="border-b flex bg-white  border-slate-200  dark:bg-slate-900 dark:border-slate-800">
            <ul className="flex-1 flex flex-row justify-start">
                {left.map((item) => (
                    <NavPart text={item.text} href={item.href} newtab={item.newtab} key={item.text} />
                ))}
            </ul>
            <ul className="flex-1 flex flex-row justify-center">
                {center.map((item) => (
                    <NavPart text={item.text} href={item.href} newtab={item.newtab} key={item.text} />
                ))}
            </ul>
            <ul className="flex-1 flex flex-row justify-end">
                {right.map((item) => (
                    <NavPart text={item.text} href={item.href} newtab={item.newtab} key={item.text} />
                ))}
            </ul>
        </nav>
    );
}

function NavPart({ text, href, newtab }: LinkProps) {
    return (
        <div className="p-2">
            <LinkEl text={text} href={href} newtab={newtab} button={false} />
        </div>
    )
}
