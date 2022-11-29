from django_filters import rest_framework as filters
from printing3d.models import Model3d
import django_filters


class CharFilterInFilter(filters.BaseInFilter, filters.CharFilter):
    pass
class ModeltFilter(filters.FilterSet):
    name = django_filters.CharFilter(lookup_expr='icontains')
    price = filters.RangeFilter()

    class Meta:
        model = Model3d
        fields = ['price', 'name']
