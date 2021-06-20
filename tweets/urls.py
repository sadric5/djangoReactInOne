from django.urls import path
from .views import *

urlpatterns = [
    path('tweets', ListTwests.as_view())
]
