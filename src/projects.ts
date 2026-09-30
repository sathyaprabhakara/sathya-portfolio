import creator from './assets/creatorhub.png';
import city from './assets/banglorebyte.png';
import document from './assets/aidocumentchatbot.png';
import loop from './assets/lifeloop.png';
import song from './assets/ai-song.png';
import news from './assets/ai-news.png';
export const projects = [
  { id: 'p4', title: 'CreatorHub', category: 'Full-stack', tag: 'JAVA / SPRING BOOT / POSTGRESQL', description: 'A secure foundation for the next generation of creators.', image: creator, color: 'lavender' },
  { id: 'p5', title: 'BangaloreByte', category: 'AI engineering', tag: 'FASTAPI / OLLAMA / REDIS', description: 'Local intelligence. A city’s worth of answers.', image: city, color: 'peach' },
  { id: 'p6', title: 'AI Document Chatbot', category: 'AI engineering', tag: 'LANGCHAIN / CHROMADB / OLLAMA', description: 'Your documents, in conversation. Entirely local.', image: document, color: 'green' },
  { id: 'p3', title: 'LifeLoop', category: 'Mobile', tag: 'REACT NATIVE / TYPESCRIPT / EXPO', description: 'Real moments, connected through shared stories.', image: loop, color: 'peach' },
  { id: 'p1', title: 'AI Song & Poem Generator', category: 'AI engineering', tag: 'NODE.JS / TYPESCRIPT / OLLAMA', description: 'A little inspiration, turned into something lyrical.', image: song, color: 'green' },
  { id: 'p2', title: 'AI News Agent', category: 'AI engineering', tag: 'PYTHON / OPENAI / GITHUB ACTIONS', description: 'From the latest headlines to an autonomous news pipeline.', image: news, color: 'lavender' },
];
