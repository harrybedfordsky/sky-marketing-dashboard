/*************************************************\
|JAVASCRIPT TO INSERT TIME AND DATE INTO HTML PAGE|
\*************************************************/

setInterval(function(){
	var date = new Date(),
	number = date.getDate();

	var weekday = new Array(7);
	weekday[0] = "Sunday";
	weekday[1] = "Monday";
	weekday[2] = "Tuesday";
	weekday[3] = "Wednesday";
	weekday[4] = "Thursday";
	weekday[5] = "Friday";
	weekday[6] = "Saturday";

	var n = weekday[date.getDay()];

	var month = [];
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

	var m = month[date.getMonth()],
	h = date.getHours(),
	j = date.getMinutes();

	$(document).ready(function(){
		$('.time').html(h + ":" + ('0' + j).slice(-2));
		$('.date').html(n + " " + number + " " + m);
	});
}, 
1);

