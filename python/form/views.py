# -*- coding: utf-8 -*-

from django.http import HttpResponse
from django.shortcuts import render_to_response
import json


# Create your views here.

def form(request):
    return render_to_response('form.html')


def search(request):
    if 'q' in request.POST:
        message = "你搜索的内容为：" + request.POST['q']
    else:
        message = "你提交了空表单！"
    print("get::::::::::::::::::",request.POST)
    return HttpResponse(message)