from django.shortcuts import render
from rest_framework import generics, permissions, authentication
from rest_framework.views import APIView
from .models import Tweets, CommentTweets, TweetsLike
from .serializers import TweetSerializer, CommentSerializer, LikeSerializer
from rest_framework.response import Response
import json
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_protect
# Create your views here.


class ListTwests(generics.ListCreateAPIView):

    queryset = Tweets.objects.all()
    serializer_class = TweetSerializer

    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class TweetDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Tweets.objects.all()
    serializer_class = TweetSerializer


class ListLike(generics.ListAPIView):

    queryset = TweetsLike.objects.all()
    serializer_class = LikeSerializer


# @csrf_protect
class LikeDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = TweetsLike.objects.all()
    serializer_class = LikeSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    authentication_classes = [authentication.SessionAuthentication]
    authentication_classes = [authentication.BasicAuthentication]

    def sadric(self):
        print(self.request.user)


class ListCommets(generics.ListCreateAPIView):
    queryset = CommentTweets.objects.all()
    serializer_class = CommentSerializer


class CommentDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = CommentTweets.objects.all()
    serializer_class = CommentSerializer
