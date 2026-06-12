import ListGroup from './components/ListGroup.tsx'

function App() {


  const links: Record<string, string> = {
    "Nixos configuration": "https://github.com/sofuslind/nixos",
    "Abacordium discord bot": "https://github.com/AbaCord/AbaCordium",
    "This website": "https://github.com/sofuslind/homepage",
  }

  const handleSelectItem = (item: string) => {
    window.location.href = links[item];
  };

  return <div>  <ListGroup items={Object.keys(links)} heading="Git repos" onSelectItem={handleSelectItem} /> </div>

}

export default App
