from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import Group
from django.contrib.auth.forms import ReadOnlyPasswordHashField
from django import forms

from .models import Customer, Goals
# Register your models here.

admin.site.register(Customer)
admin.site.register(Goals)