import React, { useState } from 'react';

function App() {
	//use state hook
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  //function to sen message
  const sendMessage = (e) => {

  }

	return (
		<>
			<input value={input} onClick={sendMessage} onChange={event => setInput(event.target.value)}/>
			<button>Sen message</button>
		</>
	);
}

export default App;
