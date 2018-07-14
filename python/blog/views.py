from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from blog.models import Article

# Create your views here.
def index(request):
    # return HttpResponse({"a":1,"b":2})
    return JsonResponse({"result": 0, "data":[{"name":"liling","age":"15"},{"name":"wanglei","age":"25"},{"name":"qinhuan","age":"35"}],"msg": "执行成功"})

def get(request):
    list = Article.objects.all()

    return HttpResponse(list)

def post(request):
    return HttpResponse("post")