from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/points/', include('points.api.urls')),
    path('api/users/', include('customer.api.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),

]
