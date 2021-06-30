from django.shortcuts import render
from rest_framework import generics, permissions
from rest_framework.views import APIView
from .models import Tweets, CommentTweets, TweetsLike
from .serializers import TweetSerializer, CommentSerializer, LikeSerializer
from rest_framework.response import Response
import json
from django.contrib.auth.models import User
# Create your views here.


class ListTwests(generics.ListCreateAPIView):

    queryset = Tweets.objects.all()
    serializer_class = TweetSerializer


class TweetDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Tweets.objects.all()
    serializer_class = TweetSerializer


class ListLike(generics.ListAPIView):

    # queryset = TweetsLike.objects.all()
    serializer_class = LikeSerializer


class LikeDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = TweetsLike.objects.all()
    serializer_class = LikeSerializer

    def sadric(self):
        print(self.request.user)


class ListCommets(generics.ListCreateAPIView):
    queryset = CommentTweets.objects.all()
    serializer_class = CommentSerializer


class CommentDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = CommentTweets.objects.all()
    serializer_class = CommentSerializer


class ListComment(generics.ListCreateAPIView):
    queryset = CommentTweets.objects.all()
    serializer_class = CommentSerializer

    def list(self, request):
        data = {
            'like': 0,
            'dislike': 0
        }
        queryset = self.get_queryset()
        serializer = CommentSerializer(queryset, many=True)
        for item in serializer.data:
            if item['like_tweet']:
                data['like'] += 1
            elif item['dislike_tweet']:
                data['dislike'] += 1
        return Response(serializer.data)
