from django_filters import rest_framework as filters
from printing3d.models import Model3d, Cart
import django_filters


class CharFilterInFilter(filters.BaseInFilter, filters.CharFilter):
    pass
class ModeltFilter(filters.FilterSet):
    name = django_filters.CharFilter(lookup_expr='icontains')
    price = filters.RangeFilter()

    class Meta:
        model = Model3d
        fields = ['price', 'name']

class CartFilter(filters.FilterSet):
    id_user = CharFilterInFilter(field_name='id_user', lookup_expr='in')

    class Meta:
        model = Cart
        fields = ['id_user']