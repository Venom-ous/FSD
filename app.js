let todo = [];

let req = prompt("please enter your request");

while(true){
    if(req == "quit"){
        console.log("quiting app");
        break;
    }

    if(req == "list"){
        for(let i =0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("-----------------");
    }else if(req == "add"){
        task = prompt("enter the task");
        todo.push(task);
        console.log("task added");
    }else if(req = "delete"){
        let idx = prompt("enter the task to be deleted");
        todo.splice(idx, 1);
        console.log("task deleted successfully");
    }

    req = prompt("please enter your request");
}