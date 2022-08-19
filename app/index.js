$(document).ready(function () {
  // check for data in localStorage
  $(".tasks").html(localStorage.getItem("listItems"));

  // Show the first tab
  $("#tabs-nav li:first").on("click", function () {
    $(".tasks").html(localStorage.getItem("listItems"));
    $(".listGroup").show();
  });

  // show the second tab
  $("#tabs-nav li:nth-child(2)").on("click", function () {
    $(".tasks").html(localStorage.getItem("listItems"));
    $(".listGroup-items span.completed").parent().hide();
  });

  // show the last tab
  $("#tabs-nav li:last-child").on("click", function () {
    $(".tasks").html(localStorage.getItem("listItems"));
    $(".listGroup-items span:not(.completed)").parent().hide();
  });

  // // check for data in localStorage
  // $(".tasks").html(localStorage.getItem("listItems"));

  // adding items in todos

  $("#addItem").submit(function (e) {
    e.preventDefault();
    let inputValue = $("#name").val();

    if (inputValue !== "") {
      $(".tasks").append(
        `<ul class="listGroup"><li class="listGroup-items"><span>${inputValue}</span><div class="listGroup-btn"><button class="btn btn-success complete";'><i class="fa-solid fa-check"></i></button><button class="btn btn-danger remove";'><i class="fa-solid fa-trash-can"></i></button></div></li></ul>`
      );
      localStorage.setItem("listItems", $(".tasks").html());
      $("#name").val("");
    }
  });

  // remove todos

  // $(document).on("change", ".checkbox", function () {
  //   if ($(this).prop("checked")) {
  //     $(this).prop("checked", true);
  //   } else {
  //     $(this).prop("checked", false);
  //   }

  //   $(this).parent().toggleClass("completed");

  //   localStorage.setItem("listItems", $(".tasks").html());
  // });
  $(document).on("click", ".complete", function () {
    $(this).parent().siblings("span").toggleClass("completed");

    localStorage.setItem("listItems", $(".tasks").html());
  });
  $(document).on("click", ".remove", function () {
    $(this).parentsUntil(".listGroup").remove();

    localStorage.setItem("listItems", $(".tasks").html());
  });
});
