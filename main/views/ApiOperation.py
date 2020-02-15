import os
import time

from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage
from django.forms import model_to_dict
from django.http import JsonResponse, HttpResponse

from big_data_web.settings import MEDIA_ROOT
from main.csv_tool import csv_to_database
from main.models import AppUser


def get_user_num(request):
    """
    返回用户数量
    参数
    kind:'0'/'1'  返回用户数量,kind='1'返回可信,'0'返回不可信 无参数则返回全部数量
    confidence_line 置信下限,默认为0.4,通过判断pre_target来查看可信/不可信用户
    """
    all_user = AppUser.objects.all()
    kind = request.GET.get('kind')
    confidence_line = request.GET.get('conf_line', 0.4)
    if kind == '1':
        num = all_user.filter(pre_target__lt=confidence_line).count()
    elif kind == '0':
        num = all_user.filter(pre_target__gte=confidence_line).count()
    else:
        num = all_user.count()  # 默认返回全部用户数量
    data = {
        'status': 200,
        'msg': 'ok',
        'num': num
    }
    return JsonResponse(data=data)


def get_users(request):
    """
    获取用户列表的接口
    page指定页数
    per_page指定每页数量
    short= true 指定字段简化传输
    fmt指定需要的字段,可以重复
    key指定搜索的属性
    search 搜索的关键词
    ord 排序的属性,默认add_date
    """
    page = int(request.GET.get('page', 1))
    per_page = int(request.GET.get('per_page', 5))
    short = request.GET.get('short')
    format_req = request.GET.getlist('fmt')  # 添加指定需求字段
    attr_insearch = request.GET.get('key')  # 搜索的属性
    search = request.GET.get('search')  # 搜索的关键词
    order = request.GET.get('ord', 'add_date')
    try:
        insearch = {attr_insearch: search}
        selected = AppUser.objects.filter(**insearch)
    except:
        selected = AppUser.objects.all()
    if short == 'true':  # 短格式
        user_ = selected.values('id', 'sex', 'appl_sbm_tm', 'credit_score', 'account_grade', 'quota',
                                'pre_target')
    elif format_req:
        user_ = selected.all().values(*format_req)
    else:
        user_ = selected.all().values()  # 全部字段

    paginator = Paginator(user_.order_by(order), per_page)  # 指定顺序
    try:
        page_object = paginator.page(page)
    except PageNotAnInteger:
        page_object = paginator.page(1)  # 第一页
    except EmptyPage:
        page_object = paginator.page(paginator.num_pages)  # 最后一页

    page_object = list(page_object)
    json = {
        "status": 200,
        'msg': "ok",
        'cur_page': page,
        'per_page': per_page,
        'all_pages': paginator.num_pages,
        'obj_list': page_object,
    }
    return JsonResponse(json)


# 指定user_id的增删改查
def user(request, user_id):
    """

    :param request:
    :param user_id: 在url中指定某一位用户
    :return:
    """
    if user_id == '-1':  # 当没选中任何用户时前端传入-1表示第一条
        the_user = AppUser.objects.first()
    else:
        the_user = AppUser.objects.filter(pk=user_id).first()  # 获取queryset
    # print(type(the_user),type(QuerySet(the_user.first())))
    if request.method == 'GET':
        if the_user:
            user_info = model_to_dict(the_user)
            data = dict(status=200, msg='ok', user_info=user_info)
        else:
            data = {
                'status': 404,
                'msg': 'not_found',
            }
        return JsonResponse(data=data)
    elif request.method == 'POST':
        # 如果用户存在就是更新,不存在就是增加
        # ps form里不能写pk
        data = request.POST.dict()  # 把querydict转为dict
        try:
            data['pre_target']  # 必须要pre_target字段
            if not the_user:  # 用户不存在
                the_user = AppUser(pk=user_id, **data)
                print('不存在,已创建')
                the_user.save()
                # print(type(the_user),the_user)  #都是单个obj
            else:
                for key, value in data.items():
                    setattr(the_user, key, value)
                the_user.save()
                print('存在,已更新')
                # print(type(the_user), the_user)
            data = {
                'status': 201,
                'msg': 'modify/append success',
                'user_info': {'id': user_id, **data},
            }
            return JsonResponse(data=data)
        except Exception as e:
            print(e)
            data = {
                'status': 400,
                'msg': str(e),
            }
        return JsonResponse(data=data)
    elif request.method == 'DELETE':
        if the_user:
            the_user.delete()
            data = {
                'status': 204,
                'msg': 'delete success'
            }
            print('删除成功')
        else:
            data = {
                'status': 404,
                'msg': 'not_found'
            }
            print('未找到删除用户')
        return JsonResponse(data=data)

    data = {
        'status': 404,
        'msg': 'operation invalid'
    }
    print(data)
    return JsonResponse(data=data)


def upload_csv(request):
    if request.method == 'POST':
        file_obj = request.FILES.get('file_obj')
        print(file_obj.name.split('.')[-1] != 'csv')
        if file_obj.name.split('.')[-1] != 'csv':
            return JsonResponse({'status': 400, "msg": 'file must be a csv !'})
        file_name = str(int(time.time())) + '_' + file_obj.name  # 防止撞名
        path = os.path.join(MEDIA_ROOT, file_name)
        with open(path, 'wb+') as f:
            for chunk in file_obj.chunks():
                f.write(chunk)
                f.flush()
        # TODO: 文件处理
        res = csv_to_database(path)
        if res == '200':
            return JsonResponse({'status': 200, 'msg': 'ok'})
        else:
            print(res)
    return JsonResponse({'status': 400, "msg": 'failed'})
