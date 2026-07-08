import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects.tsx';
import Footer from './components/Footer.tsx';

export default function App() {

    return (
        <BrowserRouter>
            <div className='flex-col min-h-screen flex'>
                <Navbar left={[{
                    text: "Home", href: "/", newtab: false,
                }, {
                    text: "Projects", href: "/projects", newtab: false,
                }, {
                    text: "About", href: "/about", newtab: false,
                }, {
                    text: "Contact", href: "/contact", newtab: false,
                }
                ]} center={[

                ]} right={[{
                    text: "github", href: "https://github.com/sofushl",
                }]} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer name="Sofus H. Lind"
                    about={`Sofus Lind
MSc Computer Science at NTNU Trondheim`}
                    lists={[
                        {
                            heading: "Connect",
                            items:
                                [
                                    { text: "Contact", href: "/contact", button: false, newtab: false },
                                    { text: "Github", href: "https://github.com/sofushl", button: false, newtab: true },
                                    { text: "Linkedin", href: "https://linkedin.com/sofuslind", button: false, newtab: true }
                                ]
                        },
                        {
                            heading: "AbaCord",
                            items:
                                [
                                    { text: "Abakus", href: "https://abakus.no/interest-groups/279", button: false, newtab: true },
                                    { text: "Github", href: "https://github.com/AbaCord", button: false, newtab: true },
                                    { text: "Discord", href: "https://discord.gg/SdnuAUS63K", button: false, newtab: true }
                                ]
                        },]
                    } />
            </div>
        </BrowserRouter>
    )
}
