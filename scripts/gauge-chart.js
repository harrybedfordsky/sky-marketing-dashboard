/*************************
|HIGHCHARTS - GAUGE CHART|
*************************/

function gauge(div, title, color, data1){
$(function () {

    $(div).highcharts({
        chart: {
            type: 'gauge',
            renderTo: div,
            backgroundColor: color,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
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
        plotOptions:{
            gauge:{
                dial:{
                    backgroundColor: 'white',
                    baseWidth: 10,
                    baseLength: 0,
                    rearLength: 0
                },
                pivot:{
                    backgroundColor: 'white'
                },
                dataLabels:{
                    style:{
                        color: 'white',
                        fontFamily: 'skyTextMedium',
                        fontSize: '25px',
                        textShadow: null
                    },
                    borderWidth: 0,
                    format: data1 + 's',
                    useHTML: true
                }
            }
        },
        pane: {
            startAngle: -130,
            endAngle: 130,
            background: [{
                backgroundColor: 'transparent',
                borderWidth: 0,
                outerRadius: '50%',
                innerRadius: '40%'
            }]
        },
        // the value axis
        yAxis: {
            min: 0,
            max: 10,
            borderWidth: 3,
            borderColor: 'rgb(51,51,51)',

            minorTickInterval: 'auto',
            minorTickWidth: 0,
            minorTickLength: 0,
            minorTickPosition: 'inside',
            minorTickColor: '#666',
            tickPixelInterval: 30,
            tickWidth: 0,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                enabled: false
            },
            plotBands: [{
                from: 0,
                to: 200,
                color: 'white',
                thickness: 20
            }]
        },
        series: [{
            name: 'Speed',
            data: [data1],
        }]

    }
        );
});
}