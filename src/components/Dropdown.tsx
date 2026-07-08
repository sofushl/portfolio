import { useState } from "react"

interface DropdownProps {
    display: string
    values: string[];
    onSelect: (value: string | null) => void;
};

export default function Dropdown({ display, values, onSelect }: DropdownProps) {

    const [isOpen, setIsOpen] = useState(false);
    const [currentValue, setCurrentValue] = useState("none");

    return (
        <div className="flex-col relative text-black" >
            <div className="flex-row">
                <div className="grow" />
                <button
                    onClick={() => { setIsOpen(prev => !prev); }}
                    className="rounded-lg cursor-pointer  hover:bg-blue-200 bg-blue-100 dark:bg-indigo-500 dark:hover:bg-indigo-400 border-black px-4 py-2"
                >
                    {values.includes(currentValue) ? currentValue : display}
                </button>

            </div>

            {isOpen && (
                <div className="absolute overflow-auto text-left mt-1 max-h-100 right-0 flex-col rounded-lg bg-blue-100 dark:bg-indigo-500 border-black shadow-lg">
                    <button
                        onClick={() => { setCurrentValue(""); onSelect(null); setIsOpen(false); }}
                        className="block rounded-lg  w-full px-4 py-2 hover:bg-blue-200 dark:hover:bg-indigo-400 "
                    >
                        none
                    </button>
                    {values.map((v) => (
                        <button
                            key={v}
                            onClick={() => { setCurrentValue(v); onSelect(v); setIsOpen(false); }}
                            className="block rounded-lg w-full px-4 py-2 hover:bg-blue-200 dark:hover:bg-indigo-400"
                        >
                            {v}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

