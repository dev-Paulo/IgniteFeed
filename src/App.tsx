import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import "./global.css";
import styles from "./App.module.css";

function App() {
  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: "https://github.com/dev-Paulo.png",
        name: "Paulo Renato",
        role: "Frontend Developer"
      },
      content: [
        {type: 'paragraph', content: 'Fala galeraa 👋'},
        {type: 'paragraph', content:  'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no Ignite, curso da Rocketseat. O nome do projeto é IgniteFeed 🚀'},              
      ],
      publishedAt: new Date('2022-11-20 20:00:00')
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        name: "Dou Gie",
        role: "Frontend Developer "
      },
      content: [
        {type: 'paragraph', content: 'E ai pessoal!'},
        {type: 'paragraph', content:  'Concluí com sucesso meu curso Ignite da Rocketseat.'},             
      ],
      publishedAt: new Date('2022-11-11 20:00:00')
    },
  ];

  return (
    <div className="App">
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
         {posts.map(post => {
          return (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ) 
         })}
        </main>
      </div>
    </div>
  );
}

export default App;
