from rest_framework import viewsets
from printing3d.serializers import *
from printing3d.models import *
from django_filters.rest_framework import DjangoFilterBackend
from .service import ModeltFilter, CartFilter
from rest_framework.permissions import IsAuthenticatedOrReadOnly



class ModelViewSet(viewsets.ModelViewSet):
    queryset = Model3d.objects.all().order_by('id')
    serializer_class = ModelsSerializer
    filter_backends = (DjangoFilterBackend,)
    filterset_class = ModeltFilter
    permission_classes = (IsAuthenticatedOrReadOnly, )

class UserViewSet(viewsets.ModelViewSet):
    queryset = User3d.objects.all().order_by('id')
    serializer_class = UsersSerializer

class SellViewSet(viewsets.ModelViewSet):
    queryset = Sell3d.objects.all().order_by('id')
    serializer_class = SellsSerializer

class CartViewSet(viewsets.ModelViewSet):
    queryset = Cart.objects.all().order_by('id')
    serializer_class = CartSerializer
    filter_backends = (DjangoFilterBackend,)
    filterset_class = CartFilter
    permission_classes = (IsAuthenticatedOrReadOnly,)

class MinMaxViewSet(viewsets.ModelViewSet):
    queryset = Model3d.objects.all()
    serializer_class = MinMaxSerializer