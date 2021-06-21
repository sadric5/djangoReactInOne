from django.test import TestCase
from django.contrib.auth.models import User
from .models import Tweets, CommentTweets
# Create your tests here.


class TweetTestCase(TestCase):
    def setUp(self):
        self.user = User.objects.create(
            username='John',
            password='HomeAware'
        )
        self.tweets = Tweets.objects.create(
            author=self.user,
            content='I Love play with computer power'
        )

        self.commet = CommentTweets(
            who_comment=self.user,
            which_tweet=self.tweets,
            like_tweet=True,
            comment='I love you tweet, it is so inspiring'
        )
        self.commet.save()

    def test_tweet(self):
        valueT = 'I Love play with computer power'
        self.assertEqual(valueT, Tweets.objects.get(id=1).content)
        # self.assertIsNone(self.commet)

    def test_commentTweets(self):
        like = True
        comment = 'I love you tweet, it is so inspiring'
        self.assertEqual(
            like, CommentTweets.objects.get(id=1).like_tweet)
        self.assertEqual(comment, CommentTweets.objects.get(id=1).comment)
