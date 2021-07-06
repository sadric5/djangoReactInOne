from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import *
from django.contrib.auth.models import User


@receiver(post_save, sender=Tweets)
def incrementsLikeAndDislike(instance, sender, created, **kwargs):
    if created:
        TweetsLike.objects.create(tweet=instance)
        for user in User.objects.all():
            UsersLikeDislike.objects.create(liker=user, tweetLiking=instance)


@receiver(post_save, sender=Tweets)
def save_incrementsLikeAndDislike(sender, instance, **kwargs):
    instance.like.save()
