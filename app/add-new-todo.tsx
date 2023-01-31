"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

async function addTodo(name: string, refresh: any) {
  await fetch(`https://sid-todo.vercel.app/api/todo/add`, {
    method: "POST",
    body: JSON.stringify({ name }),
  });

  refresh();
}

export default function AddNewTodo() {
  const router = useRouter();
  let [name, setName] = useState("");
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button
        style={{ margin: "0px 10px" }}
        onClick={async () => {
          await addTodo(name, router.refresh);
          setName("");
        }}
      >
        Add
      </button>
    </div>
  );
}
