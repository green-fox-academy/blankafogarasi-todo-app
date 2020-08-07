import fs from 'fs';

export default class Text {
    tasks: string [] = [];
    tasksText;
    renderTask;

    constructor() {
        this.tasksText = fs.readFileSync('list-tasks.txt', 'utf8');
        this.renderTask = this.tasksText.split('\n');
    }
}