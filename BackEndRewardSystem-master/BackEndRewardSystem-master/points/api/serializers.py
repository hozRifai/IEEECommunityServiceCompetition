from rest_framework import serializers
from points.models import Points


class PointsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Points
        fields = ('accountNumber', 'username', 'points')

