# Next AI 🤖

An AI-powered document Q&A assistant that allows users to upload PDF files and ask questions in natural language. Built with LangChain, OpenAI GPT, and React.

---

## Demo

> Upload a PDF → Ask a question → Get an instant, accurate answer

---

## Features

- 📄 **PDF Upload** — Upload any document for analysis
- 💬 **Natural Language Q&A** — Ask questions in plain English
- 🎤 **Voice Input** — Speak your question using Web Speech API
- ⚡ **Real-time Streaming** — Responses streamed back instantly
- 🔍 **RAG Architecture** — Retrieval-Augmented Generation for accurate answers

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React, Web Speech API |
| Backend | Node.js, Express |
| AI / LLM | LangChain, OpenAI GPT-3.5 Turbo |
| Document Processing | PDF parsing, text chunking, vector embeddings |

---

## Getting Started

### Prerequisites

- Node.js 18+
- OpenAI API Key

### Installation

```bash
# Clone the repo
git clone https://github.com/your-username/nextai.git
cd nextai

# Install frontend dependencies
npm install

# Install backend dependencies
cd Server
npm install
```

### Environment Setup

Create a `.env` file in the **Server** directory:

```env
OPENAI_API_KEY=your_openai_api_key_here
```

### Run the App

```bash
# Start backend (from Server/)
cd Server
node server.js

# Start frontend (from root)
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## How It Works

```
User uploads PDF
      ↓
PDF parsed & split into chunks
      ↓
Chunks converted to vector embeddings (OpenAI)
      ↓
User asks a question (text or voice)
      ↓
Relevant chunks retrieved via similarity search
      ↓
GPT-3.5 Turbo generates answer from context
      ↓
Answer streamed back to user
```

---

## Project Structure

```
nextai/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── Server/
│   ├── uploads/               # Temporary PDF storage
│   ├── chat.js                # Chat logic
│   ├── server.js              # Express API server
│   └── package.json
├── src/
│   ├── components/
│   │   ├── ChatComponent.js   # Main chat UI + voice input
│   │   ├── PdfUploader.js     # PDF upload handler
│   │   └── RenderQA.js        # Q&A display component
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .gitignore
├── package.json
└── README.md
```

---

## Author

**Xiaoying Bao**  
