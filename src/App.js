import './App.css';
import Main from './components/Main';
import lebron from './images/lebron.png';
import steph from './images/stephen.png';
import kevin from './images/kevin.png';
import giannis from './images/giannis.png';
import nikola from './images/nikola.png';
import joel from './images/joel.png';
import ja from './images/ja.png';
import demar from './images/demar.png';
import andrew from './images/andrew.png';
import trae from './images/trae.png';

function App() {
	const cards = [
		{ name: 'LeBron', img: lebron },
		{ name: 'Steph', img: steph },
		{ name: 'Kevin', img: kevin },
		{ name: 'Giannis', img: giannis },
		{ name: 'Nikola', img: nikola },
		{ name: 'Joel', img: joel },
		{ name: 'Ja', img: ja },
		{ name: 'Demar', img: demar },
		{ name: 'Andrew', img: andrew },
		{ name: 'Trae', img: trae }
	];
	const N = 8;
	return (
		<div className="App">
			<header className="App-header">NBA All Stars Memory Game</header>
			<Main cards={cards} N={N} />
		</div>
	);
}

export default App;
