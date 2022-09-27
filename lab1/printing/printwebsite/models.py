from django.db import models
from mptt.models import MPTTModel

class Model3d(models.Model):
    name = models.CharField(max_length=30)
    description = models.TextField()
    price = models.IntegerField(max_length=10)
    image_path = models.CharField(max_length=50)
    # image = models.ImageField(upload_to='3dmodels/')

    class Meta:
        managed = False
        db_table = 'Models'

    def __str__(self):
         return self.name

class Image3d(models.Model):
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to='images')

    def __str__(self):
        return self.title


# from django.db import models
# from mptt.models import MPTTModel, TreeForeignKey
#
# class List_3D(MPTTModel):
#     name = models.CharField(max_length=50)
#     slug = models.SlugField(max_length=100)
#     parent = TreeForeignKey(
#         'self',
#         related_name="children",
#         on_delete=models.SET_NULL,
#         null=True,
#         blank=True
#     )
#
#     class MPTTMeta:
#         order_insertion_by = ['name']
#
#     def __str__(self):
#         return self.name
#
# class Model_3D(models.Model):
#     name = models.CharField(max_length=50)
#     image = models.ImageField(upload_to='3dmodels/')
#     text = models.TextField()
#     list_3d = models.ForeignKey(
#         List_3D,
#         related_name="model",
#         on_delete=models.SET_NULL,
#         null=True
#         )
#     create_at = models.DateTimeField(auto_now_add=True)
