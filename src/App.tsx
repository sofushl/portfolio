import Hero from './components/Hero.tsx';
import ListGroup from './components/ListGroup.tsx'
import Navbar from './components/Navbar.tsx';

export default function App() {


    const links: Record<string, string> = {
        "Nixos configuration": "https://github.com/sofuslind/nixos",
        "Abacordium discord bot": "https://github.com/AbaCord/AbaCordium",
        "This website": "https://github.com/sofuslind/homepage",
    }

    return (
        <div className='flex flex-col text-black dark:text-gray-50'>
            <Navbar left={[{
                text: "HOME", href: "/",
            }
            ]} center={[

            ]} right={[{
                text: "github", href: "https://github.com/sofuslind/",
            }]} />


            <div className='flex-1'>
                <Hero name='Sofus Lind' tagline='Personal Portfolio' />
            </div>
            <div className='flex-1'>
                <ListGroup items={Object.keys(links).map(key => { return { text: key, href: links[key] } })} heading="Git repos" />
            </div>
        </div>
    )
}


