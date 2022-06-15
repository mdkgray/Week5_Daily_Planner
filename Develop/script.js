// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist


// define save button variable 
var saveButton = $(".saveButton");

// display current day in jumbotron
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

// window.setInterval(function () {
//     $('#currentDay').text(moment().format('dddd MMMM Do YYYY h:mm:ss a'));
// }, 1000);


// color coding time blocks 
function timeblockColor() {
    var time = moment().hours();

    $('.timeBlock').each(function() {
        var currentTime = parseInt($(this).attr('id'));
        if (currentTime > time) {
            $(this).addClass('.future');
        } else if (currentTime === time) {
            $(this).addClass('.present');
        } else {
            $(this).addClass('.past');
        }
    })
};