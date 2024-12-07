function saveTask(){
    console.log("saving task");

    const title = $("#txtTitle").val();
    const desc = $("#txtdescription").val();
    const color = $("#selcolor").val();
    const date = $("#selstartdate").val();
    const status = $("#selstatus").val();
    const budget = $("#numbudget").val();
    console.log(title,desc,color,date,status,budget);

    let taskToSave = new Task(title, desc, color, date, budget, status);
    console.log("taskToSave")

    display(taskToSave);

}
function displayTask(task){
    let syntax = `<div class="task">
    <h5>${task.title}</h5>
    <p>${task.description}</p>
        </div>
        <div><label>${task.status}</label></div>
        <div><label>${task.date}</label>
        <label>${task.budget}</label></div>`        
        ;
    $(".list").append(syntax);

}
function testRequest(){
    $ajax({
        type: "get",
        url: "http://fsdiapi.azurewebsites.net",
        success:function(response){
            console.log(response);
        },
        error: function(error)
        {
            console.log(error)
        }
});
}
function init(){

    $("#btnSave").click(saveTask);

}

window.onload = init;