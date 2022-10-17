from django.db import models

class Model3d(models.Model):
    name = models.CharField(max_length=255, verbose_name="Название модели")
    description = models.TextField(max_length=8000, verbose_name="Описание модели")
    price = models.DecimalField(max_digits=8, decimal_places=2, verbose_name="Цена модели")
    #image = models.ImageField(upload_to='images/')

class User3d(models.Model):
    login = models.TextField(max_length=255, verbose_name="Логин")
    password = models.TextField(max_length=255, verbose_name="Пароль")

class Sell3d(models.Model):
    id_user = models.ForeignKey(User3d, models.DO_NOTHING, db_column='user', verbose_name="Пользователь")
    id_model = models.ForeignKey(Model3d, models.DO_NOTHING, db_column='model', verbose_name="Модель")
    sell_date = models.DateTimeField(auto_now=True, verbose_name="Дата продажи")
    colour = models.CharField(max_length=255, verbose_name="Цвет модели")
    size = models.IntegerField(max_length=255, verbose_name="Размер модели")