from django.db import models
from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Tweets(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    create_date = models.DateTimeField(auto_now_add=True)
