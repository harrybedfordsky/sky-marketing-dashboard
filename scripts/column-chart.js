/**************************
|HIGHCHARTS - COLUMN CHART|
**************************/

function column(div, title, color, dataName1, data1, dataName2, data2, dataName3, data3, dataName4, data4){
	$(function () {
        $(div).highcharts({
            chart: {
                type: 'column',
                renderTo: div,
                backgroundColor: color
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
            xAxis: {
                categories: [
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday',
                    'Sunday'
                ],
                labels:{
                    style:{
                        color: 'rgb(51,51,51)',
                        fontFamily: 'skyTextMedium'
                    }
                },
                lineColor: 'rgb(51,51,51)',
                tickColor: 'transparent'
            },
            yAxis: {
                min: 0,
                title: null,
                gridLineColor: 'rgb(51,51,51)',
                labels:{
                    enabled: false
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:15px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:rgb(51,51,51);padding:0">{series.name}: </td>' +
                    '<td style="padding:0; font-size:15px"><b>{point.y:.1f}</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true,
                style:{
                    color: 'rgb(51,51,51)',
                    fontFamily: 'skyTextMedium'
                }
            },
            legend:{
            	enabled: false
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: dataName1,
                data: data1

            }, {
                name: dataName2,
                data: data2

            }, {
                name: dataName3,
                data: data3

            }, {
                name: dataName4,
                data: data4

            }]
        });
    });
}