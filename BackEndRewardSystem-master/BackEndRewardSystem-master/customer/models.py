# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib.auth.models import AbstractUser, UserManager
from django.contrib.auth.models import User
from django.core.validators import (
    RegexValidator,
    MinValueValidator,
    MaxValueValidator
)
from django.db import models


from django.contrib.auth.models import User

NAME_REGEX = '^[a-zA-Z ]*$'

GENDER_CHOICE = (
    ("Male", "Male"),
    ("Female", "Female"),
)


class Customer(models.Model):
    username = models.OneToOneField(User, to_field="username", on_delete=models.CASCADE,)
    email = models.EmailField(unique=True)
    account_no = models.PositiveIntegerField(
        unique=True,
        validators=[
            MinValueValidator(10000000),
            MaxValueValidator(99999999)
        ], null=True
    )

    full_name = models.CharField(max_length=256, blank=False,)
    gender = models.CharField(max_length=6, choices=GENDER_CHOICE)
    birth_date = models.DateField(null=True, blank=True)
    contact_no = models.IntegerField(unique=True, null=True)
    Address = models.CharField(max_length=512)
    city = models.CharField(max_length=256)
    country = models.CharField(max_length=256)
    nationality = models.CharField(max_length=256)
    occupation = models.CharField(max_length=256)
    balance = models.PositiveIntegerField(
        default=0, null=True
    )

    picture = models.ImageField(
        null=True,
        blank=True,
        height_field="height_field",
        width_field="width_field",
    )

    height_field = models.IntegerField(default=600, null=True)
    width_field = models.IntegerField(default=600, null=True)

    def __str__(self):
        return str("user: {0} | {1}".format(self.username, self.account_no))


class Goals(models.Model):
    usernameOfGoal = models.ForeignKey(
        Customer, to_field="account_no", on_delete=models.CASCADE, related_name="username_goalss")
    description = models.CharField(max_length=256)
    amount = models.IntegerField(default=0, null=True)
    startDate = models.DateField(null=True, blank=True)
    endDate = models.DateField(null=True, blank=True)

    def __str__(self):
        return str("you are aiming to safe{0} by the end of {1} day".format(self.amount, self.endDate))
