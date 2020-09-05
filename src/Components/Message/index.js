//import react
import React from 'react';
//import material design components
import { Card, CardContent, Typography } from '@material-ui/core';
//import styles
import './styles.css';

//create and export functional component
export const Message = ({ username, message }) => {
	//check if the user is the user of the app og another user
	const isUser = username === message.username;

	return (
		<Card
			className={`message ${
				isUser ? 'message__user message__userCard ' : 'message__guestCard'
			}`}>
			<CardContent>
				<Typography variant='h5' component='h2'>
					{`${message.username}: ${message.text}`}
				</Typography>
			</CardContent>
		</Card>
	);
};
