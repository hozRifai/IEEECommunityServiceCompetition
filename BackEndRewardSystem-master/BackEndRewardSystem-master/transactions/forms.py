from django import forms

from .models import Deposit


class DepositForm(forms.ModelForm):
    class Meta:
        model = Deposit
        fields = ["amount"]