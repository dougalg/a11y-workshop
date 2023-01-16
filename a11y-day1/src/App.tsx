import './App.css';

function App() {
	return (
		<>
			<header>
				<h1>Minerva</h1>
				<nav>
					<ul>
						<li>
							<a href="/">Demos</a>
						</li>
						<li>
							<a href="/">Features</a>
						</li>
						<li>
							<a href="/">Posts</a>
						</li>
						<li>
							<a href="/">Categories</a>
						</li>
					</ul>
				</nav>
			</header>
			<main>
				<section>
					<h2 className="screenreader-only">Recent Posts</h2>
				</section>
				<section>
					<h2>Editor&lsquo;s Choice</h2>
				</section>
				<section>
					<h2>Explore Trending Topics</h2>
				</section>
			</main>
			<footer>This is the footer</footer>
		</>
	);
}

export default App;
