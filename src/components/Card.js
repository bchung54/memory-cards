import React from 'react';

function Card(props) {
	return (
		<div className="card" onClick={props.onSelection}>
			{props.text}
		</div>
	);
}

export default Card;
