option_yhfq = {
    'pg4_1': {
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series: [
            {
                type: 'tree',
                data: [{
                    'name': '我',
                    'label': {
                        'position': 'left',
                    },
                    'children': [{
                        'name': '年龄',
                        'position': ['50%', '50%'],
                        'children': [
                            {'name': '       '}, {'name': '       ',}
                        ]
                    },
                        {
                            'name': '性别',
                            'children': [
                                {'name': '       '}, {'name': '       ',}
                            ]
                        },
                        {
                            'name': '学历',
                            'children': [
                                {'name': '       '}, {'name': '       ',}
                            ]
                        },
                        {
                            'name': '信用评分',
                            'children': [
                                {'name': '       '}, {'name': '       ',}
                            ]
                        },
                        {
                            'name': '借款金额',
                            'children': [
                                {'name': '       '}, {'name': '       ',}
                            ]
                        },
                        {
                            'name': '收入水平',
                            'children': [
                                {'name': '       '}, {'name': '       ',}
                            ]
                        },
                    ]
                }],

                top: '1%',
                left: '7%',
                bottom: '1%',
                right: '20%',
                itemStyle: {
                    // color: 'white',
                    // boderWidth: 120,
                },
                symbol: 'image:///static/Front_End/main/img/user_ico.jpeg',
                symbolSize: 80,
                label: {
                    position: 'left',
                    verticalAlign: 'middle',
                    align: 'right',
                    fontSize: 30,
                    fontWeight: 'bold',
                    // color:'#1983e6',
                    // borderRadius: 30,
                    // backgroundColor: 'white',

                },
                lineStyle:
                    {
                        color: 'white',
                        width:
                            10,
                    }
                ,

                leaves: {
                    label: {
                        // position: 'right',
                        // verticalAlign: 'middle',
                        // align: 'left'
                        position: 'left',
                        verticalAlign: 'middle',
                        align: 'right',
                    }
                },
                expandAndCollapse: true,
                animationDuration:
                    200,
                animationDurationUpdate:
                    200
            }
        ]
    }
}
;
/************************************************************************/
option_sjfx = {
    'fg4_1': {
        grid: {
            left: '10%',
            top: '8%',
            width: '80%',
            height: '80%',

        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c}'
        },
        xAxis: {
            type: 'category',
            data: ['信息完整度', '信用额度', '使用额度', '可使用额度'],
            splitLine: {
                show: true,
            },
            axisLabel: {
                fontSize: 10,
            },
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [90, 200, 330, -130],
            type: 'bar',

        }]
    },
    'fg4_2': {

        radar: [
            {
                indicator: [
                    {text: '消费', max: 100},
                    {text: '生活', max: 100},
                    {text: '投资', max: 100},
                    {text: '买车', max: 620},
                    {text: '买房', max: 100},
                ],
                radius: 80,
                center: ['50%', '50%'],
            },

        ],
        series: [

            {
                type: 'radar',
                data: [
                    {
                        value: [85, 90, 36, 95, 95],
                        name: ''
                    }
                ]
            },

        ]

    },
    'fg4_3': {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [
            {
                name: '支付方式',
                type: 'pie',
                radius: '90%',
                center: ['50%', '50%'],
                label: {
                    show: false,
                },
                data: [
                    {value: 0.1, name: '货到付款'},
                    {value: 0.1, name: '混合支付'},
                    {value: 0.7, name: '在线支付'},
                    {value: 0.1, name: 'NA'},
                ],

            }
        ]
    },
    'fg4_4': {
        xAxis: {},
        yAxis: {},
        grid: {
            left: '10%',
            top: '8%',
            width: '80%',
            height: '80%',

        },
        series: [{
            symbolSize: 20,
            data: [
                [10.0, 8.04],
                [8.0, 6.95],
                [13.0, 7.58],
                [9.0, 8.81],
                [11.0, 8.33],
                [14.0, 9.96],
                [6.0, 7.24],
                [4.0, 4.26],
                [12.0, 10.84],
                [7.0, 4.82],
                [5.0, 5.68]
            ],
            type: 'scatter'
        }]
    },
};
option_jctj = {
    "fg3_1": {
        title: {
            text: '借贷用户地区分布',
            left: "center",
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },

        grid: {
            top: "10%",
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01],
            axisLabel: {fontSize: "9"},
        },
        yAxis: {
            type: 'category',

        },
        series: [
            {
                type: 'bar',
                data: [18203, 23489, 29034, 104970, 131744, 630230]
            },
            {
                type: 'bar',
                data: [19325, 23438, 31000, 121594, 134141, 681807]
            }
        ]
    },
    "fg3_2": {
        title: {
            text: "用户年龄趋势占比",
            left:
                "center",
            textStyle:
                {
                    fontSize: '15',
                    color:
                        "black",
                }
        }
        ,
        series: {
            type: 'pie',
            radius:
                ['50%', '70%'],
            data:
                [
                    {name: '18-20', value: 0.1},
                    {name: '21-30', value: 0.4},
                    {name: '31-40', value: 0.3},
                    {name: '41-50', value: 0.2},
                ],
            label:
                {
                    show: true,
                }

        }
    },
    "fg3_3": {
        title: {
            text: "用户性别趋势占比",
            left:
                "center",
            textStyle:
                {
                    fontSize: '15',
                    color:
                        "black",
                }
        }
        ,
        series: {
            type: 'pie',
            radius:
                ['50%', '70%'],
            data:
                [
                    {name: '男', value: 0.7},
                    {name: '女', value: 0.3},
                ],
            label:
                {
                    show: true,
                }

        }
    },
    "fg3_4": {
        title: {
            text: "用户学历趋势占比",
            left:
                "center",
            textStyle:
                {
                    fontSize: '15',
                    color:
                        "black",
                }
        }
        ,
        series: {
            type: 'pie',
            radius:
                ['50%', '70%'],
            data:
                [
                    {name: '小学及以下', value: 0.1},
                    {name: '大学', value: 0.6},
                    {name: '中学', value: 0.1},
                    {name: '硕博', value: 0.1},
                    {name: '其他', value: 0.1},
                ],
            label:
                {
                    show: true,
                }

        }
    },
};

