from django.urls import path
from apiApp.views import MGNREGADataListView, MGNREGADataDetailView

urlpatterns = [
    path('data/', MGNREGADataListView.as_view(), name='mgnrega-list'),
    path('data/<int:pk>/', MGNREGADataDetailView.as_view(), name='mgnrega-detail'),
]