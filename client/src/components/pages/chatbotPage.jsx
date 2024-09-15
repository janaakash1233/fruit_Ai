import React, { useState, useEffect } from 'react';

function ChatbotPage() {
  const [messages, setMessages] = useState([]); 
  const [userInput, setUserInput] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [showGreeting, setShowGreeting] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessages([{ sender: 'bot', text: 'Hello Chat!' }]); 
      setShowInput(true);
      setShowGreeting(false); 
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const getBotResponse = (input) => {
    if (input.toLowerCase().includes('hii')) {
      return "Hello! I'm here to assist you with fruit information. Type 'fruit' to see a list of fruits.";
    }
    if (input.toLowerCase().includes('hello')) {
      return "Hi! I'm here to assist you with fruit information. Type 'fruit' to see a list of fruits.";
    }
    if (input.toLowerCase().includes('fruit')) {
      return "Apple,Mango,banana";
    }
    if (input.toLowerCase().includes('apple')) {
      return 'Here are the details for Apple: Apples are crisp, juicy fruits packed with fiber and vitamins, commonly enjoyed fresh or in desserts. They come in various colors, including red, green, and yellow, with each type offering a slightly different flavor.';
    }
    if (input.toLowerCase().includes('banana')) {
      return "Here are the details for Banana: bananas are crisp, juicy fruits packed with fiber and vitamins, commonly enjoyed fresh or in desserts. They come in various colors, including red, green, and yellow, with each type offering a slightly different flavor.";
    }
    if (input.toLowerCase().includes('mango')) {
      return "Here are the details for Mango: Mangos are crisp, juicy fruits packed with fiber and vitamins, commonly enjoyed fresh or in desserts. They come in various colors, including green, and yellow, with each type offering a slightly different flavor.";
    }
    return 'Sorry, I did not understand that.';
  };

  const handleSendMessage = () => {
    if (!userInput.trim()) return;

    const newMessage = { sender: 'user', text: userInput };
    setMessages([...messages, newMessage]);

    const botMessage = { sender: 'bot', text: getBotResponse(userInput) };
    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 1000);

    setUserInput('');
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-cyan-50">
      <div className="flex flex-col justify-between w-full max-w-lg h-full max-h-[90vh] sm:max-h-[80vh] bg-gradient-to-b from-pink-200 to-purple-100 shadow-lg rounded-lg p-4 sm:p-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4">Chatbot</h1>

        <div className="flex-1 overflow-y-auto p-4 bg-gray-100 rounded-lg shadow-inner">
          {showGreeting && (
            <div className="text-left text-2xl text-gray-600 pt-60 mb-4"> <span className='font-bold'>Hello</span><span className='text-purple-500 flex font-bold'>Chat!</span>
            <p className='text-gray-400 text-sm '>The last chat app you'll ever need.</p>
            </div>
          )}

          {!showGreeting && messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.sender === 'user' ? 'justify-end' : 'justify-start'
              } mb-4`}
            >
              <div
                className={`${
                  message.sender === 'user'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-300 text-black'
                } p-3 rounded-lg max-w-xs break-words`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>

        {showInput && (
          <div className="flex mt-4">
            <input
              type="text"
              className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSendMessage();
              }}
            />
            <button
              className="ml-2 bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatbotPage;
