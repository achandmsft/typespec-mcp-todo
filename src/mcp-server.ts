import { setToolHandler } from "../tsp-output/typespec-mcp-server-js/tools.js";
import { server } from "../tsp-output/typespec-mcp-server-js/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { createTodoFileStore } from "./file-store.js";

const store = await createTodoFileStore();

setToolHandler({
  addTodo: async (text) => {
    return await store.add({ text, status: "todo" });
  },
  listTodos: async (filter?: "done" | "todo") => {
    const result = await store.list();
    return filter ? result.filter((todo) => todo.status === filter) : result;
  },
  deleteTodo: async (id) => {
    await store.delete(id);
    return `Deleted todo with id: ${id}`;
  },
  completeTodo: async (id) => {
    const todo = await store.get(id);
    if (!todo) throw new Error(`Todo with id ${id} not found`);
    const updated = { ...todo, status: "done" as "done" };
    await store.update(updated);
    return updated;
  },
  updateTodoText: async (id, text) => {
    const todo = await store.get(id);
    if (!todo) throw new Error(`Todo with id ${id} not found`);
    const updated = { ...todo, text };
    await store.update(updated);
    return updated;
  },
});

const transport = new StdioServerTransport();
await server.connect(transport);
console.error("Server started");
