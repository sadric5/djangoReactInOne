from django.db import models
from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Tweets(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    create_date = models.DateTimeField(auto_now_add=True)


class CommentTweets(models.Model):
    who_comment = models.ForeignKey(
        User, on_delete=models.CASCADE)
    which_tweet = models.ForeignKey(
        Tweets, related_name='comment', on_delete=models.CASCADE)
    comment = models.TextField(default='No comment')
    like_tweet = models.BooleanField(default=False)
    dislike_tweet = models.BooleanField(default=False)
    comment_date = models.DateTimeField(auto_now_add=True)


# class LikeTweets(models):
#     tweet = models.ForeignKey(Tweets, on_delete)
