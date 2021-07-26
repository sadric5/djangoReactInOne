from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse

# Create your views here.


@login_required(login_url='login/', redirect_field_name='myNext')
def index(request):
    return render(request, 'frontend/index.html')


def lol(request):
    return HttpResponse('<h1>Helle world!</h2>')
