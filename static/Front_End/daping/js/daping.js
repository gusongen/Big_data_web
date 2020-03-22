function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
// add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML = h + "<span style='color:coral'>:</span>" + m + "<span style='color: coral'>:</span>" + s;
    t = setTimeout('startTime()', 500);

}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }
    return i
}

echarts.init(document.getElementById('fg1_1'), 'light').setOption({
    title: {
        text: "注册用户",
        left: "center",
        bottom: 'center',
        textStyle: {
            fontSize: '15',
            color: "white",
        }
    },
    series: {
        type: 'pie',
        radius: ['50%', '70%'],
        data: [
            {name: 'A', value: 0.8},
            {name: 'B', value: 0.2},
        ],
        label: {
            show: false,
        }

    }
});


echarts.init(document.getElementById('fg1_2')).setOption({
    title: {
        text: "意向注册",
        left: "center",
        bottom: 'center',
        textStyle: {
            fontSize: '15',
            color: "white",
        }
    },
    series: {
        type: 'pie',
        radius: ['50%', '70%'],
        data: [
            {name: 'A', value: 0.7},
            {name: 'B', value: 0.3},
        ],
        label: {
            show: false,
        }

    }
});


echarts.init(document.getElementById('fg1_3'), 'light').setOption({
    title: {
        text: "未绑卡",
        left: "center",
        bottom: 'center',
        textStyle: {
            fontSize: '15',
            color: "white",
        }
    },
    series: {
        type: 'pie',
        radius: ['50%', '70%'],
        data: [
            {name: 'A', value: 0.85},
            {name: 'B', value: 0.15},
        ],
        label: {
            show: false,
        },
        // color:[
        //     'coral','yellow','blue'
        // ]

    }
});
echarts.init(document.getElementById('fg1_4')).setOption({
    title: {
        text: "未实名",
        left: "center",
        bottom: 'center',
        textStyle: {
            fontSize: '15',
            color: "white",
        }
    },
    series: {
        type: 'pie',
        radius: ['50%', '70%'],
        data: [
            {name: 'A', value: 0.6},
            {name: 'B', value: 0.4},
        ],
        label: {
            show: false,
        },
        // color:[
        //     'coral','yellow','blue'
        // ]

    }
});
echarts.init(document.getElementById("fg2_1")).setOption({
    series: {
        type: 'pie',
        radius: ['50%', "70%"],
        data: [
            {name: 'b', value: 0.8},
            {name: 'A', value: 0.2},

        ],
        label: {
            show: false,
        },
        color: ["#FFAD0E", "transparent"],

    }
});
echarts.init(document.getElementById("zhexian")).setOption({
    grid: {
        bottom: '25%',
    },
    xAxis: {
        type: 'category',
        show: false,
        boundaryGap: false,
    },
    yAxis: {
        type: 'value',
        splitLine: {
            show: false
        },
        show: false,
    },
    series: [{
        data: [0, 932, 901, 934, 340, 1330, 1320],
        type: 'line',
        areaStyle: {
            color: "#8B7E65",
        },
    }],
    color: ["#FFAD0E"]
});

echarts.init(document.getElementById("radar_fg")).setOption({
    title: {
        text: '借款用途',
        subtext: "A资金周转\n" +
            "B生产经营\n" +
            "C固定资产\n" +
            "D个人消费\n" +
            "E投资\n" +
            "F其他\n",
        x: 'right',
        y: "30%",
        textStyle: {
            color: "white"

        },
    },

    radar: {

        shape: 'circle',
        name: {},
        indicator: [
            {name: 'A', max: 6500},
            {name: 'B', max: 16000},
            {name: 'C', max: 30000},
            {name: 'D', max: 55000},
            {name: 'E', max: 52000},
            {name: 'F', max: 25000}
        ]
    },
    series: [{
        type: 'radar',
        areaStyle: {normal: {color: "#FFAD0E"}},
        data: [
            {
                value: [4300, 10000, 28000, 35000, 50000, 19000],
                name: '借款用途'
            }
        ]
    }]
});


echarts.init(document.getElementById("next_7dy")).setOption({
    textStyle: {
        color: "white",
    },
    title: {
        text: '近七日借款/还款人数',
        left: 'center',
        top: 'bottom',
        textStyle: {
            color: "white",
        },
    },

    grid: {
        left: '3%',
        right: '4%',
        bottom: '15%',
        top: '10%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['1', '2', '3', '4', '5', '6', '7'],

        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '邮件营销',
            type: 'line',
            smooth: true,
            stack: '总量',
            areaStyle: {color: "#877B63"},
            data: [120, 132, 101, 134, 90, 230, 210],

        },
        {
            name: '联盟广告',
            type: 'line',
            smooth: true,
            stack: '总量',
            areaStyle: {color: "#D7A646"},
            data: [220, 182, 191, 234, 290, 330, 310]
        },

    ]
});
echarts.init(document.getElementById("amout_of_year"), 'light').setOption({
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    grid: {
        left: "2%",
        right: "0",
        bottom: "5%",
        containLabel: true,
    },
    textStyle: {
        color: "white",
    },
    title: {
        text: '最近一年借款总金额',
        textStyle: {
            color: "white",
        },
    },

    xAxis: [
        {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            // axisTick:1,
            // axisPointer: {
            //     type: 'shadow'
            // }
        }
    ],
    yAxis: [
        {
            // type: 'value',
            // name: '金额',
            // min: 0,
            // max: 250,
            // interval: 50,
            // axisLabel: {
            //     formatter: '{value} 万'
            // },

            type: 'category',
            axisTick: {
                show: false
            },
            data: ["32000万",
                "28000万",
                "24000万",
                "16000万",
                "12000万",
                "8000万",
                "4000万"].reverse()

        },
        {
            type: 'value',
            name: '温度',
            show: false,
            min: 0,
            max: 25,
            interval: 1,
            axisLabel: {
                formatter: '{value} °C'
            }
        }
    ],
    series: [

        {
            name: '对比',
            type: 'line',
            yAxisIndex: 1,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }
    ]
});


