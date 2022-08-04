// ↓functions to use moment js and to make saveBtn work
$(document).ready(function () {
  // ↓code to display dynamic current date and time
  setInterval(() => {
    let dateTime = moment().format("DD, MMMM YYYY, HH:mm:ss");
    let display = document.getElementById("currentDay");
    display.innerHTML = dateTime;
    // console.log(dateTime);
    // ↑to test time responsiveness in console, if need be...
  }, 1000);

  // save button onclick event listener
  $(".saveBtn").on("click", function () {
    console.log("save button action called!!");
    // ↑to test button click event response in console

    // ↓to get text and time from description field
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // ↓to store the above description values
    localStorage.setItem(time, text);
  });

  // ↓to retrieve info from local storage
  $("#nine .description").val(localStorage.getItem("nine"));
  $("#ten .description").val(localStorage.getItem("ten"));
  $("#eleven .description").val(localStorage.getItem("eleven"));
  $("#twelve .description").val(localStorage.getItem("twelve"));
  $("#one .description").val(localStorage.getItem("one"));
  $("#two .description").val(localStorage.getItem("two"));
  $("#three .description").val(localStorage.getItem("three"));
  $("#four .description").val(localStorage.getItem("four"));
  $("#five .description").val(localStorage.getItem("five"));
});
// localStorage.clear(); ← to clear all values in localStorage and reset
