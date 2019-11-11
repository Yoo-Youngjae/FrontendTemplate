import json

from django.http import HttpResponse, JsonResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_exempt

def first(request):
    return HttpResponse('Hello, World!')

def signup(request):
    if request.method == 'POST':
        req_data = json.loads(request.body.decode())
        try:
            username = req_data['username']
            password = req_data['password']
        except KeyError:
            return HttpResponse(status=400)
        try:
            newUser = User.objects.create_user(username=username, password=password)
            newUser.save()
            return HttpResponse(status=201)
        except: # 실패시 401에러
            return HttpResponse(status=401)
    else:
        return HttpResponse(status=405)

def signin(request):
    if request.method == 'POST':
        req_data = json.loads(request.body.decode())
        try:
            username = req_data['username']
            password = req_data['password']
        except KeyError:
            return HttpResponse(status=400)
        user = authenticate(username=username,password=password)
        if user is not None:
            login(request, user)
            return HttpResponse(status=204)
        else:
            return HttpResponse(status=401)
    else:
        return HttpResponse(status=405)

def signout(request):
    if request.method == 'GET':
        if request.user.is_authenticated: # login 된 상태라
            logout(request)
            return HttpResponse(status=204)
        else:
            return HttpResponse(status=401)
    else:
        return HttpResponse(status=405)