var data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 149, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
var dataAxis = [];
for (let i = 1; i <= data.length; i++) {
    dataAxis.push(i);
}
var yMax = 500;
var dataShadow = [];

for (var i = 0; i < data.length; i++) {
    dataShadow.push(yMax);
}

var option2 = {
    grid: {
        bottom: "10%",
    },
    textStyle: {
        color: "white",
    },
    title: {
        text: '每日总成交笔数',
        textStyle: {
            color: "white",
        },
    },
    xAxis: {
        data: dataAxis,
        axisLabel: {
            inside: false,
            textStyle: {
                color: '#fff'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        z: 10
    },
    yAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#999'
            }
        }
    },
    dataZoom: [
        {
            type: 'inside'
        }
    ],
    series: [
        { // For shadow
            type: 'bar',
            itemStyle: {
                normal: {color: 'rgba(0,0,0,0.05)'}
            },
            barGap: '-100%',
            barCategoryGap: '40%',
            data: dataShadow,
            animation: false
        },
        {
            type: 'bar',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#1ADDDC'},
                            {offset: 0.5, color: '#1ADDDC'},
                            {offset: 1, color: '#1ADDDC'}
                        ]
                    )
                },
                emphasis: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#1ADDDC'},
                            {offset: 0.7, color: '#1ADDDC'},
                            {offset: 1, color: '#1ADDDC'}
                        ]
                    )
                }
            },
            data: data
        }
    ]
};
var myChart = echarts.init(document.getElementById("amout_of_all")).setOption(option2);
// var zoomSize = 6;
// myChart.on('click', function (params) {
//     console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
//     myChart.dispatchAction({
//         type: 'dataZoom',
//         startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
//         endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
//     });
// });

var data_of_day=[]
for(let i=1;i<=30;i++)
    data_of_day.push(i)
echarts.init(document.getElementById("data_list")).setOption({
    grid: {
        x: 55,
    }
    , xAxis: {
        data:data_of_day,
        axisLabel: {
            inside: true,
            textStyle: {
                color: '#fff'
            }
        }
    },
    yAxis: {
        type: 'category',
        axisLabel: {
            inside: false,
            textStyle: {
                color: '#fff'
            }
        }
        ,
        data: ['', '16000万', '',
            '14000万', '',
            '12000万', '',
            '1000万', '',
            '800万', '',
            '600万', '',
            '400万',].reverse()

    },
    title: {
        text: '借贷总金额随时间变化',
        left: 'center',
        textStyle: {
            color: "white",
        },
    },

    series: [{
        symbolSize: 20,
        data: [
            [10.0, 4.04],
            [8.0, 6.95],
            [13.0, 7.58],
            [6.0, 8.81],
            [21.0, 8.33],
            [14.0, 9.96],
            [26.0, 7.24],
            [14.0, 4.26],
            [12.0, 10.84],
            [17.0, 8.82],
            [20.0, 5.68]
        ],
        type: 'scatter',

    }]

});

var map = new BMap.Map("map");    // 创建Map实例
map.centerAndZoom(new BMap.Point(106.55, 29.57), 11);  // 初始化地图,设置中心点坐标和地图级别
//添加地图类型控件
map.setMapStyleV2({
    styleId: 'c717d6f20bf49870ea746b20b99b34b6'
});
map.setCurrentCity("重庆");          // 设置地图显示的城市 此项是必须设置的
map.enableScrollWheelZoom(true);


let y_min = 29.4608629500, x_min = 106.2879133200, y_max = 29.6831733600, x_max = 106.8254465000;
let round = 10;

function getRndInteger(min, max) {
    return Math.random() * (max - min) + min;
}

for (var i = 0; i < round; i++) {
    let cur_x = getRndInteger(x_min, x_max), cur_y = getRndInteger(y_min, y_max);
    // console.log(i + '.....' + cur_x + '....' + cur_y);
    var point = new BMap.Point(cur_x, cur_y);
    var marker = new BMap.Marker(point);
    map.addOverlay(marker);
}
var base_num = ["7232", "370", "5", "2", '12345'];
var fuck = function () {
    for (let i = 0; i < base_num.length; i++) {
        let text = thousan

        ds(base_num[i]);
        $('.roll_number').eq(i).leoTextAnimate('reload', {text: text});
    }
};
var thousands = function (base, lenth = 1000) {
    num = Date.now() % lenth + Math.ceil(Math.random() * 100)
    var str = base + num.toString();
    var reg = str.indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g;
    return str.replace(reg, "$1,");
};
// $('.roll_number').text(thousands());
$('.roll_number:odd').parent().css('color', '#64fdff');
$('.roll_number:even').parent().css('color', '#ffbb46');
// $('.roll_number').leoTextAnimate({
//     delay: 0,
//     autorun: true,
//     fixed: [',', ':', '.'],
//     start: '-'
// });
setInterval("fuck()", 5000);