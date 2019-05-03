from django.db import models
from django.conf import settings

# Create your models here.
from django.core.validators import (
    RegexValidator,
    MinValueValidator,
    MaxValueValidator
)

from customer.models import Customer


class Points(models.Model):
    username = models.ForeignKey(
        Customer, to_field="account_no", on_delete=models.CASCADE, related_name="username_points")
    points = models.PositiveIntegerField(
        validators=[
            MinValueValidator(00000000),
            MaxValueValidator(99999999)
        ]
    )

    def __str__(self):
        return str(self.accountNumber)


class Level(models.Model):
    username = models.ForeignKey(
        Customer, to_field="account_no", on_delete=models.CASCADE, related_name="username_level")
    levelNumber = models.PositiveIntegerField(default=0, null=True)

    def __str__(self):
        return str("the level of {0} is {1}".format(self.username, self.levelNumber))


class Survey(models.Model):
    username = models.ForeignKey(
        Customer, to_field="account_no", on_delete=models.CASCADE, related_name="username_survey")
    question = models.CharField(max_length=256)
    answer = models.CharField(max_length=256, blank=True)

    def __str__(self):
        return str("the owner of this survey is {0}".format(self.username))


class Transaction(models.Model):
    username = models.ForeignKey(Customer, to_field="account_no",
                                 on_delete=models.CASCADE, related_name="usernaME_transaction")
    amount = models.PositiveIntegerField(default=0, null=True)
    sendTo = models.ForeignKey(Customer, to_field="account_no", on_delete=models.CASCADE,
                               related_name="account_no_transaction")

    def __str__(self):
        return str("{0} has sent {1} $ to {2}".format(
            self.username,
            self.amount,
            self.sendTo)
        )


class Rewards(models.Model):
    description = models.CharField(max_length=254, null=True, unique=True)

    def __str__(self):
        return str("{0}".format(self.description))


class RewardLevelOne(models.Model):
    descriptionLevelOne = models.ForeignKey(
        Rewards, to_field="description", related_name="rewardLevelOne", on_delete=models.CASCADE)

    def __str__(self):
        return str(self.description)


class RewardLevelTwo(models.Model):
    descriptionLevelTwo = models.ForeignKey(
        Rewards, to_field="description", related_name="rewardLevelTwo", on_delete=models.CASCADE)

    def __str__(self):
        return str(self.description)