option_xy = {
    'xinyong': {
        grid: {
            left: '20',
        },

        series: [
            {
                name: '业务指标',
                type: 'gauge',
                data: [{value: 90,}],
                startAngle: 180,
                endAngle: 0,
                center: ["60%", '70%'],
                detail: {
                    show: false,
                }
                ,
                splitLine: {
                    show: false,
                }
                ,
                axisTick: {
                    show: false
                }
                ,
                axisLabel: {
                    show: false
                }
                ,
                axisLine: {
                    lineStyle: {
                        color: [[0.8, '#10b5f2'], [1, '#f5f6fa']],
                        width:
                            20,
                    }
                    ,
                }
                ,
                pointer: {
                    length: 50,
                }
                ,
                radius: 90,
                itemStyle:
                    {
                        color: '#ffcc00',
                    }
                ,
            },//end
        ],

    },
};
option_list = [option_jctj, option_xy, {}];

$('.choice').click(function () {
    $(this).addClass('choice_chosen').siblings().css('display', 'flex').parent().siblings('li').children('.choice').removeClass('choice_chosen').siblings().hide();
    let index = ($(this)).parent().index();
    $('.content').eq(index).css('display', 'grid').siblings('.content').hide();
    //图片初始化
    for (key in option_list[index]) {
        echarts.init(document.getElementById(key)).setOption(option_list[index][key]);
    }
    if (index === 1) {
        $('.switch_btn').eq(0).click();
    }
});
$('#logout').click(function () {
    Cookies.remove('user');
    window.location.reload();
});

$('.switch_btn').click(function () {
    $(this).css({
        "background": "#f5f6fa",
        'font-weight': 'bold',
        'color': 'black'
    }).siblings('.switch_btn').css({
        'background': 'white', 'font-weight': 'normal', 'color': 'grey'
    });
    let index = $(this).index() + 1;
    $('#pg' + index).css({'display': 'block'}).siblings('.content1').hide();
    if (index === 2) {
        for (key in option_sjfx) {
            echarts.init(document.getElementById(key)).setOption(option_sjfx[key]);
            $('.swticthcont').css({'background': '#f5f6fa'})
        }
    } else if (index === 4) {
        $('.swticthcont').css({'background': '#1983e6'});
        $(this).click();
        for (key in option_yhfq) {
            echarts.init(document.getElementById(key)).setOption(option_yhfq[key]);
        }
    } else {
        $('.swticthcont').css({'background': '#f5f6fa'})
    }
});


$(function () {
    $('.choice').eq(0).click();
});