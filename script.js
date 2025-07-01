const InputBox = document.getElementById("input_box");
const ListContainer = document.getElementById("list-container");
function addTask(){
    if(InputBox.value === ''){
        alert("Please enter a task.");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = InputBox.value;
        ListContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00D7"; // Unicode for multiplication sign (×)
        li.appendChild(span);
    }
    InputBox.value = ""; // Clear the input box after adding the task
    saveData();
}

ListContainer.addEventListener("click",function(e)
{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

},false)

function saveData(){
    localStorage.setItem("data", ListContainer.innerHTML);
}
function showTask(){
    ListContainer.innerHTML = localStorage.getItem("data");
}
showTask();