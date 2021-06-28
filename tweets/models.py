from django.db import models
from django.db import models
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError

# Create your models here.


def valide_like(value):
    if value < 0:
        raise ValidationError('The value shoud be positive integer')


class Tweets(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    create_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.content


class CommentTweets(models.Model):
    who_comment = models.ForeignKey(
        User, on_delete=models.CASCADE)
    which_tweet = models.ForeignKey(
        Tweets, related_name='comment', on_delete=models.CASCADE)
    comment = models.TextField(default='No comment')
    comment_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.comment


class TweetsLike(models.Model):
    tweet = models.OneToOneField(
        Tweets, related_name='like', on_delete=models.CASCADE)
    likes = models.IntegerField(default=0, validators=[valide_like])
    dislikes = models.IntegerField(default=0, validators=[valide_like])
