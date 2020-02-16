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
};
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
option_list = [option_jctj]
/************************************************************************/
const default_chosen_num = '-1';
var chosen_user = default_chosen_num;  //default
var ages = function (str) {
    let r = str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
    if (r == null) return false;
    let d = new Date(r[1], r[3] - 1, r[4]);
    if (d.getFullYear() == r[1] && (d.getMonth() + 1) == r[3] && d.getDate() == r[4]) {
        let Y = new Date().getFullYear();
        return "" + (Y - r[1]);
    }
    return false;
};
var renew_data = function () {   //局部刷新页面二
    $('.switch_btn').eq(0).click();
    $.getJSON('/api/user/' + chosen_user + '/', function (data) {
        try {
            let user_info = data['user_info'];
            $('#u_id').text(user_info['id']);
            $('#u_age').text(function () {
                if (user_info['birthday']) {
                    let ag;
                    if (ag = ages(user_info['birthday']))
                        return ag;
                }
                return 28     //默认返回28岁
            });
            $('#u_sex').text(user_info['sex']);
            $('#u_degree').text(user_info['degree']);
            roll_num(user_info['pre_target']);
            for (let key in user_info) {
                $('#' + 'zd_' + key).val(user_info[key]);
            }
        } catch (e) {
            alert('错误' + e);
        }
    });
    //TODO: 给关系按键注册点击事件 1

};
$('#mod_u').click(function () {
    let post_form = {};
    $('#cur_user input').each(
        function () {
            let key = $(this).attr('id');
            key = key.replace('zd_', '');
            if (key === 'id' || key === 'add_date') return;  //id由url得到,add_date由后台生成
            let valu = $(this).val();
            post_form[key] = valu;
        });
    let add_chosen_user = $('#zd_id').val();
    let pre_t = $('#zd_pre_target').val();
    if (!add_chosen_user || !pre_t) {
        alert("带*字段不能为空");
    } else {
        $.post('/api/user/' + chosen_user + '/', post_form, function (data) {
            alert('修改成功!');
            renew_data();
        });
    }
});
$('#del_u').click(function () {
    $.ajax('/api/user/' + chosen_user + '/', {
        method: 'DELETE', //大写,全拼
        dataType: 'json',
        success: function (data) {
            alert('删除成功!');
            chosen_user = default_chosen_num;
            renew_data();
        }
    });
});
$('#add_u').click(function () {
    let add_chosen_user = $('#a_zd_id').val();
    // console.log(add_chosen_user);
    let pre_t = $('#a_zd_pre_target').val();
    if (!add_chosen_user || !pre_t)
        alert("带*字段不能为空");
    else {
        const api_url = '/api/user/' + add_chosen_user + '/';
        console.log(api_url);
        let has_this_user = function () {
            let isexist;
            $.ajax(api_url, {
                async: false,
                method: 'GET',
                success: function (data) {
                    console.log('gggg' + api_url);
                    isexist = data['status'] == 200 ? true : false;
                }
            });
            console.log('请求成功');
            return isexist;
        };
        if (has_this_user()) {
            alert('该用户已经存在,不能创建!');
        } else {
            let post_form = {};
            $('#add_user input').each(
                function () {
                    let key = $(this).attr('id');
                    key = key.replace('a_zd_', '');
                    if (key === 'id' || key === 'add_date') return;  //id由url得到,add_date由后台生成
                    let valu = $(this).val();
                    post_form[key] = valu;
                });
            console.log(post_form);
            $.post(api_url, post_form, function (data) {
                alert('创建成功!');
                chosen_user = add_chosen_user;
                console.log(data);
                renew_data();
                $('#add_user input').val('')
            });
        }
    }
});
// var first_time = true;//第一次加载
$('.choice').click(function () {
    $(this).addClass('choice_chosen').siblings().css('display', 'flex').parent().siblings('li').children('.choice').removeClass('choice_chosen').siblings().hide();
    let index = ($(this)).parent().index();
    $('.content').eq(index).css('display', 'grid').siblings('.content').hide();
    //图片初始化
    for (let key in option_list[index]) {
        echarts.init(document.getElementById(key)).setOption(option_list[index][key]);
    }
    if (index === 1) {
        renew_data();
    } else if (index === 0) {
        renew_page0()
        load_form('#table1');
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
        for (let key in option_sjfx) {
            echarts.init(document.getElementById(key)).setOption(option_sjfx[key]);
            $('.swticthcont').css({'background': '#f5f6fa'})
        }
    } else if (index === 4) {
        $('.swticthcont').css({'background': '#1983e6'});
        for (let key in option_yhfq) {
            let myc = echarts.init(document.getElementById(key));//.setOption(option_yhfq[key]);
            myc.setOption(option_yhfq[key]);
            myc.setOption(option_yhfq[key]);
        }
        load_form('#table2');
    } else {
        $('.swticthcont').css({'background': '#f5f6fa'})
    }
});
let renew_page0 = function () {
    $.getJSON('/api/get_user_num/?kind=1', function (data) {
        $('#trust_num').text(data['num']);
    });

    $.getJSON('/api/get_user_num/?kind=0', function (data) {
        $('#utrust_num').text(data['num']);
    });

    $.getJSON('/api/get_user_num/', function (data) {
        $('#all_num').text(data['num']);
    });
};


