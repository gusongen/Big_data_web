from django.urls import path

from main import views

app_name = 'main'

urlpatterns = [
    path('hello/', views.hello, name='hello'),  # 测试
    path(r'register/', views.register, name='register'),
    path(r'login/', views.login, name='login'),
    path(r'main/', views.main, name='main'),
    path(r'dp/', views.dp, name='dp'),
    path(r'/', views.dp, ),
    path(r'', views.dp, ),

]
