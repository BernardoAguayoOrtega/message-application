//import react adn its states
import React, { useState } from 'react';
//import message
import { Message } from '../Message';
//import material ui components
import { Button, Input, FormControl, InputLabel } from '@material-ui/core';

export function App() {
	//use state hook
	const [inputContent, setInputContent] = useState('');
	const [messages, setMessages] = useState([]);

	//const handler change
	const handlerChange = (e) => setInputContent(e.target.value);

	//function to sen message
	const sendMessage = (e) => {
		e.preventDefault();
		setMessages([...messages, inputContent]);
		setInputContent('');
	};

	return (
		<>
			<form>
				<FormControl>
					<InputLabel>Enter a message...</InputLabel>
					<Input value={inputContent} onChange={handlerChange} />
					<Button
						disabled={!inputContent}
						variant='contained'
						color='primary'
						type='submit'
						onClick={sendMessage}>
						Send message
					</Button>
				</FormControl>
			</form>
			{messages.map((message) => (
				<Message text={message}/>
			))}
		</>
	);
}
