import LinkEl from "./LinkEl";

interface LinkProp {
    text: string;
    href: string;
}

interface NavProps {
    left: LinkProp[];

    center: LinkProp[];

    right: LinkProp[];
}

export default function Navbar({ left, center, right }: NavProps) {
    return (
        <nav className="border-b flex px-5 bg-white  border-slate-200  dark:bg-slate-900 dark:border-slate-800 ">
            <ul className="flex-1 flex flex-row justify-start">
                {left.map((item) => (
                    <LinkEl text={item.text} href={item.href} key={item.text} />))}
            </ul>
            <ul className="flex-1 flex flex-row justify-center">
                {center.map((item) => (
                    <LinkEl text={item.text} href={item.href} key={item.text} />))}
            </ul>
            <ul className="flex-1 flex flex-row justify-end">
                {right.map((item) => (
                    <LinkEl text={item.text} href={item.href} key={item.text} />))}
            </ul>
        </nav>
    );
}
