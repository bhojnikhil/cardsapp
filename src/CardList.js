import React from 'react';
import Card from './Card';

const CardList = ({robots}) =>{
	
	return(
		<div>
			{
				robots.map((person,i) => {
					return(
					<Card 
					key={i} 
					id={robots[i].id} 
					name={robots[i].name} 
					un={robots[i].username} 
					email={robots[i].email}
					/>);
			})
			}
		</div>
	);
}

export default CardList;