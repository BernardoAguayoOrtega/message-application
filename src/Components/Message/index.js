//import react
import React, { forwardRef } from 'react';
//import material design components
import { Card, CardContent, Typography } from '@material-ui/core';
//import styles
import './styles.css';

//create and export functional component
export const Message = forwardRef(({ username, content }, ref) => {
	//check if the user is the user of the app og another user
	const isUser = username === content.data.username;

	return (
		<div ref={ref}>
			<Card
				className={`message ${
					isUser ? 'message__user message__userCard ' : 'message__guestCard'
				}`}>
				<CardContent>
					{isUser ? (
						<Typography variant='h5' component='h2'>
							{`${content.data.message}`}
						</Typography>
					) : (
						<Typography variant='h5' component='h2'>
							{`${content.data.username}: ${content.data.message}`}
						</Typography>
					)}
				</CardContent>
			</Card>
		</div>
	);
});
