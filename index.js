const fs = require("fs");

const file = "tasks.json";

// Create file if it doesn't exist
if (!fs.existsSync(file)) {
  fs.writeFileSync(file, "[]");
}

const tasks = JSON.parse(fs.readFileSync(file));

const command = process.argv[2];
const argument = process.argv[3];

switch (command) {
  case "add":
    tasks.push({
      id: tasks.length + 1,
      text: argument,
      done: false
    });
    fs.writeFileSync(file, JSON.stringify(tasks, null, 2));
    console.log("Task added!");
    break;

  case "list":
    if (tasks.length === 0) {
      console.log("No tasks found.");
      break;
    }
    tasks.forEach(task => {
      console.log(`${task.id}. [${task.done ? "✓" : " "}] ${task.text}`);
    });
    break;

  case "done":
    const doneId = parseInt(argument);
    const taskToMark = tasks.find(t => t.id === doneId);
    if (taskToMark) {
      taskToMark.done = true;
      fs.writeFileSync(file, JSON.stringify(tasks, null, 2));
      console.log("Task marked as done!");
    } else {
      console.log("Task not found.");
    }
    break;

  case "delete":
    const deleteId = parseInt(argument);
    const filteredTasks = tasks.filter(t => t.id !== deleteId);
    fs.writeFileSync(file, JSON.stringify(filteredTasks, null, 2));
    console.log("Task deleted!");
    break;

  default:
    console.log(`
Usage:
  node index.js add "task name"
  node index.js list
  node index.js done <id>
  node index.js delete <id>
    `);
}
