$(document).ready(function () {
  $(".submit-btn").on("click", function (event) {
    event.preventDefault();
    let Addto = $(".text-input").val();
    $("ul.content-listGroup").append(
      "<li class='listGroup-items'><input type='checkbox'class='check-box' />" +
        Addto +
        "</li>"
    );
  });

  $(".check-box").on("click", function () {
    $(".listGroup-items").toggleClass("strike");
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
  });

  //   $("ol").sortable();
});
