import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faTimes, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './Chatbot.css';

function Chatbot() {
    const chatBodyRef = React.useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [combinedMessages, setCombinedMessages] = useState([]);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleInputChange = (e) => {
        setMessage(e.target.value);
    };

    const sendMessage = () => {
        if (message.trim() !== '') {
            const currentDate = new Date();
            const formattedTime = currentDate.toLocaleTimeString('nb-NO', {hour: '2-digit', minute: '2-digit'});
            const newUserMessage = { type: 'user', content: message, time: formattedTime };
            setCombinedMessages(prev => [...prev, newUserMessage]);

            setMessage('');

            fetch('http://127.0.0.1:5000/api/chatbot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ question: message }),
            })
                .then(response => response.json())
                .then(data => {
                    const newBotResponse = { type: 'bot', content: data, time: formattedTime };
                    setCombinedMessages(prev => [...prev, newBotResponse]);
                })
                .catch((error) => {
                    console.error('Feil med returnering av melding fra robot:', error);
                    const errorMessage = { type: 'bot', content: "Det skjedde en feil, kjører serveren?", time: formattedTime };
                    setCombinedMessages(prev => [...prev, errorMessage]);
                });
        }
    };

    useEffect(() => {
        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
        }
    }, [combinedMessages]);

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            sendMessage();
        }
    };

    return (
        <div className="Chat">
            {!isOpen && (
                <button className="chatButton" onClick={toggleChat}>
                    <FontAwesomeIcon icon={faCommentDots} />
                </button>
            )}
            {isOpen && (
                <div className="chatDialog">
                    <div className="chatHeader">
                        <h2>Chat med oss!</h2>
                        <button className="closeChat" onClick={toggleChat}>
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                    </div>
                    <div className="chatBody" ref={chatBodyRef}>
                        {combinedMessages.map((msg, index) => (
                            <div key={index} className={msg.type === 'user' ? "chatMessage" : "botMessage"}>
                                <div className="messageContent">{msg.content}</div>
                                <div className="messageTime">{msg.time}</div>
                            </div>
                        ))}
                    </div>
                    <div className="chatFooter">
                        <input type="text"
                            className="messageInput"
                            placeholder="Skriv inn meldingen din ..."
                            value={message}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyPress} />
                        <button className="SendMessage" onClick={sendMessage}>
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Chatbot;
