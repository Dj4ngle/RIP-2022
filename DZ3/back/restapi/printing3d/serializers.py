import pymysql
from django.db.models import Max, Min
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
        # Модель, которую мы сериализуем
        model = Model3d
        # Поля, которые мы сериализуем
        fields = ''

    def to_representation(self, instance):
        representation = Model3d.objects.aggregate(Max('price'))
        representation.update(Model3d.objects.aggregate(Min('price')))
        return representation

class PurchaseSerializer(serializers.ModelSerializer):
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
        sql = """
            SELECT printing3d_purchase.id, name, price, image_path, quantity, model, id_purchase,  printing3d_purchase.colour, printing3d_purchase.size, sell_date, id_user, status, comment 
            FROM printing3d_model3d 
            INNER JOIN printing3d_purchase 
            ON printing3d_model3d.id = printing3d_purchase.model
            INNER JOIN printing3d_sell3d 
            ON printing3d_sell3d.id = printing3d_purchase.id_purchase;
        """
        cur.execute(sql)
        rows = cur.fetchall()
        connection.close()
        representation = rows

        return representation