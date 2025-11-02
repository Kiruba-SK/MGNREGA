from rest_framework import viewsets, filters
from apiApp.models import MGNREGAData
from apiApp.serializers import MGNREGADataSerializer

class MGNREGADataViewSet(viewsets.ModelViewSet):
    queryset = MGNREGAData.objects.all()
    serializer_class = MGNREGADataSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['district_name', 'month', 'fin_year']
    ordering_fields = ['avg_wage_rate', 'avg_days_employment', 'total_wages', 'total_expenditure']
    ordering = ['district_name']
