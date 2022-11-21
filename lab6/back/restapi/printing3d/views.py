from rest_framework import viewsets
from printing3d.serializers import *
from printing3d.models import *


class ModelViewSet(viewsets.ModelViewSet):
    queryset = Model3d.objects.all().order_by('id')
    serializer_class = ModelsSerializer  # Сериализатор для модели

class UserViewSet(viewsets.ModelViewSet):
    queryset = User3d.objects.all().order_by('id')
    serializer_class = UsersSerializer  # Сериализатор для модели

class SellViewSet(viewsets.ModelViewSet):
    queryset = Sell3d.objects.all().order_by('id')
    serializer_class = SellsSerializer  # Сериализатор для модели