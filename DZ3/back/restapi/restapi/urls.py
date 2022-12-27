from django.contrib import admin
from printing3d import views as models_views
from django.urls import include, path
from rest_framework import routers

from django.conf import settings
from django.conf.urls.static import static


router = routers.DefaultRouter()
router.register(r'minmax', models_views.MinMaxViewSet, basename='minmax')
router.register(r'models', models_views.ModelViewSet, basename='models')
router.register(r'sells', models_views.SellViewSet, basename='sells')
router.register(r'users', models_views.UserViewSet, basename='users')
router.register(r'purchase', models_views.SellPurchaseViewSet, basename='purchase')
router.register(r'cart', models_views.CartViewSet, basename='cart')
router.register(r'status_info', models_views.PurchaseViewSet, basename='status_info')


urlpatterns = [
    path('', include(router.urls)),
    path('auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('admin/', admin.site.urls),

    path('api/cart/add/', models_views.add_to_cart, name='add_to_cart'),
    path('api/cart/delete/', models_views.delete_in_cart, name='delete_in_cart'),
    path('api/model/add/', models_views.create_model, name='create_model'),
    path('api/model/update/', models_views.update_model, name='update_model'),
    path('api/sell/add/', models_views.create_sell, name='create_sell'),
    path('api/sell/update/', models_views.update_sell, name='create_sell'),
    path('api/sell/update/comment', models_views.update_sell_comment, name='create_sell'),
    path('api/purchase/add/', models_views.create_purchase, name='create_purchase'),
    path('api/purchase/update/', models_views.update_purchase, name='create_purchase'),
    path('api/authorize/', models_views.AuthView.as_view(), name="auth"),
    path('api/user/create/', models_views.create_user, name="create-user"),
    path('api/logout/', models_views.logout, name="logout"),

]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)