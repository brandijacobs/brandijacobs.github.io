var today = new Date();

// Day of Week
var day = new Array(7);
day[0] = "Sunday";
day[1] = "Monday";
day[2] = "Tuesday";
day[3] = "Wednesday";
day[4] = "Thursday";
day[5] = "Friday";
day[6] = "Saturday";
var weekDay = day[today.getDay()];

// Day in number
var date = today.getDate();

// Month
var month = new Array(12);
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var monthName = month[today.getMonth()];

// Year
var year = today.getFullYear();

var fullDate = weekDay + ", " + date + " " + monthName + " " + year;

document.getElementById("fullDate").innerHTML = fullDate;