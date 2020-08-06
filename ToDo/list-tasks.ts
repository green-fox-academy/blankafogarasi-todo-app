import fs from 'fs';

export default class ListOfTasks {

    listTasks () {
        console.log(fs.readFileSync('list-tasks.txt', 'utf8'))
    }
}