import React from 'react';

function Scoreboard(props) {
	return (
		<div className="scoreboard">
			<div className="curr-score">Current Score: {props.current}</div>
			<div className="best-score">Best Score: {props.best}</div>
		</div>
	);
}

export default Scoreboard;
