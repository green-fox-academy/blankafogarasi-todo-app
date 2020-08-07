import fs from 'fs';

export default class AddingTasks {
    tasks: string [] = [];
    tasksText;
    renderTask;

    constructor() {
        this.tasksText = fs.readFileSync('list-tasks.txt', 'utf8');
        this.renderTask = this.tasksText.split('\n');
    }

    addTask() {
        if (process.argv[2] == '-a') {
            fs.appendFile('list-tasks.txt', `\n${process.argv[3]}` , 'utf8', function (err) {
                if (err) return console.log(err);
            });
        }   
    }
}

let toDo1 = new AddingTasks;

toDo1.addTask()