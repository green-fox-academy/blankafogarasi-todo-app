import fs from 'fs';
import Text from './text'

export default class ListingTasks extends Text{

    constructor() {
        super();
    }

    listTask() {
        if (process.argv[2] == '-l') {
            if (this.tasksText.length === 0) {
                console.log('No todos for today! :)');
            } else{
            console.log(this.renderTask
            .map((thing, index) => `${index + 1} ${thing.toString()} `)
            .join('\n'));
            }
        }    
    }
}

let toDo1 = new ListingTasks;

toDo1.listTask()