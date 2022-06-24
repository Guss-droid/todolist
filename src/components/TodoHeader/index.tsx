import { useEffect, useState } from "react";
import styles from "./styles.module.css"

interface ITodoHeader {
  todos: {
    checked: boolean;
  }[];
  quantity: number;
}

export function TodoHeader({ quantity, todos }: ITodoHeader) {

  const newTodosChecked = todos?.filter(todo => todo.checked === true)

  // useEffect(() => {
  //   setTodosChecked(newTodosChecked!.checked)
  // }, [newTodosChecked,])

  return (
    <div className={styles.todoHeader}>
      <p className={styles.titleTodo}>
        Tarefas criadas
        <span>{quantity}</span>
      </p>

      <p className={styles.titleTodoCompleted}>
        Concluídas
        <span>{newTodosChecked?.length} de {quantity}</span>
      </p>
    </div>
  )
}