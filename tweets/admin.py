from django.contrib import admin
from .models import Tweets, CommentTweets, TweetsLike
# Register your models here.
admin.site.register(Tweets)
admin.site.register(CommentTweets)
admin.site.register(TweetsLike)
