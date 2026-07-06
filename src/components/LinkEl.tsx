type LinkElProps = {
    text: string;
    href: string;
    className?: string;
};

export default function LinkEl({
    text,
    href,
    className = "",
}: LinkElProps) {
    return (
        <a
            href={href}
            className={`block ${className}`}
            target="_blank"
            rel="noreferrer"
        >
            {text}
        </a>
    );
}
