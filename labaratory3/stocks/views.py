from rest_framework import viewsets
from stocks.serializers import StockSerializer
from stocks.models import Stock


class StockViewSet(viewsets.ModelViewSet):
    """
    API endpoint, который позволяет просматривать и редактировать акции компаний
    """
    # queryset всех пользователей для фильтрации по дате последнего изменения
    queryset = Stock.objects.all().order_by('date_modified')
    serializer_class = StockSerializer  # Сериализатор для модели
