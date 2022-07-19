import './App.css';
import Main from './components/Main';

function App() {
	const cards = ['Lebron', 'Steph', 'Durant', 'Giannis', 'Jokic', 'Embiid', 'Tatum'];
	const N = 6;
	return (
		<div className="App">
			<header className="App-header">NBA All Stars Memory Game</header>
			<Main cards={cards} N={N} />
		</div>
	);
}

export default App;
