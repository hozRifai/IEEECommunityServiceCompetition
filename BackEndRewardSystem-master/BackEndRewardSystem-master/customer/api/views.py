from rest_framework.generics import ListAPIView

from customer.models import Customer
from .serializers import UserSerializer


class UserListView(ListAPIView):
    queryset = Customer.objects.all()
    serializer_class = UserSerializer
