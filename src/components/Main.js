import React, { useState } from 'react';
import Scoreboard from './Scoreboard';
import Card from './Card';
import uniqid from 'uniqid';

function Main(props) {
	const [cards, setCards] = useState(props.cards.slice(0, props.N));
	const [selected, setSelected] = useState([]);
	const [bestScore, setBestScore] = useState(0);

	const shuffleArray = (array) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
	};

	const handleCardSelection = (e) => {
		const text = e.target.textContent;
		if (selected.includes(text)) {
			const currScore = selected.length;
			if (bestScore < currScore) {
				setBestScore(currScore);
			}
			setSelected([]);
		} else {
			setSelected((prevState) => [...prevState, text]);
		}
		setCards((prevState) => {
			const cardArray = [...prevState];
			shuffleArray(cardArray);
			return cardArray;
		});
	};

	return (
		<main>
			<Scoreboard current={selected.length} best={bestScore} />
			{cards.map((card) => {
				return <Card key={uniqid()} text={card} onSelection={handleCardSelection} />;
			})}
		</main>
	);
}

export default Main;
