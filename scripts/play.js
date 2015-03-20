/**************************************
|JAVASCRIPT TO PLAY THROUGH ALL CHARTS|
**************************************/

var play = false;

$(document).ready(function(){
	$("#pause-button").hide();
	$("#play-button, #play-text").click(function(){
		play = true;
		$("#play-button").hide();
		$("#pause-button").show();
	if(play === true){
		pie('#main', 'Sales by Device', original, sales.webSales, sales.mobileSales);
		var i = 2;
		var go = setInterval(function(){
			if(i === 1){
				pie('#main', 'Sales by Device', original, sales.webSales, sales.mobileSales);
			}else if(i === 2){
				gauge('#main', 'Load Speed', family, 4.598);
			}else if (i === 3){
				column('#main', 'Sales Day on Day', variety, 'week 1', sales.week1, 'week 2', sales.week2, 'week 3', sales.week3, 'week 4', sales.week4);
			}else if(i === 4){
				donut('#main', 'Browser Share', movies, 32, 32, 54, 36, 10);
			}else if(i === 5){
				funnel('#main', 'Conversion', sports, 232, 211, 187, 154, 34);
			}else if(i === 6){
				timeGraph('#main', 'Daily Sales', family);
			}else if(i === 7){
				lineGraph('#main', 'Vanquish vs Classic', original);
			}else{
				column('#main', 'Vanquish', variety, 'week 1', sales.week1, 'week 2', sales.week2, 'week 3', sales.week3, 'week 4', sales.week4);
			}
			i ++;
			if(i === 9){
				i = 1;
			}
		}, 
		15000);
	}

	$("#pause-button, .overlay").click(function(){
		play = false;
		clearInterval(go);
		$("#play-button").show();
		$("#pause-button").hide();
	});
	});
});