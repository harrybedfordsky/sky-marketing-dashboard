/**************************
|HIGHCHARTS - FUNNEL CHART|
**************************/


function funnel(div, title, color, data1, data2, data3, data4, data5){
	$(function () {

    $(div).highcharts({
        chart: {
            type: 'funnel',
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
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: false,
                },
                neckWidth: '40%',
                neckHeight: '35%'

                //-- Other available options
                // height: pixels or percent
                // width: pixels or percent
            },
            funnel:{
                dataLabels: {
                        enabled: false
                    },
                showInLegend: true,
                borderWidth: 3,
                borderColor: 'rgb(51,51,51)'
            }
        },
        legend: {
            enabled: true,
            itemStyle:{
                color: 'rgb(51,51,51)',
                fontFamily: 'skyTextMedium',
                fontSize: '15px'
            }
        },
        series: [{
            name: 'Unique users',
            data: [
                ['Storefront', data1],
                ['Product Selection', data2],
                ['Choose Reward', data3],
                ['Checkout', data4],
                ['Complete', data5]
            ]
        }]
    });
});
}