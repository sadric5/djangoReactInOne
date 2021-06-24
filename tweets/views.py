from django.shortcuts import render
from rest_framework import generics
from rest_framework.views import APIView
from .models import Tweets, CommentTweets
from .serializers import TweetSerializer, CommentSerializer
from rest_framework.response import Response
import json
# Create your views here.


class ListTwests(generics.ListCreateAPIView):
    queryset = Tweets.objects.all()
    serializer_class = TweetSerializer


class TweetDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Tweets.objects.all()
    serializer_class = TweetSerializer


class ListCommentForSpecifiqueTweet(APIView):
    def get(self, request, pk):
        data = {
            'like': 0,
            'dislike': 0,
            'comment': []
        }
        comment = CommentTweets.objects.filter(which_tweet=pk)
        serializer = CommentSerializer(comment, many=True).data
        for item in serializer:
            data['comment'].append(item['comment'])
            if item['like_tweet']:
                data['like'] += 1
            elif item['dislike_tweet']:
                data['dislike'] += 1

        return Response(data)


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
