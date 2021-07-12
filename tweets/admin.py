from django.contrib import admin
from .models import *
# Register your models here.
admin.site.register(Tweets)
admin.site.register(CommentTweets)
admin.site.register(TweetsLike)
admin.site.register(UsersLikeDislike)
admin.site.register(Profile)
