interface Todo {
    id: number,
    todo: string,
    completed: boolean,
    userId: number
};

export interface todoListRes {
    todos: Todo[],
    total: number,
    skip: number,
    limit: number,
}