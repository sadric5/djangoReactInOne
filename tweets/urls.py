from django.urls import path
from .views import *

urlpatterns = [
    path('tweets', ListTwests.as_view(), name='list-create-tweets'),
    path('comment/', ListComment.as_view(), name='list-create-comments'),
    path('comment/<int:pk>', ListCommentForSpecifiqueTweet.as_view(),
         name='list-comment-for-specific-tweet')
]
