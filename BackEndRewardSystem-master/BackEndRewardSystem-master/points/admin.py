from django.contrib import admin

from .models import Points, Transaction, Survey, Rewards, RewardLevelOne, RewardLevelTwo, Level

# Register your models here.

admin.site.register(Points)
admin.site.register(Transaction)
admin.site.register(Survey)
admin.site.register(Rewards)
admin.site.register(RewardLevelOne)
admin.site.register(RewardLevelTwo)
admin.site.register(Level)