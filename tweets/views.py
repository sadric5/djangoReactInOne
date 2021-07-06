from django.shortcuts import render
from rest_framework import generics, permissions, authentication
from rest_framework.views import APIView
from .models import Tweets, CommentTweets, TweetsLike
from .serializers import *
from rest_framework.response import Response
import json
from rest_framework.views import APIView
from rest_framework import status
from django.contrib.auth.models import User, AnonymousUser
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_protect, ensure_csrf_cookie
# Create your views here.


class AllUser(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly]

# @method_decorator(ensure_csrf_cookie, name='dispatch')


class ListTwests(generics.ListCreateAPIView):

    queryset = Tweets.objects.all()
    serializer_class = TweetSerializer

    authentication_classes = [authentication.SessionAuthentication]


class TweetDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Tweets.objects.all()
    serializer_class = TweetSerializer

    authentication_classes = [authentication.SessionAuthentication]


class ListLike(generics.ListAPIView):

    queryset = TweetsLike.objects.all()
    serializer_class = LikeSerializer


# class LikeDetails(generics.RetrieveUpdateDestroyAPIView):
class LikeDetails(APIView):
    # queryset = TweetsLike.objects.all()
    # serializer_class = LikeSerializer
    # permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [authentication.SessionAuthentication]

    def put(self, request,  pk):
        if request.user == AnonymousUser:
            print('Hi sadric')
            return Response(status=status.HTTP_400_BAD_REQUEST)
        else:
            if UsersLikeDislike.objects.filter(liker=request.user)[1].like == True:
                print('Hi sadric hahaha!')
                return Response({'Message': 'Allready like'})

        tweet = TweetsLike.objects.get(id=pk)
        serialize = LikeSerializer(tweet, data=request.data)
        print(request.data)
        print(request.user)
        if serialize.is_valid():
            serialize.save()
            new = UsersLikeDislike(
                liker=request.user, tweetLiking=tweet.tweet, like=True)
            return Response(serialize.data)
            new.save(force_update=True)
        return Response(serialize.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, pk):
        if request.user == AnonymousUser:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        else:
            tweets = TweetsLike.objects.get(id=pk)
            data = LikeSerializer(tweets).data
            return Response(data)


class ListCommets(generics.ListCreateAPIView):
    queryset = CommentTweets.objects.all()
    serializer_class = CommentSerializer

    authentication_classes = [authentication.SessionAuthentication]


class CommentDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = CommentTweets.objects.all()
    serializer_class = CommentSerializer

    authentication_classes = [authentication.SessionAuthentication]
