import ReactDOM from "react-dom/client";
import { useState } from 'react'
import './index.css'

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
						<li>
							<a href="https://github.com/sofuslind/" target="_blank">

								Sofus Lind
							</a>
						</li>
						<li>
							<a href="https://github.com/AbaCord/" target="_blank">
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

ReactDOM.createRoot(
	document.getElementById("root")!
).render(
	<App />
);
