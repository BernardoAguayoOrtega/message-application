import React, { useState } from 'react';

export function App() {
	//use state hook
	const [inputContent, setInputContent] = useState('');
	const [messages, setMessages] = useState([]);

	//const handler change
	const handlerChange = (e) => setInputContent(e.target.value);

	//function to sen message
	const sendMessage = (e) => {
    e.preventDefault()
		setMessages([...messages, inputContent]);
		setInputContent('');
	};

	return (
		<>
			<form>
				<input
					value={inputContent}
					onChange={handlerChange}
				/>
				<button type='submit' onClick={sendMessage}>Send message</button>
				{messages.map((message) => (
					<p>{message}</p>
				))}
			</form>
		</>
	);
}
