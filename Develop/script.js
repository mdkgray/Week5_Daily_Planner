// current time variable
var hour = moment().hours();

// variable for planner hour value
var plannerHour = $(this).parent().attr('id');

// save button variable 
var saveButton = $(".saveButton");

// display current day in jumbotron
$('#currentDay').text(moment().format('dddd MMMM Do YYYY'));

// color coding time blocks 
function timeblockColor() {
    var hour = moment().hours();

    $('.plannerText').each(function() {
        var plannerHour = parseInt($(this).parent().attr('id'));

        if (plannerHour > hour) {
            $(this).addClass('future');
        } else if (plannerHour === hour) {
            $(this).addClass('present');
        } else {
            $(this).addClass('past');
        }
    })
};

// Function for save button click
saveButton.on('click', function() {
    var time = $(this).siblings('hour').text();
    var plan = $(this).siblings('plannerText').text();

    console.log(this);
    console.log(plannerHour);

    localStorage.setItem(time, plan);
})

// Function to save content in planner to local storage
function savePlanner () {
    $(".hour").each(function() {
        var plannerHour = $(this).text();
        var currPlan = localStorage.getItem(plannerHour);

        if (currPlan !== null) {
            $(this).siblings('plannerText').val(currPlan);
        }
    });
}

// Call functions
timeblockColor();
savePlanner();