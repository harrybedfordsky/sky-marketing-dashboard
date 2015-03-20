/********************\
|MAIN JAVASCRIPT FILE|
\********************/

//COLOURS
var original = '#f05423',
family = '#2b93d1',
variety = '#7d9d33',
movies = '#b11d55',
sports = '#d92027';

//LOAD DATA
var sales = (function () {
    var sales = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': '../../data/sales.json',
        'dataType': "json",
        'success': function (data) {
            sales = data;
        }
    });
    return sales;
})(); 

//CALL CHART FUNCTIONS
lineGraph('#seven', 'Vanquish vs Classic', original);
gauge('#two', 'Load Speed', family, 4.598);
donut('#four', 'Browser Share', movies, 32, 32, 54, 36, 10);
timeGraph('#six', 'Daily Sales', family);
pie('#one', 'Sales by Device', original, sales.webSales, sales.mobileSales);
column('#three', 'Sales Day on Day', variety, 'week 1', sales.week1, 'week 2', sales.week2, 'week 3', sales.week3, 'week 4', sales.week4);
funnel('#five', 'Conversion', sports, 232, 211, 187, 154, 34);
column('#eight', 'Vanquish', variety, 'week 1', sales.week1, 'week 2', sales.week2, 'week 3', sales.week3, 'week 4', sales.week4);

//JQUERY TO SELECT CHARTS
$(document).ready(function(){
	$("#one-overlay").click(function(){
		pie('#main', 'Sales by Device', original, sales.webSales, sales.mobileSales);
	});
	$("#two-overlay").click(function(){
		gauge('#main', 'Load Speed', family, 4.598);
	});
	$("#three-overlay").click(function(){
		column('#main', 'Sales Day on Day', variety, 'week 1', sales.week1, 'week 2', sales.week2, 'week 3', sales.week3, 'week 4', sales.week4);
	});
	$("#four-overlay").click(function(){
		donut('#main', 'Browser Share', movies, 32, 32, 54, 36, 10);
	});
	$("#five-overlay").click(function(){
		funnel('#main', 'Conversion', sports, 232, 211, 187, 154, 34);
	});
	$("#six-overlay").click(function(){
		timeGraph('#main', 'Daily Sales', family);
	});
	$("#seven-overlay").click(function(){
		lineGraph('#main', 'Vanquish vs Classic', original);
	});
	$("#eight-overlay").click(function(){
		column('#main', 'Vanquish', variety, 'week 1', sales.week1, 'week 2', sales.week2, 'week 3', sales.week3, 'week 4', sales.week4);
	});
});