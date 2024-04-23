import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPaperPlane, faRobot } from '@fortawesome/free-solid-svg-icons';
import './Chatbot.css';

function Chatbot() {
    const chatBodyRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [showPopup, setShowPopup] = useState(true); // Legg til tilstand for å vise pop-up boksen

    const WELCOME_MESSAGE = {
        type: 'bot',
        content: 'Hei der 👋! Velkommen til siden. Gi meg beskjed dersom du har noen spørsmål.',
        time: new Date().toLocaleTimeString('nb-NO', { hour: '2-digit', minute: '2-digit' })
    };

    const sendMessage = (content, type = 'user') => {
        if (content.trim()) {
            const time = new Date().toLocaleTimeString('nb-NO', { hour: '2-digit', minute: '2-digit' });
            setMessages(prev => [...prev, { type, content, time }]);
        }
    };

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setMessages([WELCOME_MESSAGE]);
        }
        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
        }
    }, [isOpen, messages]);

    // Legg til funksjon for å lukke pop-up boksen
    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="Chat">
            {/* Legg til pop-up boks */}
            {showPopup && (
                <div className="popup-container">
                  
                    <div className="popup-box">
                        <button className="closeButton" onClick={closePopup}>
                            <FontAwesomeIcon icon={faTimes} style={{ color: 'black', float: 'right' }} />
                        </button>
                        <h2>Velkommen til vår chatbot!</h2>
                        <p>Vi er her for å hjelpe deg. Spør oss gjerne om hva som helst!</p>
                        <button onClick={() => { setShowPopup(false); setIsOpen(true); }}>Start Chat</button>
                    </div>
                </div>
            )}

            {!isOpen && (
                <button className="chatButton" onClick={() => setIsOpen(true)} aria-label="Start chat">
                    <FontAwesomeIcon icon={faRobot} />
                </button>
            )}
            {isOpen && (
                <ChatDialog onSend={sendMessage} onClose={() => setIsOpen(false)} messages={messages} />
            )}
        </div>
    );
}

function ChatDialog({ onSend, onClose, messages }) {
    return (
        <div className="chatDialog">
            <ChatHeader onClose={onClose} />
            <ChatBody messages={messages} />
            <ChatFooter onSend={onSend} />
        </div>
    );
}

function ChatHeader({ onClose }) {
    return (
        <div className="chatHeader">
            <img src="/MN_Regnskap/mn-regnskap-logo.webp" alt="Logo" className="chatLogo" />
            <div className="chatHeaderText">
                <h7 className="chatheader-overskrift">Chat med oss!</h7>
                <span>Vi svarer så fort vi kan.</span>
            </div>
            <button className="closeChat" onClick={onClose}>
                <FontAwesomeIcon icon={faTimes} />
            </button>
        </div>
    );
}

function ChatBody({ messages }) {
    const chatBodyRef = useRef(null);
    useEffect(() => {
        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div className="chatBody" ref={chatBodyRef}>
            {messages.map((msg, index) => (
                <div key={index} className={msg.type === 'user' ? "chatMessage" : "botMessage"}>
                    {msg.type === 'bot' && (
                            <FontAwesomeIcon icon={faRobot} className="botIcon" />
                    )}
               
                        <p className="messageContent">{msg.content}</p>
                    
                    <div className="messageTime">{msg.time}</div>
                </div>
            ))}
        </div>
    );
}

function ChatFooter({ onSend }) {
    const [message, setMessage] = useState('');

    const handleInputChange = e => setMessage(e.target.value);

    const handleKeyPress = event => {
        if (event.key === 'Enter') {
            event.preventDefault();
            sendMessage();
        }
    };

    const sendMessage = () => {
        if (message.trim() !== '') {
            onSend(message);
            setMessage('');
            const formattedTime = new Date().toLocaleTimeString('nb-NO', { hour: '2-digit', minute: '2-digit' });

            fetch('https://n4h0.pythonanywhere.com/api/chatbot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ question: message }),
            })
                .then(response => response.json())
                .then(data => {
                    const newBotResponse = { type: 'bot', content: data, time: formattedTime };
                    onSend(newBotResponse.content, 'bot');
                })
                .catch((error) => {
                    console.error('Error fetching response from server:', error);
                    const errorMessage = { type: 'bot', content: "Det skjedde en feil, kjører serveren?", time: formattedTime };
                    onSend(errorMessage.content, 'bot');
                });
        }
    };

    return (
        <div className="chatFooter">
            <input
                type="text"
                className="messageInput"
                placeholder="Skriv inn meldingen din ..."
                value={message}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
            />
            <button className="SendMessage" onClick={sendMessage}>
                <FontAwesomeIcon icon={faPaperPlane} />
            </button>
        </div>
    );
}

export default Chatbot;