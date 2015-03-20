/******************************
|HIGHCHARTS - SEMI-DONUT CHART|
******************************/

var Highcharts;

function donut(div, title, color, data1, data2, data3, data4, data5){
Highcharts.setOptions({
     colors: ['#f6f6f6', '#e4e4e4', '#d3d3d3', '#7e7e7e', '#2a2a2a']
    });

$(function () {
    $(div).highcharts({
        chart: {
            renderTo: div,
            backgroundColor: color,
            plotBorderWidth: 0,
            plotShadow: false
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
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: false
                },
                borderWidth: 3,
                borderColor: 'rgb(51,51,51)',
                startAngle: -95,
                endAngle: 95,
                center: ['50%', '75%'],
                showInLegend: true
            }
        },
        legend:{
            enabled: true,
            itemStyle: {
                color: 'rgb(51,51,51)',                 
                fontFamily: 'skyTextRegular',
                fontSize: '15px'
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            innerSize: '40%',
            data: [
                ['Firefox', data1],
                ['IE', data2],
                ['Chrome', data3],
                ['Safari', data4],
                ['Other', data5]
            ]
        }]
    });
});
}