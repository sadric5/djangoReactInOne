from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User(email=validated_data['email'],
                    username=validated_data['username'])
        user.set_password(validated_data['password'])
        user.save()
        return user


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
