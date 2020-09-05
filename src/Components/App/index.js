//import react adn its states
import React, { useState, useEffect } from 'react';
//import message
import { Message } from '../Message';
//import styled components
import { Form } from './styles';
//import material ui components
import {
	Button,
	Input,
	FormControl,
	InputLabel,
	Typography,
} from '@material-ui/core';
//import data base
import { db, timestamp } from '../utils/firebase';
// import flip move
import FlipMove from 'react-flip-move';

export function App() {
	//use state hook
	const [userName, setUserName] = useState('');
	const [inputContent, setInputContent] = useState('');
	const [messages, setMessages] = useState([]);

	//use effect for ask the name
	useEffect(() => {
		const name = window.prompt('Plese enter your name');
		setUserName(name ? name : 'Unknown user');
	}, []);

	//use effect to bring the date from data base
	useEffect(() => {
		db.collection('messages')
			.orderBy('timestamp', 'desc')
			.onSnapshot((snapshot) => {
				setMessages(
					snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })),
				);
			});
	}, []);

	//const handler change
	const handlerChange = (e) => setInputContent(e.target.value);

	//function to sen message
	const sendMessage = (e) => {
		e.preventDefault();

		db.collection('messages').add({
			username: userName,
			message: inputContent,
			timestamp: timestamp(),
		});

		//set messages white
		setInputContent('');
	};

	return (
		<>
			<Typography
				align='center'
				variant='h5'>{`Welcome ${userName}`}</Typography>
			<Form>
				<FormControl>
					<InputLabel variant='outlined' color='primary'>
						Enter a message...
					</InputLabel>
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
			</Form>
			<FlipMove>
				{messages.map((message) => (
					<Message key={message.id} username={userName} content={message} />
				))}
			</FlipMove>
		</>
	);
}
