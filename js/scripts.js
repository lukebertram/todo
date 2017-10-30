var counter = 0;
//Business Logic here
function ToDo(taskDescription, category){
  this.uniqueID = counter;
  this.taskDescription = taskDescription;
  // this.completed = false;
  this.category = category;
  counter++;
};

//Interface goes here
$(document).ready(function(){
  $("#newListForm").submit(function(event) {
    event.preventDefault();

    var task = $("#listNameOne").val();
    var category = $("input:radio[name=category]:checked").val();
    var newToDo = new ToDo(task, category);

    $("#outputTask").append("<li id='" + newToDo.uniqueID + "'><div class='output card "+ newToDo.category +"'>" + newToDo.taskDescription + "<input type='checkbox' name='to-do-task' value='" + newToDo.uniqueID + "' ></div></li>");
    // $(".output").last()
    // $(".ToDo").last().click(function(){
    //   $("#outputTask ul").text(newToDo.taskDescription());
    //   $("#outputTask ul").text(newToDo.category());
    // });
    //
    $("#listNameOne").val("");
  });

  $("form#checkOff").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=to-do-task]:checked").each(function(){
      var id = $(this).val();
      $("#" + id).hide();
    });
  });
});
