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
    comment_date = models.DateTimeField(auto_now_add=True)
    numberOfLike = models.IntegerField(editable=False, default=0)
    numberOfDislike = models.IntegerField(editable=False, default=0)

    def save(self, *args, **kwargs):
        self.numberOfDislike = TweetsLike.objects.filter(like=True).count()
        self.numberOfDislike = TweetsLike.objects.filter(like=False).count()
        super().save(*args, **kwargs)


class TweetsLike(models.Model):
    tweet = models.ForeignKey(
        Tweets, related_name='like', on_delete=models.CASCADE)
    like = models.BooleanField(default=False)
    dislike = models.BooleanField(default=False)
