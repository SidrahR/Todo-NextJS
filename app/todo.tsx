"use client";

import { useRouter } from "next/navigation";

async function update(id: string, isDone: boolean, refresh: any) {
  await fetch(`https://sid-todo.vercel.app/api/todo/update`, {
    method: "POST",
    body: JSON.stringify({ id, isDone }),
  });
  refresh();
}

async function deleteTodo(id: string, refresh: any) {
  await fetch(`https://sid-todo.vercel.app/api/todo/delete?id=${id}`, {
    method: "DELETE",
  });

  refresh();
}

export default function Todo({ todo }: any) {
  const router = useRouter();

  return (
    <>
      <input
        type="checkbox"
        onChange={(e) => update(todo.id, e.target.checked, router.refresh)}
        checked={todo.isDone}
      />
      <span>{todo.name}</span>
      <button
        style={{ margin: "0px 10px" }}
        onClick={() => deleteTodo(todo.id, router.refresh)}
      >
        Delete
      </button>
    </>
  );
}
