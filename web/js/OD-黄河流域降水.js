var myChart = echarts.init(document.getElementById('jiangshui'));
        // 指定图表的配置项和数据


setTimeout(function () {
 "use strict";
var option = {
        legend: {},
        tooltip: {
            trigger: 'axis',
            showContent: false
        },
        dataset: {
            source: [
                ['product', '20世纪60年代', '20世纪70年代', '20世纪80年代', '20世纪90年代', '21世纪初'],
                ['春分前后', 87.4, 73.2, 81.4, 85.1, 75.1,],
                ['立夏前后', 248, 255.9, 250.5, 249.4, 240.1,],
                ['秋前后', 128.2, 107.3, 100.6, 84.6, 109.5],
                ['冬前后', 9.3, 13.2, 12.2, 10.8, 14]
            ]
        },
        xAxis: {type: 'category'},
        yAxis: {gridIndex: 0,
            axisLabel: {
            formatter: '{value} mm'}
        		},
        grid: {top: '55%'},
        series: [
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {
                type: 'pie',
                id: 'pie',
                radius: '30%',
                center: ['50%', '25%'],
                label: {
                    formatter: '{b}: {@20世纪60年代} ({d}%)'
                },
                encode: {
                    itemName: 'product',
                    value: '20世纪60年代',
                    tooltip: '20世纪60年代'
                }
            }
        ]
    };

    myChart.on('updateAxisPointer', function (event) {
        var xAxisInfo = event.axesInfo[0];
        if (xAxisInfo) {
            var dimension = xAxisInfo.value + 1;
            myChart.setOption({
                series: {
                    id: 'pie',
                    label: {
                        formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                    },
                    encode: {
                        value: dimension,
                        tooltip: dimension
                    }
                }
            });
        }
    });

    myChart.setOption(option);

});
// JavaScript Document