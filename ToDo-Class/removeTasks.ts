import fs from 'fs';
import Text from './text'

export default class RemovingTasks extends Text{

    constructor() {
        super();
    }

    removeTask () {
        if (process.argv[2] == '-r') {
            /*for(var i = 0; i <= this.renderTask.length; i++) {
            if (this.renderTask[i] (ez az i-dik index value-ja) === process.argv[3]) {
                    this.renderTask.splice(i, 1);
                }
            }*/
            /*helyesebben: 
            for(let i = 0; i <= this.renderTask.length; i++) {
            if (i = process.argv[3]) {
                    this.renderTask.splice(i, 1);
                }
            }*/

            this.renderTask.splice(process.argv[3], 1)
            let content = this.renderTask.join('\n');
            fs.writeFileSync('list-tasks.txt', content);   
        }
    }
}

/*let toDo1 = new RemovingTask;

toDo1.removeTask()*/ 