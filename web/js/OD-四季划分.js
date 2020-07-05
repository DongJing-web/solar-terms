var myChart = echarts.init(document.getElementById('sijihuafen'));
        // 指定图表的配置项和数据
var option = {
    
    tooltip: {
    trigger: 'axis'
    },
    xAxis: {
        type: 'category',
        boundaryGap:false,
        data: ['春', '夏', '秋', '冬', '春']
        
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [10, 22, 22, 10, 10,],
        type: 'line'
    }]
};
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
// JavaScript Document