from decimal import Decimal
from django.conf import settings
from django.core.validators import MinValueValidator
from django.db import models

# Create your models here.
User = settings.AUTH_USER_MODEL

# Create your models here.


class Deposit(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    amount = models.DecimalField(
      decimal_places=2,
      max_digits=12,
      validators=[
          MinValueValidator(Decimal('10.00'))
          ]
      )
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.user)