import pymysql
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

class SellsPSerializer(serializers.ModelSerializer):
    class Meta:
        # Модель, которую мы сериализуем
        model = Purchase
        # Поля, которые мы сериализуем
        fields = '__all__'

class CartSerializer(serializers.ModelSerializer):
    class Meta:
        # Модель, которую мы сериализуем
        model = Cart
        # Поля, которые мы сериализуем
        fields = '__all__'



class MinMaxSerializer(serializers.ModelSerializer):
    class Meta:
        model = Model3d
        fields = ''
    def to_representation(self, instance):

        connection = pymysql.connect(
            host="localhost",
            user="dbuser",
            password="123",
            database="Printing3d",
            cursorclass=pymysql.cursors.DictCursor
        )

        cur = connection.cursor()
        sql = "SELECT max(price) FROM printing3d.printing3d_model3d;"
        cur.execute(sql)
        rows = cur.fetchall()
        for row in rows:
            hu_max = row["max(price)"]

        sql = "SELECT min(price) FROM printing3d.printing3d_model3d;"
        cur.execute(sql)
        rows = cur.fetchall()
        for row in rows:
            hu_min = row["min(price)"]

        connection.close()

        representation = {
            'max': hu_max,
            'min': hu_min,
        }

        return representation
