from django.urls import path

from .views import  PointsListView

urlpatterns = [
    path('', PointsListView.as_view()),
]