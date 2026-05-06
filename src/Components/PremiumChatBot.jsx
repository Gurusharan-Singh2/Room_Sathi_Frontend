import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "../styles/chatbot.css";
import robot from "../assets/7V3E.gif";

const PremiumChatBot = () => {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isOnline, setIsOnline] = useState(true);

  const messagesEndRef = useRef(null);

  // Welcome message
  useEffect(() => {
    setChat([{ bot: "Hi 👋 I'm RoomSathi AI. How can I help you?" }]);
  }, []);

  // Auto scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  // Voice speak
  const speak = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-IN";
    window.speechSynthesis.speak(speech);
  };

  // Send message
  const sendMessage = async (text = msg) => {
    if (!text.trim()) return;

    const messageId = Date.now();

    const newMsg = {
      id: messageId,
      user: text,
      status: "sent"
    };

    const newChat = [...chat, newMsg];
    setChat(newChat);
    setMsg("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:3005/api/chat", {
        message: text,
        userId: "user123"
      });

      // delivered
      setChat(prev =>
        prev.map(m =>
          m.id === messageId ? { ...m, status: "delivered" } : m
        )
      );

      // seen
      setTimeout(() => {
        setChat(prev =>
          prev.map(m =>
            m.id === messageId ? { ...m, status: "seen" } : m
          )
        );
      }, 1000);

      // bot reply
      setChat(prev => [
        ...prev,
        { bot: res.data.reply, rooms: res.data.rooms }
      ]);

      speak(res.data.reply);

    } catch (err) {
      setChat(prev => [
        ...prev,
        { bot: "⚠️ Server error. Try again." }
      ]);
    }

    setLoading(false);
  };

  // Voice input
  const startVoice = () => {
    const recognition =
      new (window.SpeechRecognition || window.webkitSpeechRecognition)();

    recognition.lang = "en-IN";
    recognition.start();

    recognition.onresult = (e) => {
      const text = e.results[0][0].transcript;
      sendMessage(text);
    };
  };

  return (
    <>
      {/* Floating button */}
      <button className="chat-btn" onClick={() => setOpen(!open)}>
        🤖
      </button>

      {open && (
        <div className="chat-box">

          {/* HEADER */}
          <div className="chat-header">
            <div className="header-left">
              <div className="avatar-wrapper">
                <img src={robot} className="bot-avatar" />
                <span className={`status-dot ${isOnline ? "online" : "offline"}`}></span>
              </div>

              <div>
                <div className="bot-name">RoomSathi AI</div>
                <div className="bot-status">
                  {isOnline ? "Online" : "Offline"}
                </div>
              </div>
            </div>

            <button onClick={() => setOpen(false)}>✖</button>
          </div>

          {/* CHAT BODY */}
          <div className="chat-body">
            {chat.map((c, i) => (
              <div key={i}>

                {/* USER */}
                {c.user && (
                  <div className="user-row">
                    <div className="user-bubble">
                      {c.user}

                      <div className="ticks">
                        {c.status === "sent" && "✔"}
                        {c.status === "delivered" && "✔✔"}
                        {c.status === "seen" && <span className="seen">✔✔</span>}
                      </div>
                    </div>
                  </div>
                )}

                {/* BOT */}
                {c.bot && (
                  <div className="bot-row">
                    <img src={robot} className="bot-avatar" />

                    <div className="bot-bubble">
                      {c.bot}

                      {c.rooms && c.rooms.map((r, idx) => (
                        <div key={idx} className="room-card">
                          <h4>{r.title}</h4>
                          <p>₹{r.price}</p>
                          <p>{r.address}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            ))}

            {/* Typing */}
            {loading && (
              <div className="bot-row">
                <img src={robot} className="bot-avatar" />
                <div className="bot-bubble typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef}></div>
          </div>

          {/* INPUT */}
          <div className="chat-input">
            <input
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="Type message..."
            />
            <button onClick={() => sendMessage()}>➤</button>
            <button onClick={startVoice}>🎤</button>
          </div>

        </div>
      )}
    </>
  );
};

export default PremiumChatBot;