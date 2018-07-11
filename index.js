/*global $*/

$(document).ready(function(){
    $("#add-new-todo-button").click(function(){
    var todoBlock = $(this).closest("#to-do-block")
    var description = todoBlock.find("#test1")
    var pomodoroEstimate = todoBlock.find("#test2")
$("ul").append("<li> <input type ='checkbox'/>" + description.val() +" " +"<span class ='box-one'>"+ pomodoroEstimate.val() + "pomodoros </span> </li>")
    description.val(" ")
    pomodoroEstimate.val(" ")
    })
})  

$(document).ready(function(){
    $("ul").on("click","input[type = checkbox]",
    function(){
        $(this).closest("li").toggleClass("completed-todo")
        })
})