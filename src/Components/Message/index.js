//import react
import React from 'react';
//import material design components
import { Card, CardContent, Typography } from '@material-ui/core';
//import styled components

//create and export functional component
export const Message = ({ username, text }) => {
	return (
		<Card>
			<CardContent>
				<Typography color='white' variant='h5' component='h2'>
					{`${username}: ${text}`}
				</Typography>
			</CardContent>
		</Card>
	);
};
