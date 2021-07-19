from django.urls import path
from .views import *
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('', index, name='home'),
    path('login/', auth_views.LoginView.as_view(), name='login'),
]
