import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment({ content, onDeleteComment }) {

    function handleDeleteComment() {
        console.log('deletar')
        onDeleteComment(content)
    }


  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/dev-Paulo.png"
        alt="Foto de perfil do usuário"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Paulo Renato</strong>
              <time title="22 de Novembro às 16:00h"> Cerca de 1h atrás </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
