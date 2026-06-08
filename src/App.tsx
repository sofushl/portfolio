import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={reactLogo} className="framework" alt="React logo" />
        </div>
        <div>
          <h1>Sofus Lind</h1>
          <p>
            Work in progress homepage for public relations and personal use.
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <h2>Github links</h2>
          <p>Personal github account and the AbaCord github organisation</p>
          <ul>
            <li>
		<a href="https://github.com/sofuslind/" target="_blank">
                
			<img className="button-icon" src="./assets/githublogo.png" alt="Github" ></img>

	  Sofus Lind 
              </a>
            </li>
            <li>
		    <a href="https://github.com/AbaCord/" target="_blank">
			    <img className="button-icon" src="https://raw.githubusercontent.com/webkom/lego-webapp/refs/heads/master/lego-webapp/public/icon-48x48.png" alt="Abakus" ></img>
	      AbaCord
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <h2>Other links</h2>
          <p>Join AbaCord and visit the discord server</p>
          <ul>
            <li>
              <a href="https://abakus.no/interest-groups/279" target="_blank">
                
                <img className="button-icon" src="https://raw.githubusercontent.com/webkom/lego-webapp/refs/heads/master/lego-webapp/public/icon-48x48.png" alt="Abakus" ></img>
                  
                Abakus - Abacord
              </a>
            </li>
            </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
