import React from 'react';
import '../styles/scoreboard.css';

function Scoreboard(props) {
	return (
		<div className="scoreboard">
			<div className="curr-score">Score: {props.current}</div>
			<div className="best-score">Best: {props.best}</div>
		</div>
	);
}

export default Scoreboard;
