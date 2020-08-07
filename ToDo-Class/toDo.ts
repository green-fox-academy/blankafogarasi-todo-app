import ListingTasks from './listTasks'
import RemovingTask from './removeTasks';
import AddingTasks from './addTasks'



class ToDoList {
    listingTasks: ListingTasks;
    addingTasks: AddingTasks;
    removingTasks: RemovingTask;
    
    constructor() {
        this.listingTasks = new ListingTasks();
        this.addingTasks = new AddingTasks();
        this.removingTasks = new RemovingTask();   
    }
}

let toDo = new ToDoList();

toDo.listingTasks.listTask();
toDo.addingTasks.addTask();
toDo.removingTasks.removeTask();
