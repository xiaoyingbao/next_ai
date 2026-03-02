import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { RetrievalQAChain } from "langchain/chains";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { PromptTemplate } from "langchain/prompts";

import { PDFLoader } from "langchain/document_loaders/fs/pdf";


// NOTE: change this default filePath to any of your default file name  后端只有一个文件
const chat = async (filePath = "./uploads/Next_AI_text_pdf.pdf", query) => { // 传参里面的 = 表示默认值，也就是默认上传文件名
// step 1:
const loader = new PDFLoader(filePath);

const data = await loader.load();

// step 2:
const textSplitter = new RecursiveCharacterTextSplitter({ // 这些是library，然后转变为为TOKEN 
chunkSize: 500, //  (in terms of number of characters) 
chunkOverlap: 0,
});

const splitDocs = await textSplitter.splitDocuments(data); // 调用class上面的函数来做 

// step 3

const embeddings = new OpenAIEmbeddings({
openAIApiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

const vectorStore = await MemoryVectorStore.fromDocuments(
splitDocs,
embeddings
);

// step 4: retrieval

// const relevantDocs = await vectorStore.similaritySearch(
// "What is task decomposition?"
// );

// step 5: qa w/ customzie the prompt
const model = new ChatOpenAI({
modelName: "gpt-3.5-turbo",
openAIApiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

const template = `Use the following pieces of context to answer the question at the end.
If you don't know the answer, just say that you don't know, don't try to make up an answer.
Use three sentences maximum and keep the answer as concise as possible.

{context}
Question: {question}
Helpful Answer:`;

const chain = RetrievalQAChain.fromLLM(model, vectorStore.asRetriever(), {
prompt: PromptTemplate.fromTemplate(template),  // 创建 - 回复 - 
// returnSourceDocuments: true,
});

const response = await chain.call({ // 调用 ， 返回 response 
query,
});

return response;
};

export default chat;




