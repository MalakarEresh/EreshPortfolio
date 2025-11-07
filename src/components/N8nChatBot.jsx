// src/components/N8nChatBot.jsx
import { useEffect } from "react"
import "@n8n/chat/style.css"
import { createChat } from "@n8n/chat"
import "./N8nChatBot.css"

export const N8nChatBot = () => {
  useEffect(() => {
    createChat({
      webhookUrl:
        "https://mytestdemo04.app.n8n.cloud/webhook/35cf6926-f272-41e6-ae48-3baba9e4be76/chat",

      // Try these simpler options first
      mode: "window",

      // Theme configuration
      theme: {
        primaryColor: "#4F46E5",
      },

      // Try direct properties
      initialMessages: ["Hi there! 👋", "How can I help you today?"],

      // Add custom CSS class
      className: "custom-n8n-chat",
      i18n: {
        en: {
          title: "AI Assistant",
          subtitle: "start chat",
          footer: "",
          getStarted: "New Conversation",
          inputPlaceholder: "Type your question..",
        },
      },
    })
  }, [])

  return null
}
