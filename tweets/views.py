from django.shortcuts import render
from rest_framework import generics
from .models import Tweets
from .serializers import TweetSerializer
# Create your views here.


class ListTwests(generics.ListCreateAPIView):
    queryset = Tweets.objects.all()
    serializer_class = TweetSerializer
