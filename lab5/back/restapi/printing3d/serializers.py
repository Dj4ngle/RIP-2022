from printing3d.models import *
from rest_framework import serializers


class ModelsSerializer(serializers.ModelSerializer):
    class Meta:
        # Модель, которую мы сериализуем
        model = Model3d
        # Поля, которые мы сериализуем
        fields = '__all__'

class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        # Модель, которую мы сериализуем
        model = User3d
        # Поля, которые мы сериализуем
        fields = '__all__'

class SellsSerializer(serializers.ModelSerializer):
    class Meta:
        # Модель, которую мы сериализуем
        model = Sell3d
        # Поля, которые мы сериализуем
        fields = '__all__'