$(function () {
    $('.choice').eq(0).click();
});

var roll_num = function (prob = 0.2) {  //将1-逾期概率作为信用等级
    let score = 1 - prob;
    score = Math.ceil(score * 100) % 100;
    $('#numers_child_top').text(score + 1);
    $('#numers_child_cen').text(score);
    $('#numers_child_bottom').text(score - 1);
    option_xy.xinyong.series[0].data[0].value = score;
    option_xy.xinyong.series[0].axisLine.lineStyle.color[0][0] = score / 100;
    echarts.init(document.getElementById("xinyong")).setOption(option_xy.xinyong);

};

//搜索函数


$('.search_btn').click(function () {
    let div_id = $(this).attr('id').replace('search_box_', "");
    let search_content = $(this).parent().find('input').val();
    load_form('#table' + div_id, 1, 'search=' + search_content + '&key=id');
    // alert("div_id  " + div_id);
    // alert('search_content  ' + search_content);
});
//TODO :搜索之后按分页器会自动跳到全部
//div_id写table的id
let table_head = "<tr>\n" +
    "<th style=\"text-align: center;\">申请贷款唯一编号</th>\n" +
    "<th style=\"text-align: center;\">性别</th>\n" +
    "<th style=\"text-align: center;\">贷款时间</th>\n" +
    "<th style=\"text-align: center;\">信用评分</th>\n" +
    "<th style=\"text-align: center;\">会员级别</th>\n" +
    "<th style=\"text-align: center;\">信用额度</th>\n" +
    "<th style=\"text-align: center;\">总信用等级</th>\n" +
    "</tr>";


//表格加载
var load_form = function (div_id, page = 1, req = '') {
    let api_url = '/api/get_users/?' + 'page=' + page + '&short=true&' + req;
    let tb = $(div_id).find('tbody');
    tb.html('');
    tb.append(table_head);
    $.getJSON(api_url, function (data) {
        let user_list = data["obj_list"];
        // console.log(user_list);
        // console.log(typeof (user_list));
        let cur_page = data["cur_page"];  //当前页数
        let per_page = data["per_page"];  //每页个数
        let all_pages = data['all_pages'];  //总数
        for (let i = 0; i < user_list.length; i++) {
            tb.append(html_block(user_list[i]));
        }
        tb.find('tr').click(function () {  //TODO:字段做点击事件跳转到详情页面
            let click_user = $(this).find('td:eq(0)').text();
            chosen_user = click_user;
            $('.choice').eq(1).click();
        });
        //按键每次翻页都刷新
        //TODO:分页器:显示:{根据页码自动生成,过长中间省略} 注册点击事件{}
        $(function () {
            let nav = $(div_id + "_nav");
            nav.html("");  //清空
            //
            //生成按键
            let start_point = 0;
            if (all_pages <= default_nav_btn) {
                nav.append(pre_btn);
                add_to_nav(nav, all_pages);
                nav.append(next_btn);
            } else {  //按键太多,要做隐藏处理
                nav.append(pre_btn);
                let half_btn = Math.floor(default_nav_btn / 2);
                start_point = cur_page - half_btn > 1 ? cur_page - half_btn : 1;
                start_point = (start_point + default_nav_btn - 1 > all_pages) ? (all_pages - default_nav_btn + 1) : start_point;
                add_to_nav(nav, default_nav_btn, start_point);
                nav.append(next_btn);
            }


            nav.find('.center_page').click(function () {
                let this_page = $(this).text();
                load_form(div_id, page = this_page, first = false);
                return false;
            });
            nav.find('.center_page:eq(' + (cur_page - start_point) + ')').parent().addClass("active");  //高亮
            if (cur_page === 1) {
                nav.find('.pre_page').parent().addClass("disabled");
            } else {
                nav.find('.pre_page').click(function () {
                    load_form(div_id, page = cur_page - 1, first = false);
                    return false;
                });
            }
            if (cur_page === all_pages) {
                nav.find('.next_page').parent().addClass("disabled");
            } else {
                nav.find('.next_page').click(function () {
                    load_form(div_id, page = cur_page + 1, first = false);
                    return false;
                });
            }
        });

    });
};

