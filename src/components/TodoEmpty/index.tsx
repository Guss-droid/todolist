import styles from "./styles.module.css"

export function TodoEmpty() {
  return (      
      <div className={styles.todoList}>
        <img src="./clipboard.svg" />

        <p className={styles.titleTodoBody}>
          Você ainda não tem tarefas cadastradas
        </p>

        <p className={styles.subtitleTodo}>
          Crie tarefas e organize seus itens a fazer
        </p>
      </div>
  )
}