import React, { useState } from 'react';

export function App() {
	//use state hook
	const [inputContent, setInputContent] = useState('');
	const [messages, setMessages] = useState([]);

	//const handler change
	const handlerChange = (e) => setInputContent(e.target.value);

	//function to sen message
	const sendMessage = () => {
		setMessages([...messages, inputContent]);
		setInputContent('');
	};

	//function on click press enter
	const senMessageWithEnterKey = (e) => {
		if (e.which === 13) {
			setMessages([...messages, inputContent]);
			setInputContent('');
		}
  };

  console.log(messages)

	return (
		<>
			<input
				value={inputContent}
				onChange={handlerChange}
				onKeyPress={senMessageWithEnterKey}
			/>
			<button onClick={sendMessage}>Send message</button>
			{messages.map((message) => (
				<p>{message}</p>
			))}
		</>
	);
}