//TODO: 列表/搜素/分页器 1
//TODO: 根据csv导库
//TODO: 上传csv  1
//TODO: 反向生成csv
//TODO: 下载csv
//TODO: 更改密码


var html_block = function (obj) {

    var base = "<tr>\n" +
        "    <td class=\"fm_id\">" + obj.id + "</td>\n" +
        "    <td class=\"fm_sex\">" + obj.sex + "</td>\n" +
        "    <td class=\"fm_appl_sbm_tm\">" + obj.appl_sbm_tm + "</td>\n" +
        "    <td class=\"fm_credit_score\">" + obj.credit_score + "</td>\n" +
        "    <td class=\"fm_account_grade\">" + obj.account_grade + "</td>\n" +
        "    <td class=\"fm_quota\">" + obj.quota + "</td>\n" +
        "    <td>\n" +
        "        <ul class=\"rev_pro clearfix\">\n" +
        "            <li>\n" +
        "                <div class=\"revinp\">\n" +
        "\t\t\t\t<span class=\"level\">\n" +
        "\t\t\t\t\t<i class=\"level_solid\" cjmark=\"\"></i>\n" +
        "\t\t\t\t\t<i class=\"level_solid\" cjmark=\"\"></i>\n" +
        "\t\t\t\t\t<i class=\"level_solid\" cjmark=\"\"></i>\n" +
        "\t\t\t\t\t<i class=\"level_solid\" cjmark=\"\"></i>\n" +
        "\t\t\t\t\t<i class=\"level_hollow\" cjmark=\"\"></i>\n" +
        "\t\t\t\t</span>\n" +
        "                    <span class=\"revgrade\">良</span>\n" +
        "                </div>\n" +
        "            </li>\n" +
        "        </ul>\n" +
        "    </td>\n" +
        "</tr>";
    return base
};
let add_to_nav = function (nav, all_pages, start_index = 1) {
    for (let i = start_index; i < start_index + all_pages; i++) {
        nav.append(num_btn(i));
        // console.log(i)
    }
};
let pre_btn = "<li>\n" +
    "<a class='pre_page' href=\"#\" aria-label=\"Previous\">\n" +
    "<span aria-hidden=\"true\">&laquo;</span>\n" +
    "</a>\n" +
    "</li>";
let num_btn = function (num = 1) {
    return '<li><a  class="center_page" href="#">' + num + '</a></li>'
};

let next_btn = " <li>\n" +
    "<a class='next_page' href=\"#\" aria-label=\"Next\">\n" +
    "<span aria-hidden=\"true\">&raquo;</span>\n" +
    "</a>\n" +
    "</li>";
let default_nav_btn = 7;
$('th').css('text-align', 'center');


//上传文件
$('#upload_file').click(function () {
    let file = $('#file_obj')[0].files[0];
    if (file) {
        // var name = $('input[name=username]').val();
        // var csrf = $('input[name=csrfmiddlewaretoken]').val();
        let formdata = new FormData();
        // formdata.append('username', name);
        formdata.append('file_obj', file);
        // formdata.append('csrfmiddlewaretoken', csrf);
        $.ajax({
            url: "/api/upload_csv",
            type: 'POST',
            data: formdata,
            processData: false, // 不处理数据( 必须有)
            contentType: false,  //不设置内容类型 ( 必须要)
            // header: {
            //     'X-CSRFToken': $.cookie('csrftoken'),
            // },
            success: function (res) {
                if (res.status === 200) {
                    alert('上传成功');
                } else {
                    alert("上传失败   " + res.msg);
                }
            }
        })
		alert('csv已经上传,请等待...');
    } else {
        alert("请先选中文件");
    }

});

