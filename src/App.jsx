import { Header } from "./components/Header";
import { Post } from './components/Post';
import { Sidebar } from "./components/Sidebar";

import "./global.css";
import styles from "./App.module.css";

function App() {

  

  return (
    <div className="App">
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Diego Fernandes"
            content="Lorem ipsunasoi aoidoi saoids osd"
          />
          <Post
            author="Diego Fernandes"
            content="Lorem ipsunasoi aoidoi saoids osd"
          />
        </main>
      </div>
    </div>
  );
}

export default App;
