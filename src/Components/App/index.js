//import react adn its states
import React, { useState, useEffect } from 'react';
//import message
import { Message } from '../Message';
//import material ui components
import {
	Button,
	Input,
	FormControl,
	InputLabel,
	Typography,
} from '@material-ui/core';

export function App() {
	//use state hook
	const [userName, setUserName] = useState('');
	const [inputContent, setInputContent] = useState('');
	const [messages, setMessages] = useState([
		{ username: 'Bernardo', text: 'Hey there!' },
		{ username: 'Guillermo', text: 'Hey there!' },
	]);

	//use effect
	useEffect(() => {
		const name = window.prompt('Plese enter your name');
		setUserName(name ? name : 'Unknown user');
	}, []);

	//const handler change
	const handlerChange = (e) => setInputContent(e.target.value);

	//function to sen message
	const sendMessage = (e) => {
		e.preventDefault();
		setMessages([...messages, { username: userName, text: inputContent }]);
		setInputContent('');
	};

	return (
		<>
			<Typography variant='h2'>{`Welcome ${userName}`}</Typography>
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
				<Message username={message.username} text={message.text} />
			))}
		</>
	);
}
