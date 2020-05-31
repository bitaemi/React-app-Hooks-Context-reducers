import React from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import useTodoState from "../hooks/useTodoState";
import { TodosProvider } from "../contexts/todos.contex";
// import useLocalStorageState from "./hooks/useLocalStorageState";

function TodoApp() {
  const initialTodos = [{ id: 1, task: "Make security notes", completed: false }]
  const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(
    initialTodos
  );

  // const [mood, setMood] = useLocalStorageState("mood", "happy");
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa"
      }}
      elevation={0}
    >
      <Grid container justify='center' style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodosProvider>
            <TodoForm addTodo={addTodo} />
            <TodoList
              todos={todos}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
            />
            {/* <button onClick={()=>setMood("angry")}>Click to get angry</button> */}
          </TodosProvider>
        </Grid>
      </Grid>
    </Paper>
  );
}
export default TodoApp;
