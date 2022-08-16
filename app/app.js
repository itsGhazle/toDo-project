$(document).ready(function () {
  // $(".submit-btn").on("click", function (event) {
  //   event.preventDefault();
  //   let Addto = $(".text-input").val();
  //   $("ul.content-listGroup").append(
  //     "<li class='listGroup-items'><input type='checkbox'class='check-box' />" +
  //       Addto +
  //       "</li>"
  //   );
  // });

  // $(".check-box").on("click", function () {
  //   $(".listGroup-items").toggleClass("strike");

  /////////////////////////////////////////
  //     var toAdd = $("input[name=ListItem]").val();
  //     $("ol").append("<li>" + toAdd + "</li>");
  //   });

  //   $("input[name=ListItem]").keyup(function (event) {
  //     if (event.keyCode == 13) {
  //       $("#button").click();
  //     }
  //   });

  //   $(document).on("dblclick", "li", function () {
  //     $(this).toggleClass("strike").fadeOut("slow");
  //   });

  //   $("input").focus(function () {
  //     $(this).val("");
  ///////////////////////////////////////////////
  // });

  //   $("ol").sortable();

  ///////////////new code
  function appendTaskToList(val) {
    $("ul.content-listGroup").append(
      "<li class='listGroup-items'><input type='checkbox'class='check-box' />" +
        val +
        "</li>"
    );
  }

  if (localStorage["tasks"]) {
    let tasks = JSON.parse(localStorage["tasks"]);
  } else {
    let tasks = [];
  }

  for (var i = 0; i < tasks.length; i++) {
    appendTaskToList(tasks[i]);
  }

  function addTask() {
    // get value from #name input
    let val = $("#name").val();

    // add the task to the array
    tasks.push(val);

    // save to local storage
    localStorage["tasks"] = JSON.stringify(tasks);

    // append the name to the list
    appendTaskToList(val);

    // reset the input field and focus it.
    $("#name").val("").focus();
  }

  ///////click on submit btn
  $(".submit-btn").on("click", addTask);
  ///////click on input

  $("#name").keyup(function (event) {
    if (event.keyCode === 13) {
      addTask();
    }
  });

  // approach 1
  /*$('.done-btn').click(function(){
    $(this).parent('li').addClass('done');
});*/

  // correct approach
  $(".done-btn").live("click", function () {
    $(this).parent("li").addClass("done");
  });

  $(".cancel-btn").live("click", function () {
    $(this).parent("li").fadeOut();
  });
});
