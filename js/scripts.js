//Business Logic here
function ToDo(taskDescription, category){
  this.taskDescription = taskDescription;
  this.completed = false;
  this.category = category;
};

//Interface goes here
$(document).ready(function(){
  $("#newListForm").submit(function(event) {
    event.preventDefault();

    var inputTask = $("#listNameOne").val();
    var newToDo = new ToDo(taskDescription, category);

    $("#outputTask").append("<li><span class='output'>" + newToDo.taskDescription + "</span></li>");

    $(".ToDo").last().click(function(){
      $("#outputTask ul").text(newToDo.taskDescription());
      $("#outputTask ul").text(newToDo.category());
    });

    $("#ToDoTaskDescription").val();
    $("#ToDoCategory").val();
  });
});
