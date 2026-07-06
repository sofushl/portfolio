interface HeroProps {
    name: string;
    tagline: string;
}

export default function Hero({ name, tagline }: HeroProps) {
    return (
        <div className="flex flex-col items-center py-40">

            <h1 className="text-4xl font-bold">{name}</h1>

            <p className="text-gray-500 dark:text-gray-400">{tagline}</p>
        </div>
    )

}

