import fs from 'fs';
//import Plant from './Plant';

let listTasksText = fs.readFileSync('list-tasks.txt', 'utf8');
let listTasks: string [] = [];
listTasks = listTasksText.split('\n');

function printUsage () {
    console.log(fs.readFileSync('usage.txt', 'utf8'))
}

if (process.argv.length == 2) {
    printUsage()
}

if (process.argv[2] == '-l') {
    if (listTasksText.length === 0) {
        console.log('No todos for today! :)');
    } else{
    console.log(listTasks
    .map((thing, index) => `${index + 1} ${thing.toString()} `)
    .join('\n'));
    }
}
/*if (process.argv[2] == '-l') {
    for (let i = 0; i < listTasks.length; i++ ) {
        console.log(`${i +1} ${listTasks[i]}`);
    }
} */

if (process.argv[2] == '-a') {
    fs.appendFile('list-tasks.txt', process.argv[3], 'utf8', function (err) {
        if (err) return console.log(err);
    });
}
/*let newToDo = '';
if (process.argv[2] == '-a' && process.argv[3] == newToDo) {
    listTasks.push(newToDo);
}
*/

if (process.argv[2] == '-r') {
    for(var i = 0; i <= listTasks.length; i++) {
    if (listTasks[i] === process.argv[3]) {
            listTasks.splice(i, 1);
        }
    }
    let content = listTasks.join('/n');
    fs.writeFileSync('list-tasks.txt', content);   
}

