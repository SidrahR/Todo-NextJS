import Todo from "./todo";

async function getTodos() {
  let todos = await fetch("https://sid-todo.vercel.app/api/todo/list");
  return todos.json();
}

export default async function TodoList() {
  const { todos } = await getTodos();

  return (
    <div>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {todos.map((t: any) => {
          return (
            <li key={t.id} style={{ padding: "5px 0px" }}>
              <Todo todo={t} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
