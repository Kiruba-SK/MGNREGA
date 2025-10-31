from rest_framework import serializers
from apiApp.models import MGNREGAData

class MGNREGADataSerializer(serializers.ModelSerializer):
    class Meta:
        model = MGNREGAData
        fields = '__all__'