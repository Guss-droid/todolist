import { Trash } from "phosphor-react";
import { useEffect, useState } from "react";

import styles from "./styles.module.css"

interface ITodoItems {
  todos: {
    content: string;
    checked: boolean;
  };
  onRemoveTodo: (todos: string) => void;
  onCheckTodo: (todos: string) => void;
}

export function TodoItem({ todos, onRemoveTodo, onCheckTodo }: ITodoItems) {

  function handleRemoveTodo() {
    onRemoveTodo(todos.content)
  }

  function handleCheckTodo() {
    onCheckTodo(todos.content)
  }

  return (
    <div className={styles.todoItem}>
      <div className={styles.todoBody}>
        <input type="checkbox" checked={todos.checked} onChange={handleCheckTodo} />

        <p className={todos.checked ? styles.textTodoChecked : styles.textTodo}>
          {todos.content}
        </p>
      </div>

      <div className={styles.todoHeader}>
        <button title="Deletar todo" onClick={handleRemoveTodo}>
          <Trash size={24} />
        </button>
      </div>
    </div>
  )
}