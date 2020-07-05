        var myChart = echarts.init(document.getElementById('tuguiceying'));
        // 指定图表的配置项和数据
        var option = {
            tooltip: {},
            legend: {
                data:['日影长度']
            },
            xAxis: {
                data: ["夏至","冬至"]
            },
            yAxis: {
				
			},
            series: [{
                name: '日影长度',
                type: 'bar',//柱状图
                data: [1.5, 13.5]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);