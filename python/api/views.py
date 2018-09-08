from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from api.models import UserInfo
from django.core import serializers  #序列化数据
from django.contrib.auth.hashers import make_password, check_password
from django.contrib.auth.models import User
from django.contrib import auth
import json

info = {'msg': '', 'code': 1}


def create_user(request):
    username = request.POST.get('username', '')
    password = request.POST.get('password', '')
    user = User.objects.create_user(username=username, password=password)
    user.is_staff = True
    user.save()
    info['msg'] = '注册成功！'
    info['data'] = []
    return JsonResponse(info, safe=False)


def set_password(request):
    username = request.POST.get('username', '')
    password = request.POST.get('password', '')
    user = User.objects.get(username=username)
    user.set_password(password)
    user.save()
    info['msg'] = '密码修改成功!'
    info['data'] = []
    return JsonResponse(info, safe=False)


def index(request):
    username = request.POST.get('username', '')
    password = request.POST.get('password', '')
    user = auth.authenticate(username=username, password=password)
    if user is not None and user.is_active:
        auth.login(request, user)
        info['msg'] = '登陆成功!'
        info['code'] = 1
    else:
        info['msg'] = '用户名或密码错误,请重新输入!'
        info['code'] = -1

    return JsonResponse(info, safe=False)


def home(request):
    info['data'] = []


#模板文件
# def hello(request):
#     list = BooksPublisher.objects.all()
#     posts_serialized = serializers.serialize('json', list)
#     info = {'msg': '请求成功！', 'code': 1}
#     data = []
#     for i in json.loads(posts_serialized):
#         data.append(i['fields'])
#     info['data'] = data
#     print(info)
#     context ={}
#     context['hello']='Hello World'
#     return render(request,'first.html',info)