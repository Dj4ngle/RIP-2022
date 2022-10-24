from django.contrib import admin
from printing3d import views as models_views
from django.urls import include, path
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'models', models_views.ModelViewSet)
router.register(r'users', models_views.UserViewSet)
router.register(r'sells', models_views.SellViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),

    path('admin/', admin.site.urls),
]