var myChart = echarts.init(document.getElementById('zhengtihuafen'));
        // 指定图表的配置项和数据

var data = [{
    
    
    // 春季
 name: '春',
    itemStyle: {
        color: '#383e56'
    },
    children: [{
        name: '立春',
        itemStyle: {
            color: '#3aa255'
        },
        children: [{
            name: '东风解冻',
            value: 1,
            itemStyle: {
                color: '#a2bb2b'
            }
        }, {
            name: '蜇虫始振',
            value: 1,
            itemStyle: {
                color: '#62aa3c'
            }
        }, {
            name: '鱼陟负冰',
            value: 1,
            itemStyle: {
                color: '#03a653'
            }
        
        }]
    }, 

{
        name: '雨水',
        itemStyle: {
            color: '#3aa255'
        },
        children: [{
            name: '獭祭鱼',
            value: 1,
            itemStyle: {
                color: '#a2bb2b'
            }
        }, {
            name: '鸿雁来',
            value: 1,
            itemStyle: {
                color: '#62aa3c'
            }
        }, {
            name: '草木萌',
            value: 1,
            itemStyle: {
                color: '#03a653'
            }
        
        }]
    },
    
    // 惊蛰
    {
        name: '惊蛰',
        itemStyle: {
            color: '#3aa255'
        },
        children: [{
            name: '桃始华',
            value: 1,
            itemStyle: {
                color: '#a2bb2b'
            }
        }, {
            name: '仓庚（黄鹂）鸣',
            value: 1,
            itemStyle: {
                color: '#62aa3c'
            }
        }, {
            name: '鹰化为鸠',
            value: 1,
            itemStyle: {
                color: '#03a653'
            }
        
        }]
    },
        {
        name: '春分',
        itemStyle: {
            color: '#3aa255'
        },
        children: [{
            name: '元鸟至',
            value: 1,
            itemStyle: {
                color: '#a2bb2b'
            }
        }, {
            name: '雷乃发声',
            value: 1,
            itemStyle: {
                color: '#62aa3c'
            }
        }, {
            name: '始电',
            value: 1,
            itemStyle: {
                color: '#03a653'
            }
        
        }]
    },
        {
        name: '清明',
        itemStyle: {
            color: '#3aa255'
        },
        children: [{
            name: '桐始华',
            value: 1,
            itemStyle: {
                color: '#a2bb2b'
            }
        }, {
            name: '田鼠化为鹌',
            value: 1,
            itemStyle: {
                color: '#62aa3c'
            }
        }, {
            name: '虹始见',
            value: 1,
            itemStyle: {
                color: '#03a653'
            }
        
        }]
    },
    
    {
        name: '谷雨',
        itemStyle: {
            color: '#3aa255'
        },
        children: [{
            name: '萍始生',
            value: 1,
            itemStyle: {
                color: '#a2bb2b'
            }
        }, {
            name: '呜鸠拂其羽',
            value: 1,
            itemStyle: {
                color: '#62aa3c'
            }
        }, {
            name: '为戴任降于桑',
            value: 1,
            itemStyle: {
                color: '#03a653'
            }
        
        }]
    }]
},



// 夏季
{

 name: '夏',
    itemStyle: {
        color: '#383e56'
    },
    children: [{
        name: '立夏',
        itemStyle: {
            color: '#3aa255'
        },
        children: [{
            name: '蝼蝈鸣',
            value: 1,
            itemStyle: {
                color: '#a2bb2b'
            }
        }, {
            name: '蚯蚓出',
            value: 1,
            itemStyle: {
                color: '#62aa3c'
            }
        }, {
            name: '王瓜生',
            value: 1,
            itemStyle: {
                color: '#03a653'
            }
        
        }]
    }, 

{
        name: '小满',
        itemStyle: {
            color: '#3aa255'
        },
        children: [{
            name: '苦菜秀',
            value: 1,
            itemStyle: {
                color: '#a2bb2b'
            }
        }, {
            name: '靡草死',
            value: 1,
            itemStyle: {
                color: '#62aa3c'
            }
        }, {
            name: '麦秋至',
            value: 1,
            itemStyle: {
                color: '#03a653'
            }
        
        }]
    },
    
    // 芒种
    {
        name: '芒种',
        itemStyle: {
            color: '#3aa255'
        },
        children: [{
            name: '螳螂生',
            value: 1,
            itemStyle: {
                color: '#a2bb2b'
            }
        }, {
            name: '鹏始鸣',
            value: 1,
            itemStyle: {
                color: '#62aa3c'
            }
        }, {
            name: '反舌无声',
            value: 1,
            itemStyle: {
                color: '#03a653'
            }
        
        }]
    },
        {
        name: '夏至',
        itemStyle: {
            color: '#3aa255'
        },
        children: [{
            name: '鹿角解',
            value: 1,
            itemStyle: {
                color: '#a2bb2b'
            }
        }, {
            name: '蝉始鸣',
            value: 1,
            itemStyle: {
                color: '#62aa3c'
            }
        }, {
            name: '半夏生',
            value: 1,
            itemStyle: {
                color: '#03a653'
            }
        
        }]
    },
        {
        name: '小暑',
        itemStyle: {
            color: '#3aa255'
        },
        children: [{
            name: '温风至',
            value: 1,
            itemStyle: {
                color: '#a2bb2b'
            }
        }, {
            name: '蟋蟀居宇',
            value: 1,
            itemStyle: {
                color: '#62aa3c'
            }
        }, {
            name: '鹰始鸷',
            value: 1,
            itemStyle: {
                color: '#03a653'
            }
        
        }]
    },
    
    {
        name: '大暑',
        itemStyle: {
            color: '#3aa255'
        },
        children: [{
            name: '腐草为萤',
            value: 1,
            itemStyle: {
                color: '#a2bb2b'
            }
        }, {
            name: '土润溽暑',
            value: 1,
            itemStyle: {
                color: '#62aa3c'
            }
        }, {
            name: '大雨时行',
            value: 1,
            itemStyle: {
                color: '#03a653'
            }
        
        }]
    }]
},

// 秋季
{

 name: '秋',
    itemStyle: {
        color: '#383e56'
    },
    children: [{
        name: '立秋',
        itemStyle: {
            color: '#3aa255'
        },
        children: [{
            name: '凉风至',
            value: 1,
            itemStyle: {
                color: '#a2bb2b'
            }
        }, {
            name: '白露生',
            value: 1,
            itemStyle: {
                color: '#62aa3c'
            }
        }, {
            name: '寒蝉鸣',
            value: 1,
            itemStyle: {
                color: '#03a653'
            }
        
        }]
    }, 

{
        name: '处暑',
        itemStyle: {
            color: '#3aa255'
        },
        children: [{
            name: '鹰乃祭鸟',
            value: 1,
            itemStyle: {
                color: '#a2bb2b'
            }
        }, {
            name: '天地始肃',
            value: 1,
            itemStyle: {
                color: '#62aa3c'
            }
        }, {
            name: '禾乃登',
            value: 1,
            itemStyle: {
                color: '#03a653'
            }
        
        }]
    },
    
    // 白露
    {
        name: '白露',
        itemStyle: {
            color: '#3aa255'
        },
        children: [{
            name: '鸿雁来',
            value: 1,
            itemStyle: {
                color: '#a2bb2b'
            }
        }, {
            name: '元鸟归',
            value: 1,
            itemStyle: {
                color: '#62aa3c'
            }
        }, {
            name: '群鸟养羞',
            value: 1,
            itemStyle: {
                color: '#03a653'
            }
        
        }]
    },
        {
        name: '秋分',
        itemStyle: {
            color: '#3aa255'
        },
        children: [{
            name: '雷始收声',
            value: 1,
            itemStyle: {
                color: '#a2bb2b'
            }
        }, {
            name: '蛰虫坯户',
            value: 1,
            itemStyle: {
                color: '#62aa3c'
            }
        }, {
            name: '水始涸',
            value: 1,
            itemStyle: {
                color: '#03a653'
            }
        
        }]
    },
        {
        name: '寒露',
        itemStyle: {
            color: '#3aa255'
        },
        children: [{
            name: '鸿雁来宾',
            value: 1,
            itemStyle: {
                color: '#a2bb2b'
            }
        }, {
            name: '雀人大水为蛤',
            value: 1,
            itemStyle: {
                color: '#62aa3c'
            }
        }, {
            name: '菊有黄华',
            value: 1,
            itemStyle: {
                color: '#03a653'
            }
        
        }]
    },
    
    {
        name: '霜降',
        itemStyle: {
            color: '#3aa255'
        },
        children: [{
            name: '豺乃祭兽',
            value: 1,
            itemStyle: {
                color: '#a2bb2b'
            }
        }, {
            name: '草木黄落',
            value: 1,
            itemStyle: {
                color: '#62aa3c'
            }
        }, {
            name: '蜇虫咸俯',
            value: 1,
            itemStyle: {
                color: '#03a653'
            }
        
        }]
    }]
},

// 冬季
{

 name: '冬',
    itemStyle: {
        color: '#383e56'
    },
    children: [{
        name: '立冬',
        itemStyle: {
            color: '#3aa255'
        },
        children: [{
            name: '水始冰',
            value: 1,
            itemStyle: {
                color: '#a2bb2b'
            }
        }, {
            name: '地始冻',
            value: 1,
            itemStyle: {
                color: '#62aa3c'
            }
        }, {
            name: '雉人大水为蜃',
            value: 1,
            itemStyle: {
                color: '#03a653'
            }
        
        }]
    }, 

{
        name: '小雪',
        itemStyle: {
            color: '#3aa255'
        },
        children: [{
            name: '虹藏不见',
            value: 1,
            itemStyle: {
                color: '#a2bb2b'
            }
        }, {
            name: '天气上升地气下降',
            value: 1,
            itemStyle: {
                color: '#62aa3c'
            }
        }, {
            name: '闭塞而成冬',
            value: 1,
            itemStyle: {
                color: '#03a653'
            }
        
        }]
    },
    
    //大雪
    {
        name: '大雪',
        itemStyle: {
            color: '#3aa255'
        },
        children: [{
            name: '鹃鸥不呜',
            value: 1,
            itemStyle: {
                color: '#a2bb2b'
            }
        }, {
            name: '虎始交',
            value: 1,
            itemStyle: {
                color: '#62aa3c'
            }
        }, {
            name: '荔挺出',
            value: 1,
            itemStyle: {
                color: '#03a653'
            }
        
        }]
    },
        {
        name: '冬至',
        itemStyle: {
            color: '#3aa255'
        },
        children: [{
            name: '蚯蚓结',
            value: 1,
            itemStyle: {
                color: '#a2bb2b'
            }
        }, {
            name: '糜角解',
            value: 1,
            itemStyle: {
                color: '#62aa3c'
            }
        }, {
            name: '水泉动',
            value: 1,
            itemStyle: {
                color: '#03a653'
            }
        
        }]
    },
        {
        name: '小寒',
        itemStyle: {
            color: '#3aa255'
        },
        children: [{
            name: '雁北乡',
            value: 1,
            itemStyle: {
                color: '#a2bb2b'
            }
        }, {
            name: '鹊始巢',
            value: 1,
            itemStyle: {
                color: '#62aa3c'
            }
        }, {
            name: '雉始鸲',
            value: 1,
            itemStyle: {
                color: '#03a653'
            }
        
        }]
    },
    
    {
        name: '大寒',
        itemStyle: {
            color: '#3aa255'
        },
        children: [{
            name: '鸡乳',
            value: 1,
            itemStyle: {
                color: '#a2bb2b'
            }
        }, {
            name: '征鸟厉疾',
            value: 1,
            itemStyle: {
                color: '#62aa3c'
            }
        }, {
            name: '水泽腹坚',
            value: 1,
            itemStyle: {
                color: '#03a653'
            }
        
        }]
    }]
}];



 






var option = {
    series: {
        type: 'sunburst',
        highlightPolicy: 'ancestor',
        data: data,
        radius: [0, '95%'],
        sort: null,
        levels: [{}, {
            r0: '15%',
            r: '35%',
            itemStyle: {
                borderWidth: 2
            },
            label: {
                rotate: 'tangential'
            }
        }, {
            r0: '35%',
            r: '70%',
            label: {
                align: 'right'
            }
        }, {
            r0: '70%',
            r: '72%',
            label: {
                position: 'outside',
                padding: 3,
                silent: false
            },
            itemStyle: {
                borderWidth: 3
            }
        }]
    }
};



        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);

// JavaScript Document