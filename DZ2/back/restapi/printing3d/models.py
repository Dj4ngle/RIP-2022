from django.contrib.auth.base_user import AbstractBaseUser
from django.db import models
from django.contrib.auth.models import PermissionsMixin, UserManager


class Model3d(models.Model):
    name = models.CharField(max_length=255, verbose_name="Название модели")
    description = models.TextField(max_length=8000, verbose_name="Описание модели")
    price = models.DecimalField(max_digits=8, decimal_places=2, verbose_name="Цена модели")
    image_path = models.ImageField(upload_to='images', verbose_name="Фото модели")

class Cart(models.Model):
    id_user = models.IntegerField(verbose_name="Пользователь")
    id_model = models.ForeignKey(Model3d, models.DO_NOTHING, db_column='model', verbose_name="Модель")
    quantity = models.IntegerField(verbose_name="Количество")
    colour = models.CharField(max_length=255, verbose_name="Цвет модели", default="серый")
    size = models.IntegerField( verbose_name="Размер модели", default=28)

class Sell3d(models.Model):
    id_user = models.IntegerField( verbose_name="Пользователь")
    sell_date = models.DateTimeField(auto_now=True, verbose_name="Дата продажи")
    status = models.IntegerField(verbose_name="Статус")
    comment = models.TextField(max_length=8000, verbose_name="Комментарий", default="")

class Purchase(models.Model):
    id_purchase = models.IntegerField( verbose_name="Номер заказа")
    id_model = models.ForeignKey(Model3d, models.DO_NOTHING, db_column='model', verbose_name="Модель")
    quantity = models.IntegerField(verbose_name="Количество")
    colour = models.CharField(max_length=255, verbose_name="Цвет модели", default="серый")
    size = models.IntegerField(verbose_name="Размер модели", default=28)


class User3d(AbstractBaseUser):
    username = models.CharField(max_length=20, verbose_name="Логин", unique=True)
    password = models.CharField(max_length=128, verbose_name="Пароль")
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    email = models.CharField(max_length=20, verbose_name="Почта", default="")
    objects = UserManager()
