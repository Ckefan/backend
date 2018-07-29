from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from api.models import UserInfo
from django.core import serializers #序列化数据
from django.contrib.auth.hashers import make_password,check_password
import json


# Create your views here.
def index(request):
    # list = UserInfo.objects.all()
    # posts_serialized = serializers.serialize('json', list)
    info = {'msg': '请求成功！', 'code': 1}
    data = []
    # for i in json.loads(posts_serialized):
    #     data.append(i['fields'])
    info['data'] = []
    if 'username' in request.POST:
        user = UserInfo.objects.get(username=request.POST['username'])
        succ = check_password(request.POST['password'],user.password)
        print(succ)
        if succ:
            info['msg']='登录成功！'
        else:
            info['msg']='用户名或密码错误！'
    else:
         info['msg']='请填写用户名或密码！'
   
    return JsonResponse(info, safe=False)

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