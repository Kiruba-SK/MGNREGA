from django.urls import path, include
from rest_framework.routers import DefaultRouter
from apiApp.views import MGNREGADataViewSet

router = DefaultRouter()
router.register(r'data', MGNREGADataViewSet, basename='mgnrega')

urlpatterns = [
    path('', include(router.urls)),
]