//import react
import React from 'react';

//create and export functional component
export const Message = ({ username, text }) => {
	return (
		<>
			<h2>{`${username}: ${text}`}</h2>
		</>
	);
};
