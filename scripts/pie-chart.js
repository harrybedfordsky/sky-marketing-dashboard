/***********************
|HIGHCHARTS - PIE CHART|
***********************/


function pie(div, title, color, data1, data2){

	Highcharts.setOptions({
     colors: ['#f6f6f6','#7e7e7e']
    });

	$(function () {
	    $(div).highcharts({
	        chart: {
	            plotBackgroundColor: null,
	            plotBorderWidth: null,
	            plotShadow: false,
	            backgroundColor: color,
	        },
	        title: {
	            text: title,
	            style:{
	            	color: 'rgb(51,51,51)',
	                fontFamily: 'skyTextMedium',
	                fontSize: '25px'
	            }
	        },
	        credits:{
	        	enabled: false
	        },
	        tooltip: {
	            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
	            style:{
	            	color: 'rgb(51,51,51)',
	                fontFamily: 'skyTextMedium',
	                fontSize: '15px'
	            }
	        },
	        legend:{
	        	enabled: true,
	        	itemStyle:{
	        		color: 'rgb(51,51,51)',
	                fontFamily: 'skyTextMedium',
	                fontSize: '20px'
	        	}
	        },
	        plotOptions: {
	            pie: {
	                allowPointSelect: true,
	                cursor: 'pointer',
	                dataLabels: {
	                    enabled: false
	                },
	                showInLegend: true,
	                borderWidth: 3,
	                borderColor: 'rgb(51,51,51)'
	            }
	        },
	        series: [{
	            type: 'pie',
	            name: 'Sales share',
	            data: [
	                ['Web', data1],
	                ['Mobile', data2]
	            ]
	        }]
	    });
	});

}