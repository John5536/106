function saveTask(){
    console.log("saving task");
}
function init(){

    $("#btnSave").click(saveTask);

}

window.onload = init;