from django.contrib import admin
from . import models

@admin.register(models.Model3d)
class Model3DAdmin(admin.ModelAdmin):
    list_display = ["name", "price", "image_path"]
