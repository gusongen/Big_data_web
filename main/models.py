from django.db import models

# Create your models here.
from django.utils import timezone


class User(models.Model):
    u_id = models.CharField(max_length=16, null=False, unique=True, primary_key=True)
    u_pwd = models.CharField(max_length=16, null=False)
    CHOICES = [
        ('AD', 'admin'),
    ]
    u_identity = models.CharField(max_length=2, choices=CHOICES, null=False)


class AppUser(models.Model):
    # bound = [('Y', 'has_bind'), ('N', 'not_blind')]  # 是否绑定
    # pre_target和 id必须填
    default_max_len = 64
    pre_target = models.FloatField(null=False)  # 预测值
    id = models.CharField(max_length=18, null=False, primary_key=True, unique=True)  # 申请贷款唯一编号
    id_card_x = models.CharField(max_length=default_max_len, null=True)
    auth_time = models.CharField(null=True, max_length=default_max_len)
    phone = models.CharField(null=True, max_length=default_max_len)
    credit_score = models.CharField(null=True, max_length=default_max_len)
    overdraft = models.CharField(null=True, max_length=default_max_len)
    quota = models.CharField(null=True, max_length=default_max_len)
    appl_sbm_tm = models.CharField(null=True, max_length=default_max_len)
    sex = models.CharField(null=True, max_length=default_max_len)
    birthday = models.CharField(null=True, max_length=default_max_len)
    hobby = models.CharField(null=True, max_length=2*default_max_len)
    merriage = models.CharField(null=True, max_length=default_max_len)
    income = models.CharField(null=True, max_length=default_max_len)
    id_card_y = models.CharField(null=True, max_length=default_max_len)
    degree = models.CharField(null=True, max_length=default_max_len)
    industry = models.CharField(null=True, max_length=default_max_len)
    qq_bound = models.CharField(null=True, max_length=default_max_len)
    wechat_bound = models.CharField(null=True, max_length=default_max_len)
    account_grade = models.CharField(null=True, max_length=default_max_len)

    # 自动添加的时间
    add_date = models.DateTimeField('保存日期', default=timezone.now)
