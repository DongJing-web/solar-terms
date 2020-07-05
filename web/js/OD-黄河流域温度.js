var myChart = echarts.init(document.getElementById('wendu'));
        // 指定图表的配置项和数据
var option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['日均最高温度', '日均最低温度']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['立春', '惊蛰', '清明', '立夏', '芒种', '小暑', '立秋', '白露', '寒露', '立冬', '大雪', '小寒']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} °C'
        }
    },
    
    // 
    // 
    series: [
        {
            name: '日均最高温度',
            type: 'line',
            data: [8, 16.25,23.25, 28.75, 32, 33.5, 32, 27, 21,12.75,6.25,4.75]
        },
        {
            name: '日均最低温度',
            type: 'line',
            data: [ -2,4.5,10.5,16.75, 21.25, 23.75, 22.25, 17.25,10.5,3,-3.5,-5]
        }
    ]
};
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
// JavaScript Document