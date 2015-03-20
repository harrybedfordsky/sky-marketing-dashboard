/**********************\
|HIGHCHARTS - LINECHART|
\**********************/


function lineGraph(div, title, color){
$(function () {
    $(div).highcharts({
        chart: {
            backgroundColor: color,
            zoomType: 'x'
        },
        credits:{
            enabled: false
        },
        title: {
            text: title,
            style:{
                color: 'rgb(51,51,51)',
                fontFamily: 'skyTextMedium',
                fontSize: '25px'
            }
        },
        xAxis: {
            categories: ['14/02', '15/02', '16/02', '17/02', '18/02', '19/02', '20/02', '21/02', '22/02', '23/02', '24/02', '25/02'],
            gridLineColor: 'rgb(51,51,51)',
            lineColor: 'rgb(51,51,51)',
            tickColor: 'transparent',
            labels:{
                style:{
                    color: 'rgb(51,51,51)',
                    fontFamily: 'skyTextMedium',
                    fontSize: '15px'
                }
            }
        },
        yAxis: {
            title: null,
            gridLineColor: 'rgb(51,51,51)',
            labels:{
                enabled: false
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: false,
                    color: 'rgb(51,51,51)',
                    fontFamily: 'skyTextMedium'
                },
                enableMouseTracking: true
            }
        },
        legend:{
            itemStyle:{
                color: 'rgb(51,51,51)',
                fontFamily: 'skyTextMedium',
                fontSize: '15px'
            }
        },
        series: [{
            name: 'VANQUISH',
            data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: 'LEGACY',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }]
    });
});
}