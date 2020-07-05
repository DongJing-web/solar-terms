////===========树形图1======从上到下，文字竖向暂时没找到改的方法
//var myChart = echarts.init(document.getElementById('shuxingtuFirst'));
//        // 指定图表的配置项和数据
//
//var data = {
//    "name": "春季",
//    "children": [
//        {
//            "name": "立春",
//            "children": [
//                {"name": "迎春"},
//                {"name": "樱桃"},
//                {"name": "望春"},
//            ]
//        },
//        {
//            "name": "雨水",
//            "children": [
//                {"name": "菜花"},
//                {"name": "杏花"},
//                {"name": "李花"},
//            ]
//        },
//        {
//            "name": "惊蛰",
//            "children": [
//                {"name": "桃花"},
//                {"name": "棠梨"},
//                {"name": "蔷薇"},
//            ]
//        },
//        {
//            "name": "春分",
//            "children": [
//                {"name": "海棠"},
//                {"name": "梨花"},
//                {"name": "木兰"},
//            ]
//        },
//    ]
//};
//
//
//var option = {
//        tooltip: {
//            trigger: 'item',
//            triggerOn: 'mousemove'
//        },
//        series:[
//            {
//                type: 'tree',
//
//                data: [data],
//
//                left: '2%',
//                right: '2%',
//                top: '8%',
//                bottom: '20%',
//                
//                    // 节点样式
//                symbol: 'circle',
//                    // 树图中 正交布局 的方向，从上到下
//                orient: 'vertical',
//                    // 子树折叠和展开的交互
//                expandAndCollapse: true,
//
//                label: {
//                    position: 'top',
//                    rotate: -90,
//                        // 文字垂直对齐方式
//                    verticalAlign: 'middle',
//                        // 文字水平对齐方式
//                    align: 'right',
//                    fontSize: 9
//                },
//
//                leaves: {
//                    label: {
//                        position: 'bottom',
//                        rotate: -90,
//                        verticalAlign: 'middle',
//                        align: 'left'
//                    }
//                },
//
//                animationDurationUpdate: 750
//            }
//        ]
//    };
//
//
//
//
//        // 使用刚指定的配置项和数据显示图表。
//        myChart.setOption(option);
//// JavaScript Document

//===========树形图1======
var myChart = echarts.init(document.getElementById('shuxingtuFirst'));
        // 指定图表的配置项和数据
var data = {
    "name": "秋季",
    "children": [
        {
            "name": "立春",
            "children": [
                {"name": "迎春"},
                {"name": "樱桃"},
                {"name": "望春"},
            ]
        },
        {
            "name": "雨水",
            "children": [
                {"name": "菜花"},
                {"name": "杏花"},
                {"name": "李花"},
            ]
        },
        {
            "name": "惊蛰",
            "children": [
                {"name": "桃花"},
                {"name": "棠梨"},
                {"name": "蔷薇"},
            ]
        },
        {
            "name": "春分",
            "children": [
                {"name": "海棠"},
                {"name": "梨花"},
                {"name": "木兰"},
            ]
        },
    ]
};

var option = {
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
    },
    series:[
        {
            type: 'tree',
            id: 0,
            name: 'tree1',
            data: [data],

            
            top: '10%',
            left: '8%',
            bottom: '22%',
            right: '20%',

            symbolSize: 7,

            edgeShape: 'polyline',
            edgeForkPosition: '63%',
            initialTreeDepth: 3,

            lineStyle: {
                width: 2
            },

            label: {
                backgroundColor: '#fff',
                position: 'left',
                verticalAlign: 'middle',
                align: 'right'
            },

            leaves: {
                label: {
                    position: 'right',
                    verticalAlign: 'middle',
                    align: 'left'
                }
            },

            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750
        }
    ]
};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);




//===========树形图2======
var myChart = echarts.init(document.getElementById('shuxingtuSecond'));
        // 指定图表的配置项和数据
var data = {
    "name": "春季",
    "children": [
        {
            "name": "立春",
            "children": [
                {"name": "迎春"},
                {"name": "樱桃"},
                {"name": "望春"},
            ]
        },
        {
            "name": "雨水",
            "children": [
                {"name": "菜花"},
                {"name": "杏花"},
                {"name": "李花"},
            ]
        },
        {
            "name": "惊蛰",
            "children": [
                {"name": "桃花"},
                {"name": "棠梨"},
                {"name": "蔷薇"},
            ]
        },
        {
            "name": "春分",
            "children": [
                {"name": "海棠"},
                {"name": "梨花"},
                {"name": "木兰"},
            ]
        },
    ]
};

var option = {
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
    },
    series:[
        {
            type: 'tree',
            id: 0,
            name: 'tree1',
            data: [data],

            
            top: '10%',
            left: '8%',
            bottom: '22%',
            right: '20%',

            symbolSize: 7,

            edgeShape: 'polyline',
            edgeForkPosition: '63%',
            initialTreeDepth: 3,

            lineStyle: {
                width: 2
            },

            label: {
                backgroundColor: '#fff',
                position: 'left',
                verticalAlign: 'middle',
                align: 'right'
            },

            leaves: {
                label: {
                    position: 'right',
                    verticalAlign: 'middle',
                    align: 'left'
                }
            },

            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750
        }
    ]
};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);

