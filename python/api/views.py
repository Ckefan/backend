from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from api.models import BooksPublisher
from django.core import serializers
import json


# Create your views here.
def index(request):
    list = BooksPublisher.objects.all()
    posts_serialized = serializers.serialize('json', list)
    info = {'msg': '请求成功！', 'code': 1}
    data = []
    for i in json.loads(posts_serialized):
        data.append(i['fields'])
    info['data'] = data
    # json.loads(posts_serialized),safe=False

    return JsonResponse(info, safe=False)
