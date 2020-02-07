from django.db import models


# Create your models here.


class User(models.Model):
    u_id = models.CharField(max_length=16, null=False, unique=True, primary_key=True)
    u_pwd = models.CharField(max_length=16, null=False)
    CHOICES = [
        ('AD', 'admin'),
    ]
    u_identity = models.CharField(max_length=2, choices=CHOICES, null=False)
