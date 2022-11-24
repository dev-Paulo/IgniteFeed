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
        {type: 'paragraph', content:  'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        {type: 'link', content: "jane.design/doctorcare"},       
      ],
      publishedAt: new Date('2022-11-20 20:00:00')
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://github.com/thsrossi.png",
        name: "Matheus Rossi",
        role: "Jogador de Sinuca "
      },
      content: [
        {type: 'paragraph', content: 'Fala galeraa 👋'},
        {type: 'paragraph', content:  'Joguei uma sinuca hoje e fumei varios cigarros. Estou muito feliz'},
        {type: 'link', content: "jane.design/doctorcare"},       
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
