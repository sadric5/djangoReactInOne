from django.urls import path
from .views import *

urlpatterns = [
    path('tweets/', ListTwests.as_view(), name='list-create-tweets'),
    path('tweets/<int:pk>', TweetDetail.as_view(), name='tweet-detail'),
    path('comment/', ListCommets.as_view(), name='list-create-comments'),
    path('comment/<int:pk>', CommentDetails.as_view(),
         name='list-comment-for-specific-tweet'),
    path('like/', ListLike.as_view(), name='like'),
    path('like/<int:pk>', LikeDetails.as_view(), name='like-detail'),

]
