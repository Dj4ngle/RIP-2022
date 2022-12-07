from django.db import models

class Model3d(models.Model):
    name = models.CharField(max_length=255, verbose_name="Название модели")
    description = models.TextField(max_length=8000, verbose_name="Описание модели")
    price = models.DecimalField(max_digits=8, decimal_places=2, verbose_name="Цена модели")
    image_path = models.ImageField(upload_to='images', verbose_name="Фото модели")

class User3d(models.Model):
    login = models.TextField(max_length=255, verbose_name="Логин")
    password = models.TextField(max_length=255, verbose_name="Пароль")
    name = models.TextField(max_length=255, verbose_name="Имя", default=' ')

class Cart(models.Model):
    id_user = models.IntegerField( verbose_name="Пользователь")
    id_model = models.ForeignKey(Model3d, models.DO_NOTHING, db_column='model', verbose_name="Модель")
    quantity = models.IntegerField(verbose_name="Количество")

class Sell3d(models.Model):
    id_user = models.IntegerField( verbose_name="Пользователь")
    sell_date = models.DateTimeField(auto_now=True, verbose_name="Дата продажи")
    status = models.IntegerField(verbose_name="Статус")

class Purchase(models.Model):
    id_purchase = models.IntegerField( verbose_name="Номер заказа")
    id_model = models.ForeignKey(Model3d, models.DO_NOTHING, db_column='model', verbose_name="Модель")
    quantity = models.IntegerField(verbose_name="Количество")



