from django import forms
from customer.models import Customer
class UserForm(forms.ModelForm):
    class Meta:
        model = Customer
        widgets = {
        'password': forms.PasswordInput(),
    }