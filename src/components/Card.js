import React from 'react';
import '../styles/card.css';

function Card(props) {
	return (
		<div id={props.text} className="card" onClick={props.onSelection}>
			<img src={props.img} alt={props.text} />
			<div className="card-text">{props.text}</div>
		</div>
	);
}

export default Card;
