from django.contrib import admin
from . import models

@admin.register(models.Model3d)
class Model3DAdmin(admin.ModelAdmin):
    list_display = ["name", "price", "image_path"]

@admin.register(models.Sell3d)
class Model3DAdmin(admin.ModelAdmin):
    list_display = ["id_user", "id_model", "sell_date"]

@admin.register(models.User3d)
class Model3DAdmin(admin.ModelAdmin):
    list_display = ["login", "password", "name"]
