import React from 'react';
import Card from './Card';

const CardList = ({robots}) => 
{
	const cardComponent =  robots.map((robot) =>{	
		return 	(<Card 
			key = {robot.id} 
			id = {robot.id} 
			name = {robot.name} 
			email = {robot.email} 
			/>);
	})
	return (
		<>
		{cardComponent}
		</>
		);
}

export default CardList;

