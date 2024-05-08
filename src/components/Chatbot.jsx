import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTimes,
    faPaperPlane,
    faRobot,
} from "@fortawesome/free-solid-svg-icons";
import "./Chatbot.css";
import { LanguageContext } from '../languages/LanguageContext';
import { useContext } from "react";
import en from "../languages/en.json"; // Engelsk språkdata
import no from "../languages/no.json"; // Norsk språkdata

function Chatbot() {
    const { language } = useContext(LanguageContext); // Bruk useContext for å få tilgang til det nåværende språket
    const textData = language === 'norsk' ? no : en;
    const chatBodyRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [showPopup, setShowPopup] = useState(true); // Legg til tilstand for å vise pop-up boksen
    const [showSuggestions, setShowSuggestions] = useState(true); // Ny tilstand for å vise forslag

    //welcome_message

    const WELCOME_MESSAGE = {
        type: "bot",
        content:
            textData.welcome_message,
        time: new Date().toLocaleTimeString("nb-NO", {
            hour: "2-digit",
            minute: "2-digit",
        }),
    };

    const sendMessage = (content, type = "user") => {
        if (content.trim()) {
            const time = new Date().toLocaleTimeString("nb-NO", {
                hour: "2-digit",
                minute: "2-digit",
            });
            setMessages((prev) => [...prev, { type, content, time }]);
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

    const handleChatbotButtonClick = () => {
        if (showPopup) {
            setShowPopup(false);
        }
        setIsOpen(true);
    };

    return (
        <div className="Chat">
            {/* Legg til pop-up boks */}
            {showPopup && (
                <div className="popup-container">
                    <div className="popup-box">
                        <button className="closeButton" onClick={closePopup}>
                            <FontAwesomeIcon
                                icon={faTimes}
                                style={{ color: "black", float: "right" }}
                            />
                        </button>
                        <h2>{textData.popup_chat}</h2>
                        <p>{textData.popup_message}</p>
                    </div>
                </div>
            )}

            {!isOpen && (
                <button
                    className="chatButton"
                    onClick={handleChatbotButtonClick}
                    aria-label="Start chat"
                >
                    <FontAwesomeIcon icon={faRobot} />
                </button>
            )}
            {isOpen && (
                <ChatDialog
                    onSend={sendMessage}
                    onClose={() => setIsOpen(false)}
                    messages={messages}
                    showSuggestions={showSuggestions} // Pass denne propen
                    setShowSuggestions={setShowSuggestions} // Og denne propen
                />
            )}
        </div>
    );
}

function ChatDialog({ onSend, onClose, messages, showSuggestions, setShowSuggestions }) {
    return (
        <div className="chatDialog">
            <ChatHeader onClose={onClose} />
            <ChatBody
                messages={messages}
                onSend={onSend}
                showSuggestions={showSuggestions} // Send ned som prop
                setShowSuggestions={setShowSuggestions} // Send ned som prop
            />
            <ChatFooter
                onSend={onSend}
                setShowSuggestions={setShowSuggestions} // Send ned som prop
            />
        </div>
    );
}
function ChatHeader({ onClose }) {
    const { language } = useContext(LanguageContext); // Bruk useContext for å få tilgang til det nåværende språket
    const textData = language === 'norsk' ? no : en;
    return (
        <div className="chatHeader">
            <img
                src="/mn-regnskap-logo.webp"
                alt="Logo"
                className="chatLogo"
            />
            <div className="chatHeaderText">
                <h7 className="chatheader-overskrift">{textData.chatWithUs}</h7>
                <span>{textData.respondFast}</span>
            </div>
            <button className="closeChat" onClick={onClose}>
                <FontAwesomeIcon icon={faTimes} />
            </button>
        </div>
    );
}
function ChatBody({ messages, onSend, showSuggestions, setShowSuggestions }) {
    const chatBodyRef = useRef(null);
    useEffect(() => {
        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSuggestionClick = (suggestionContent) => {
        onSend(suggestionContent, 'user');
        setShowSuggestions(false);

        fetch("https://n4h0.pythonanywhere.com/api/chatbot", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ question: suggestionContent }),
        })
            .then((response) => response.json())
            .then((data) => {
                const formattedTime = new Date().toLocaleTimeString("nb-NO", {
                    hour: "2-digit",
                    minute: "2-digit",
                });
                onSend(data.answer || data, 'bot', formattedTime);
            })
            .catch((error) => {
                console.error("Error fetching response from server:", error);
                onSend("Det skjedde en feil, kjører serveren?", 'bot');
            });
    };

    const renderMessages = () => {
        return messages.map((msg, index) => {
            if (msg.type === "suggestion") {
                return showSuggestions ? (
                    <div key={index} className="messageContainer suggestionContainer">
                        <div className="suggestionBubble">
                            <button
                                className="suggestionButton"
                                onClick={() => handleSuggestionClick(msg.content)}
                            >
                                {msg.content}
                            </button>
                        </div>
                    </div>
                ) : null;
            } else {
                return (
                    <div key={index} className={`messageContainer ${msg.type === "user" ? "userContainer" : "botContainer"}`}>
                        {msg.type === "bot" && <FontAwesomeIcon icon={faRobot} className="botIcon" />}
                        <div className={`${msg.type === "user" ? "userMessage" : "botMessage"} chatMessage`}>
                            <p className="messageContent">{msg.content}</p>
                            <div className="messageTime">{msg.time}</div>
                        </div>
                    </div>
                );
            }
        });
    };

    const { language } = useContext(LanguageContext); // Bruk useContext for å få tilgang til det nåværende språket
    const textData = language === 'norsk' ? no : en;
    const welcomeMessage = (
        <div className="chatTopMessage">
            <p> {textData.chat_mona}&nbsp; <a href="https://huggingface.co/NbAiLab/nb-sbert-base" target="_blank">NB-SBERT-BASE</a>. &nbsp;{textData.aboutChat}
            </p>
        </div>
    );

    return (
        <div className="chatBody" ref={chatBodyRef}>
            {welcomeMessage}
            {renderMessages()}
        </div>
    );
}

function ChatFooter({ onSend, setShowSuggestions }) {
    const [message, setMessage] = useState("");

    const handleInputChange = (e) => setMessage(e.target.value);

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            sendMessage();
        }
    };

    const sendMessage = () => {
        if (message.trim() !== "") {
            onSend(message);
            setMessage("");
            const formattedTime = new Date().toLocaleTimeString("nb-NO", {
                hour: "2-digit",
                minute: "2-digit",
            });

            fetch("https://n4h0.pythonanywhere.com/api/chatbot", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ question: message }),
            })
                .then((response) => response.json())
                .then((data) => {
                    // Håndterer tilfelle hvor serveren gir svar med forslag.
                    if (data.suggestions && data.suggestions.length > 0) {
                        // Sender den innledende meldingen fra serveren
                        onSend(data.message, "bot");

                        // Deretter sender hvert av forslagene som separate meldinger
                        data.suggestions.forEach((suggestion) => {
                            const suggestionMessage = suggestion.question;
                            setShowSuggestions(true);
                            onSend(suggestionMessage, "suggestion"); // Send meldingen med riktig type "suggestion"
                            setShowSuggestions(true);
                        });
                    } else if (typeof data === "string") {
                        // Når serveren gir et direkte svar som en streng, uten å bruke 'answer' nøkkelen.
                        const newBotResponse = {
                            type: "bot",
                            content: data,
                            time: formattedTime,
                        };
                        onSend(newBotResponse.content, "bot");
                        setShowSuggestions(false);
                    } else {
                        // Håndterer andre tilfeller, for eksempel feil eller uventet respons.
                        onSend(
                            "Beklager, jeg forstod ikke det. Kan du prøve å formulere spørsmålet annerledes?",
                            "bot"
                        );
                    }
                })
                .catch((error) => {
                    console.error("Error fetching response from server:", error);
                    onSend("Det skjedde en feil, kjører serveren?", "bot");
                    setShowSuggestions(true);
                });
        }
    };
    const { language } = useContext(LanguageContext); // Bruk useContext for å få tilgang til det nåværende språket
    const textData = language === 'norsk' ? no : en;
    return (
        <div className="chatFooter">
            <input
                type="text"
                className="messageInput"
                placeholder={textData.writeMessage}
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
