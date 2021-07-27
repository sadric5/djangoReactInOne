from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse

# Create your views here.


@login_required(login_url='login/', redirect_field_name='next')
def index(request):
    return render(request, 'frontend/index.html')


@login_required(login_url='/login', redirect_field_name='next')
def profile(request):
    return render(request, template_name='profile.html')
