from rest_framework import viewsets
from printing3d.serializers import *
from printing3d.models import *
from django_filters.rest_framework import DjangoFilterBackend
from .service import ModeltFilter, CartFilter, PurchasesFilter, BuyesFilter
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated


class ModelViewSet(viewsets.ModelViewSet):
    queryset = Model3d.objects.all().order_by('id')
    serializer_class = ModelsSerializer
    filter_backends = (DjangoFilterBackend,)
    filterset_class = ModeltFilter
    permission_classes = (IsAuthenticatedOrReadOnly, )

class SellViewSet(viewsets.ModelViewSet):
    queryset = Sell3d.objects.all().order_by('id')
    serializer_class = SellsSerializer
    filter_backends = (DjangoFilterBackend,)
    filterset_class = PurchasesFilter
    permission_classes = (IsAuthenticatedOrReadOnly,)

class SellPurchaseViewSet(viewsets.ModelViewSet):
    queryset = Purchase.objects.all().order_by('id')
    serializer_class = SellsPSerializer
    filter_backends = (DjangoFilterBackend,)
    filterset_class = BuyesFilter
    permission_classes = (IsAuthenticatedOrReadOnly,)

class CartViewSet(viewsets.ModelViewSet):
    queryset = Cart.objects.all().order_by('id')
    serializer_class = CartSerializer
    filter_backends = (DjangoFilterBackend,)
    filterset_class = CartFilter
    permission_classes = (IsAuthenticatedOrReadOnly,)

class MinMaxViewSet(viewsets.ModelViewSet):
    queryset = Model3d.objects.aggregate(Max('price'))
    serializer_class = MinMaxSerializer

class PurchaseViewSet(viewsets.ModelViewSet):

    queryset = Model3d.objects.aggregate(Max('price'))
    serializer_class = PurchaseSerializer
    permission_classes = (IsAuthenticated,)