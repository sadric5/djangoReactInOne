from rest_framework import serializers
from .models import Tweets, CommentTweets


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = CommentTweets
        fields = '__all__'


class TweetSerializer(serializers.ModelSerializer):
    comment = CommentSerializer(many=True, read_only=True)

    class Meta:
        model = Tweets
        fields = '__all__'
