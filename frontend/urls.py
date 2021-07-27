from django.urls import path
from .views import *
from django.contrib.auth import views as auth_views
from django.urls import reverse

urlpatterns = [
    path('', index, name='home'),
    path('login/', auth_views.LoginView.as_view(), name='login'),
    path('logout/', auth_views.LogoutView.as_view(template_name='logout.html'), name='logout'),
    path('profile/', profile, name='profile')

]
