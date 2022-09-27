from django.contrib import admin
from . import models
from mptt.admin import MPTTModelAdmin
#
# # @admin.register(models.Book)
# # class Model3DAdmin(admin.ModelAdmin):
# #     list_display = ["name", "create_at"]
#
# # admin.site.register(models.List_3D, MPTTModelAdmin)

@admin.register(models.Model3d)
class Model3DAdmin(admin.ModelAdmin):
    list_display = ["name", "price", "image_path"]

@admin.register(models.Image3d)
class Model3DAdmin(admin.ModelAdmin):
    list_display = ["title", "image"]

#admin.site.register(models.Image3d)
#admin.site.register(models.Model3d)


