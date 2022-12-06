from django.contrib import admin
from printing3d import views as models_views
from django.urls import include, path
from rest_framework import routers

from django.conf import settings
from django.conf.urls.static import static


router = routers.DefaultRouter()
router.register(r'models', models_views.ModelViewSet)
router.register(r'users', models_views.UserViewSet)
router.register(r'sells', models_views.SellViewSet)
router.register(r'cart', models_views.CartViewSet)
router.register(r'minmax', models_views.MinMaxViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('admin/', admin.site.urls),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),

]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)