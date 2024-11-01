export interface Ilist {
  name: string;
  id: number;
  isCompleted: boolean;
}

export interface IShowTodoListUIProps {
  todoLists: Array<Ilist>;
  doneLists: Array<Ilist>;
}