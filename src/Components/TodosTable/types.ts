export interface TodoItem {
    createdAt: string;
    id: number;
    status: "finished" | "overdue" | "in progress" | "draft";
    text: string;
    title: string;
}

export interface TodosList {
    todos: Array<TodoItem>;
}
