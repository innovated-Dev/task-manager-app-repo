const dataBody = document.querySelector("#task-list > table > tbody");
btn.addEventListener("click", handleClick);

function handleClick(){
    let taskName = taskId.value;
    let priority = taskDropdown.value;
    let taskTime = taskDate.value;

    //truthy and falsy values
    //truthy value is true, any text, any number from 1
    //falsy value is false, empty string, NaN, undefined, 0

    if( ! taskName || ! priority || ! taskTime || ! desc ){
        alert("Please fill all values!");
        return;
    }

    let description = desc.value;
    let tr = document.createElement("tr");
    
    tr.setAttribute("id", taskName.replaceAll(" ", "_"));
    tr.innerHTML = `<td class:"taskId">${taskName}</td>
        <td>${description}</td>
        <td>${taskTime}</td>
        <td>${priority}</td>
        <td>
            <button class="edit btn"> Edit</button>
            <button class="remove btn"> Remove</button>
            <button class="complete btn"> Complete</button>
        </td>
    `;
    tr.classList.add("newStyle")
    

    taskId.value = "";
    taskDropdown.value = "";
    taskDate.value  = "";
    desc.value = "";
    

    dataBody.appendChild(tr);
}
