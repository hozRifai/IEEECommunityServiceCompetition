from rest_framework.generics import ListAPIView

from points.models import Points
from .serializers import PointsSerializer


class PointsListView(ListAPIView):
    queryset = Points.objects.all()
    serializer_class = PointsSerializer

