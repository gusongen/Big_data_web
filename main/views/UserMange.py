from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.urls import reverse

from main.models import User


def hello(request):
    return HttpResponse('hello')


def register(request):
    if request.method == 'GET':
        return render(request, 'reg.html')
    elif request.method == 'POST':
        username = request.POST.get('id')
        user = User.objects.filter(pk=username)
        if user.exists():
            return HttpResponse('用户名已存在')
        user = User()
        user.u_id = username
        user.u_pwd = request.POST.get('pwd')
        user.u_identity = request.POST.get('iden')
        user.save()
        return render(request, 'success_reg.html')
    else:
        pass


def login(request):
    if request.method == 'GET':
        return render(request, 'login.html')
    elif request.method == 'POST':
        username = request.POST.get('id')
        pwd = request.POST.get('pwd')
        user = User.objects.filter(pk=username).filter(u_pwd=pwd)
        if user.exists():
            statu = request.POST.get('stu')
            if statu:
                max_age = 7 * 24 * 60 * 60
            else:
                max_age = None
            response = redirect(reverse('main:main'))
            response.set_signed_cookie('user', username, salt='salt', max_age=max_age)
            return response
        return HttpResponse('登入失败')
    else:
        pass


def main(request):
    if request.COOKIES.get('user'):
        user = request.get_signed_cookie('user', salt='salt')
        return render(request, 'main.html', context={'name': user})
    return redirect(reverse('main:login'))


def dp(request):
    if request.COOKIES.get('user'):
        user = request.get_signed_cookie('user', salt='salt')
        return render(request, 'daping.html', context={'name': user})
    return redirect(reverse('main:login'))


def fuck(request):
    return HttpResponse('fucku')
