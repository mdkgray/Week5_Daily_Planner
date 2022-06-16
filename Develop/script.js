// current time variable
var hour = moment().hours();

// save button variable 
var saveButton = $(".saveButton");

// display current day in jumbotron
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

// color coding time blocks 
function timeblockColor() {
    var hour = moment().hours();

    $('.plannerText').each(function() {
        var currHour = parseInt($(this).attr('id'));

        console.log(this);

        if (currHour > hour) {
            $(this).addClass('future');
        } else if (currHour === hour) {
            $(this).addClass('present');
        } else {
            $(this).addClass('past');
        }
    })
};

// Function for save button click
saveButton.on('click', function() {
    var time = $(this).siblings("hour").text();
    var plan = $(this).siblings("plannerText").text();

    console.log(this);
    console.log(currHour);

    localStorage.setItem(time, plan);
})

// Function to save content in planner to local storage
function savePlanner () {
    $(".hour").each(function() {
        var currHour = $(this).text();
        var currPlan = localStorage.getItem(currHour);

        if (currPlan !== null) {
            $(this).siblings("plannerText").val(currPlan);
        }
    });
}

// Call functions
timeblockColor();
savePlanner();