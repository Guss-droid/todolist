import { FormEvent, useEffect, useState } from "react";
import { TodoEmpty } from "./components/TodoEmpty";
import { TodoHeader } from "./components/TodoHeader";
import { TodoItem } from "./components/TodoItem";

import styles from "./styles.module.css";

interface ITodos {
  content: string;
  checked: boolean;
}

export function App() {

  const [newTodo, setNewTodo] = useState("")
  const [todo, setTodo] = useState<ITodos[]>([])

  function handleCreateNewTodo(e: FormEvent) {
    e.preventDefault()

    setTodo([...todo, { content: newTodo, checked: false }])
    setNewTodo("")
  }

  function handleRemoveTodo(todoToRemove: string) {
    const todosWithoutDeleted = todo.filter(todos => {
      return todos.content !== todoToRemove
    })

    setTodo(todosWithoutDeleted)
  }

  function handleCompleteTask(todoToComplete: string) {
    const updated = todo.map(task => {
      if(task.content !== todoToComplete) return task

      return {
        ...task,
        checked: true
      }
    })

    setTodo(updated)
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img src="./logo.svg" />
      </header>

      <main>
        <form onSubmit={handleCreateNewTodo} className={styles.createTodo}>
          <input
            placeholder="Adicione uma nova tarefa"
            value={newTodo}
            onChange={e => setNewTodo(e.target.value)}
          />

          <button type="submit">
            Criar
          </button>
        </form>

        <div className={styles.todoList}>
          <TodoHeader
            quantity={todo.length}
            todos={todo}
          />

          {todo.length <= 0 ?
            <TodoEmpty />
            :
            todo.map(todos => (
              <TodoItem
                onRemoveTodo={handleRemoveTodo}
                onCheckTodo={handleCompleteTask}
                todos={todos}
              />
            ))}
        </div>
      </main>
    </div>
  )
}