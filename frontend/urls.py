from django.urls import path
from .views import *
from django.contrib.auth import views as auth_views
from django.urls import reverse

urlpatterns = [
    path('', index, name='home'),
    path('login/', auth_views.LoginView.as_view(
        extra_context={'next': 'lolo'}
    ), name='login'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
    path('lol/', lol, name='lolo')
]
