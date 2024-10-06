import React, { useState } from "react";

const ChatbotPage = ({ id }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (input.trim() !== "") {
      const userMessage = { sender: "user", text: input };
      setMessages([...messages, userMessage]);
      setInput("");
      setLoading(true);

      try {
        const response = await fetch("http://localhost:8080/api/gemini", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: input }),
        });

        const data = await response.json();

        const botMessage = {
          sender: "bot",
          text: data.result.response.candidates[0].content.parts[0].text,
        };

        setMessages((prevMessages) => [...prevMessages, botMessage]);
      } catch (error) {
        console.error("Error al comunicarse con el servidor:", error);
        const errorMessage = {
          sender: "bot",
          text: "Lo siento, hubo un problema al procesar tu mensaje. Inténtalo de nuevo.",
        };
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <p className="text-4xl font-bold text-black mt-8">Any questions?</p>
      <p className="text-4xl font-bold text-black mb-8">Ask our agent!</p>
      <div className="h-[60%] bg-main-beige rounded-xl w-[60%] flex flex-col justify-center items-end px-4 py-1">
        <div className="h-[95%] bg-white rounded-xl w-full opacity-80 flex flex-col justify-end items-center p-2">
          <div className="w-full flex flex-col justify-center items-center gap-[1px] py-3 px-6 overflow-y-auto">
            {messages.length === 0 ? (
              <div className="text-gray-500">No messages yet.</div>
            ) : (
              messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-2 rounded-xl max-w-[80%] break-words ${
                    message.sender === "user"
                      ? "bg-main-beige self-end text-black"
                      : "bg-gray-300 self-start text-black"
                  }`}
                  style={{
                    wordWrap: "break-word",
                    overflowWrap: "break-word",
                  }}
                >
                  {message.text}
                </div>
              ))
            )}
            {loading && (
              <div className="self-start bg-gray-300 text-black p-2 rounded-xl max-w-[80%]">
                El bot está escribiendo...
              </div>
            )}
          </div>
          <div className="w-full">
            <input
              type="text"
              className="bg-white w-[90%] border border-main-beige rounded-l-lg p-2 outline-none"
              placeholder="Escribe tu mensaje aquí"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              disabled={loading}
            />
            <button
              className="bg-blue-500 border border-blue-500 w-[10%] font-bold text-white rounded-r-lg p-2 transition duration-100 hover:bg-white hover:text-black"
              onClick={handleSendMessage}
              disabled={loading}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;
