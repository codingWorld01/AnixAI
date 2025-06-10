"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";

interface ChatMessage {
  sender: "user" | "bot";
  text: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { sender: "bot", text: "Hello! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    const userMessage = input;
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to get response");
      }

      setMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);
    } catch (error: any) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Sorry, something went wrong. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      {/* Chatbot Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full p-3 sm:p-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 sm:w-7 sm:h-7 group-hover:animate-pulse"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
            />
          </svg>
        </button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-2xl w-[90vw] max-w-[400px] h-[80vh] max-h-[600px] sm:w-96 sm:h-[500px] flex flex-col transform transition-all duration-300 scale-100 origin-bottom-right">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-2 sm:p-3 rounded-t-2xl flex justify-between items-center">
            <h3 className="text-lg sm:text-xl tracking-tight">
              AnixAI Chatbot
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:opacity-80 transition-opacity"
              aria-label="Close chatbot"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 sm:w-6 sm:h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-3 sm:space-y-4 bg-gradient-to-b from-gray-50/50 to-white/50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                } animate-fade-in`}
              >
                <div
                  className={`max-w-[80%] p-3 sm:p-4 rounded-xl shadow-md transition-all duration-200 ${
                    msg.sender === "user"
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                      : "bg-white/80 text-black border border-gray-200"
                  }`}
                >
                  <ReactMarkdown
                    components={{
                      a: ({ href, children }) => {
                        if (href?.startsWith("/")) {
                          return (
                            <Link
                              href={href}
                              onClick={() => setIsOpen(false)}
                              className="text-blue-500 underline hover:text-blue-700 transition-colors"
                            >
                              {children}
                            </Link>
                          );
                        }
                        return (
                          <a
                            href={href}
                            className="text-blue-500 underline hover:text-blue-700 transition-colors"
                            rel="noopener noreferrer"
                          >
                            {children}
                          </a>
                        );
                      },
                    }}
                  >
                    {msg.text}
                  </ReactMarkdown>
                </div>
              </div>
            ))}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex justify-start animate-fade-in">
                <div className="max-w-[80%] p-3 sm:p-4 rounded-xl bg-white/80 text-black border border-gray-200 shadow-md">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-500 rounded-full animate-bounce delay-0"></div>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-500 rounded-full animate-bounce delay-200"></div>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-500 rounded-full animate-bounce delay-400"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form
            onSubmit={handleSendMessage}
            className="p-2 sm:p-3 border-t border-white/30 bg-white/30 rounded-b-2xl"
          >
            <div className="flex space-x-2 sm:space-x-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 sm:px-4 py-2 sm:py-3 border border-gray-200/50 bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder-black text-sm sm:text-base"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 sm:px-5 py-2 sm:py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-sm sm:text-base"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
