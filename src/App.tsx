import { useState } from 'react'
import './index.css'
import './components/LinkEl.tsx'
import LinkEl from './components/LinkEl.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
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
            <LinkEl text="Sofus Lind" link="https://github.com/sofuslind/" />
            <LinkEl text="AbaCord" link="https://github.com/AbaCord/" />
          </ul>
        </div>
        <div id="social">
          <h2>Other links</h2>
          <p>Join AbaCord and visit the discord server</p>
          <ul>
            <LinkEl link="https://abakus.no/interest-groups/279" text="Abakus - Abacord" />
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
