from rest_framework import serializers
from .models import Tweets, CommentTweets


class TweetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tweets
        fields = ('author', 'create_date', 'content', 'id')


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = CommentTweets
        fields = ('__all__')
