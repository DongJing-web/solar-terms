var myChart = echarts.init(document.getElementById('laiyuanfazhan'));
        // 指定图表的配置项和数据
var option = {
    title: {
        sublink: 'http://e.weibo.com/1341556070/Aj1J2x5a5'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params) {
			'use strict';
            var tar;
            if (params[1].value !== '-') {
                tar = params[1];
            }
            else {
                tar = params[0];
            }
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        splitLine: {show: false},
        data:['夏朝','商朝','周朝','-','秦朝','-','西汉',]
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '辅助',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
            },
            emphasis: {
                itemStyle: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [2070, 1600, 1046, 256, 221,207,202,]
        },
        {
            name: '时间',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'center'
            },
            data: [1600, 1046, 256, 221, 207, 202, -8, ]
        },

    ]
};
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
// JavaScript Document