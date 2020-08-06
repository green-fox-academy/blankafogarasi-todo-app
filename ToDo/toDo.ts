import fs from 'fs';
import ListOfTasks from './list-tasks';
//import Plant from './Plant';

function printUsage () {
    console.log(fs.readFileSync('usage.txt', 'utf8'))
}

function listTasks () {
    console.log(fs.readFileSync('list-tasks.txt', 'utf8'))
}

if (process.argv.length == 2) {
    printUsage()
}

if (process.argv[2] == '-l') {
    listTasks()
}