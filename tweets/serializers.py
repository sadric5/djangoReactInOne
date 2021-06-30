from rest_framework import serializers
from .models import *


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = CommentTweets
        fields = '__all__'


class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = TweetsLike
        fields = '__all__'


class TweetSerializer(serializers.ModelSerializer):
    comment = CommentSerializer(many=True, read_only=True)
    like = LikeSerializer(read_only=True)

    class Meta:
        model = Tweets
        fields = '__all__'


# class UserslikeSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = UsersLike
#         fields = '__all__'


# class UsersDislikeSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = UsersDislike
#         fields = '__all__'
