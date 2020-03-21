from django.urls import path

from main import views

app_name = 'api'

urlpatterns = [
    ##api
    path(r'get_user_num/', views.get_user_num, name='get_user_num'),
    path(r'get_users/', views.get_users, name='get_user'),
    path(r'user/<str:user_id>/', views.user, name='get_user'),
    path(r'upload_csv', views.upload_csv, name="upload_csv"),
]
