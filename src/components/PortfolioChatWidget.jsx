import { useEffect, useMemo, useRef, useState } from "react"
import { MessageCircle, Send, Sparkles, X } from "lucide-react"

const CHAT_API_URL = "https://chatbot-api-bay.vercel.app/api/chat"
const RATE_LIMIT_BUTTON_LOCK_MS = 60_000

const getAssistantMessage = (payload) => {
  if (!payload) {
    return "Sorry, I couldn't generate a response right now."
  }

  if (typeof payload === "string") {
    return payload
  }

  return (
    payload.reply ||
    payload.response ||
    payload.message ||
    payload.answer ||
    payload.data?.reply ||
    payload.data?.message ||
    "Sorry, I couldn't generate a response right now."
  )
}

export const PortfolioChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isRateLimited, setIsRateLimited] = useState(false)
  const [input, setInput] = useState("")
  const messagesEndRef = useRef(null)
  const rateLimitTimeoutRef = useRef(null)
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi! I’m your portfolio assistant. Ask me about projects, skills, or experience.",
    },
  ])

  const canSend = useMemo(
    () => input.trim().length > 0 && !isLoading && !isRateLimited,
    [input, isLoading, isRateLimited],
  )

  useEffect(() => {
    return () => {
      if (rateLimitTimeoutRef.current) {
        clearTimeout(rateLimitTimeoutRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isOpen) {
      return
    }

    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" })
  }, [messages, isLoading, isOpen])

  const sendMessage = async () => {
    const content = input.trim()
    if (!content || isLoading || isRateLimited) {
      return
    }

    const nextMessages = [...messages, { role: "user", content }]
    setMessages(nextMessages)
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch(CHAT_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: content,
          messages: nextMessages,
        }),
      })

      const payload = await response.json().catch(() => null)

      if (response.status === 429) {
        setIsRateLimited(true)

        if (rateLimitTimeoutRef.current) {
          clearTimeout(rateLimitTimeoutRef.current)
        }

        rateLimitTimeoutRef.current = setTimeout(() => {
          setIsRateLimited(false)
          rateLimitTimeoutRef.current = null
        }, RATE_LIMIT_BUTTON_LOCK_MS)

        setMessages((previous) => [
          ...previous,
          {
            role: "assistant",
            content:
              payload?.message ||
              payload?.error ||
              "Rate limit reached. You’ve used your available questions for now. Please try again later.",
          },
        ])
        return
      }

      if (!response.ok) {
        throw new Error(payload?.error || "Chat request failed")
      }

      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content: getAssistantMessage(payload),
        },
      ])
    } catch {
      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content: "I’m having trouble connecting to the chat service. Please try again in a moment.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const onInputKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isOpen && (
        <section className="mb-3 w-[min(92vw,390px)] overflow-hidden rounded-2xl border border-border bg-card/95 text-foreground shadow-[0_10px_35px_rgba(0,0,0,0.2)] backdrop-blur-md">
          <header className="relative border-b border-border bg-linear-to-r from-primary/20 via-primary/10 to-transparent px-4 py-3">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Sparkles size={16} />
                </span>
                <div className="text-left">
                  <h3 className="text-sm font-semibold">Assistant</h3>
                  <p className="text-xs text-muted-foreground">Here to guide you</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>
          </header>

          <div className="max-h-[360px] space-y-3 overflow-y-auto px-3 py-3 text-left">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`max-w-[87%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                  message.role === "user"
                    ? "ml-auto rounded-br-sm bg-primary text-primary-foreground"
                    : "rounded-bl-sm border border-border bg-background"
                }`}
              >
                {message.content}
              </div>
            ))}

            {isLoading && (
              <div className="w-fit rounded-2xl rounded-bl-sm border border-border bg-background px-3 py-2 text-sm text-muted-foreground animate-pulse">
                Working on it...
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <footer className="border-t border-border bg-background/70 p-3">
            <div className="flex items-end gap-2">
              <textarea
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={onInputKeyDown}
                rows={2}
                placeholder="Type your message..."
                className="min-h-16 flex-1 resize-none rounded-xl border border-input bg-background px-3 py-2 text-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-primary"
              />
              <button
                type="button"
                onClick={sendMessage}
                disabled={!canSend}
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </div>
          </footer>
        </section>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_8px_24px_hsl(var(--primary)/0.45)] transition-transform hover:scale-105"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X size={20} /> : <MessageCircle size={20} />}
      </button>
    </div>
  )
}
