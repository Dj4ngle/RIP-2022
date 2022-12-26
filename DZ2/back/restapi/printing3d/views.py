from printing3d.serializers import *
from printing3d.models import *
from .service import ModeltFilter, CartFilter, PurchasesFilter, BuyesFilter
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated
from django.conf import settings
from rest_framework import viewsets, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.utils import json
from rest_framework.views import APIView
from django_filters.rest_framework import DjangoFilterBackend
from django.contrib.auth import authenticate
from django.http import HttpResponse
import redis
import uuid
from django.contrib.auth.models import User
from django.utils import timezone

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

session_storage = redis.StrictRedis(host=settings.REDIS_HOST, port=settings.REDIS_PORT)

@api_view(["POST"])
def create_user(request):
    data = json.loads(request.body)
    username = data['username']
    password = data['password']
    u = User.objects.create_user(username=username, password=password)
    if u is not None:
        return HttpResponse("{\"status\": \"ok\"}", content_type='json')
    else:
        return HttpResponse("{\"status\": \"error\", \"error\": \"user creation failed\"}", content_type='json')

@api_view(["POST"])
def add_to_cart(request):
    data = json.loads(request.body)
    ssid = request.COOKIES.get("session_cookie")
    print(ssid)
    quantity = data["quantity"]
    id_model = data["id_model"]
    colour = data["colour"]
    size = data["size"]
    if ssid is not None:
        user = User.objects.get(username=session_storage.get(request.COOKIES.get('session_cookie')).decode())
        Cart.objects.create(id_user=user.id, quantity=quantity, colour=colour, size=size, id_model_id=id_model)
        response = Response("{\"status\": \"ok\"}", content_type="json")
        return response
    else:
        return HttpResponse("{\"status\": \"error\", \"error\": \"haven't been added to cart\"}")

@api_view(["POST"])
def create_sell(request):
    data = json.loads(request.body)
    status = data['status']
    comment = data['comment']
    ssid = request.COOKIES.get("session_cookie")
    user = User.objects.get(username=session_storage.get(ssid).decode())
    if user is not None:
        if user.is_staff:
            u = Sell3d.objects.creat(status=status, comment=comment, id_user=user.id)
            response = Response(data=u.id, content_type='json')
        else:
            u = Sell3d.objects.create(status=status, id_user=user.id)
            response = Response(data=u.id, content_type='json')
        return response
    else:
        return HttpResponse("{\"status\": \"error\", \"error\": \"user creation failed\"}", content_type='json')

@api_view(["POST"])
def create_purchase(request):
    data = json.loads(request.body)
    id_purchase: data['id_purchase']
    id_model: data['id_model']
    quantity: data['quantity']
    colour: data['colour']
    size: data['size']
    ssid = request.COOKIES.get("session_cookie")
    user = User.objects.get(username=session_storage.get(ssid).decode())
    if user is not None:
        Purchase.objects.creat(id_purchase=id_purchase, id_model=id_model,
                               quantity=quantity, colour=colour, size=size)
        return HttpResponse("{\"status\": \"ok\"}", content_type='json')
    else:
        return HttpResponse("{\"status\": \"error\", \"error\": \"user creation failed\"}", content_type='json')

@api_view(["DELETE"])
def delete_in_cart(request):
    data = json.loads(request.body)
    cart_id = data['id_cart']
    ssid = request.COOKIES.get("session_cookie")
    if ssid is not None:
        Cart.objects.filter(id=cart_id).delete()
        response = Response("{\"status\": \"ok\"}", content_type="json")
    else:
        response = Response("{\"status\": \"You have to logIn\"}", content_type="json")
    return response

@api_view(["GET"])
def logout(request):
    ssid = request.COOKIES.get("session_cookie")
    if ssid is not None:
        session_storage.delete(ssid)
        response = Response(status=status.HTTP_200_OK, data="{\"status\": \"successfully logged out\"}")
        response.delete_cookie("session_cookie")
        return response
    else:
        return Response(status=status.HTTP_204_NO_CONTENT)


class AuthView(APIView):
    def post(self, request):
        data = json.loads(request.body)
        username = data["username"]
        password = data["password"]
        user = authenticate(request, username=username, password=password)
        if user is not None:
            key = str(uuid.uuid4())
            session_storage.set(key, username)
            u = User.objects.get(username=username)
            u.last_login = timezone.now()
            u.save()
            response = Response(content_type='json', data={u.id, u.is_staff})
            response.set_cookie("session_cookie", key)
            return response
        else:
            return Response("{\"status\": \"error\", \"error\": \"login failed\"}")