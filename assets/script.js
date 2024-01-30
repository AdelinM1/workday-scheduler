
$(function () {
    // Current date in the header of the page.
    $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
  
    $(".saveBtn").on("click", function () {
      
      var timeBlockId = $(this).parent().attr("id");
      
      var userInput = $(this).siblings(".description").val();
  
      // User input saved in local storage
      
    });
  
    function updateHourlyBlocks() {
      var currentHour = dayjs().hour();
  
      $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
  
        $(this).removeClass("past , present , future");
  
        if (blockHour < currentHour) {
          $(this).addClass("past");
        } else if (blockHour === currentHour) {
          $(this).addClass("present");
        } else {
          $(this).addClass("future");
        }
      });
    }
  
    updateHourlyBlocks();
  
    function loadSavedEvents() {
      $(".time-block").each(function () {
        var timeBlockId = $(this).attr("id");
        var savedEvent = localStorage.getItem(timeBlockId);
  
        if (savedEvent !== null) {
          $(this).find(".description").val(savedEvent);
        }
      });
    }
  
    loadSavedEvents();
  });