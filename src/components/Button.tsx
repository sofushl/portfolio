export interface ButtonProps {
    text: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    style?: string;
    className?: string;
    active?: () => boolean;
};

export default function Button({
    text,
    onClick = () => null,
    type = "button",
    style = "primary",
    className = "",
    active = () => true,
}: ButtonProps) {
    const disabled = !active()

    return (
        <div className="block flex-col">
            <div className="grow" />
            <div className="flex-row">
                <div className="grow" />
                <button
                    type={type}
                    disabled={disabled}
                    onClick={onClick}
                    className={`block p-2 rounded-lg cursor-pointer disabled:pointer-events-none disabled:opacity-60 ${className} ${(() => {
                        switch (style) {
                            case "primary":
                                return "hover:bg-blue-200 bg-blue-100 dark:bg-indigo-500 dark:hover:bg-indigo-400 text-black border-black";
                            default:
                                return "";
                        }
                    })()}`}
                >
                    {text}
                </button >
            </div>
        </div >
    );
}
