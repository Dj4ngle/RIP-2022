from django.urls import path
from . import views
from django.contrib import admin

urlpatterns = [
     path('admin/', admin.site.urls),
     path('', views.modelsList),
     path('model/<int:id>/', views.GetModel, name='model_url')
]
