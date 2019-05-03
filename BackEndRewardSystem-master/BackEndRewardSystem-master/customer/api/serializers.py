from rest_framework import serializers
from customer.models import Customer


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ('username', 'password' 'account_no', 'full_name', 'email', 'gender', 'contact_no', 'Address',
                  'country', 'nationality', 'balance')
